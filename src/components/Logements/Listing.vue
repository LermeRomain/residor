<template>
  <div class="sejour">
    <div class="container-fluid col-md-10 pb-5 pt-5">
      <h1 class="title">Trouvez votre séjour idéal</h1>
      <p class="subtitle">Découvrez une sélection de nos maisons les plus réservées</p>
    </div>

    <div class="container-fluid col-md-11">
      <div class="row justify-content-center">
        <div v-for="logement in displayedLogements" :key="logement.id" class="col-md-3">
          <div class="mb-4">
            <router-link :to="{ name: 'logement-details', params: { id: logement.id } }">
              <!-- Utilisation du carrousel Bootstrap avec un identifiant unique -->
              <div :id="'carouselExample_' + logement.id" class="carousel slide">
                <!-- Réglez la durée du slide en millisecondes (3000 ms = 3 secondes) -->
                <div class="carousel-inner">
                  <template v-for="(photo, photoIndex) in logementPhotosMap[logement.id].slice(0, 4)"
                            :key="photoIndex">
                    <div :class="{ 'carousel-item': true, active: photoIndex === 0 }">
                      <img :src="getPhotoUrl(photo.imageName)" class="d-block card-img-top mb-2 rounded-square"
                           :alt="photo.imageName">
                    </div>
                  </template>
                </div>
                <a class="carousel-control-prev ml-2" :href="'#carouselExample_' + logement.id" role="button"
                   data-bs-slide="prev">
                  <i class="custom-icon custom-prev-icon"></i>
                </a>
                <a class="carousel-control-next mr-2" :href="'#carouselExample_' + logement.id" role="button"
                   data-bs-slide="next">
                  <i class="custom-icon custom-next-icon"></i>
                </a>
              </div>
              <!-- Fin du carrousel Bootstrap -->
            </router-link>
            <div class="card-body card-wrapper">
              <div>
                <p class="font-weight-bold">{{ logement.titre }}</p>
                <p class="small">{{ logement.description }}</p>
                <p class="mt-1">A partir de <span class="font-weight-bold">{{ logement.prixmoyen }}€</span> par nuit</p>
              </div>
              <h5>
                <span class="badge bg-perso p-2 text-white align-items-end">
                  <i class="fa fa-star mr-2"></i>
                  {{ logement.rating }}
                </span>
              </h5>
            </div>
          </div>
        </div>
        <div class="container-fluid col-md-11">
          <div class="row justify-content-center">
            <div class="col-md-12 text-center">
              <h5>Poursuivez l'exploration des Residors</h5>
              <button @click="loadMoreLogements" class="btn custom-btn">Afficher plus</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {onMounted, ref, computed} from 'vue';
import axios from 'axios';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Listing',
  setup() {
    const logements = ref([]);
    const logementPhotosMap = ref({});
    const isLoading = ref(true);
    const logementsPerPage = ref(8); // Nombre de logements à afficher à la fois

    onMounted(async () => {
      try {
        await fetchLogements();
        await fetchPhotos();
        isLoading.value = false;
      } catch (error) {
        console.error('An error occurred:', error);
      }
    });

    const fetchLogements = async () => {
      try {
        const response = await axios.get('https://127.0.0.1:8000/api/logements');
        logements.value = response.data['hydra:member'].map((logement) => ({
          id: logement.id,
          titre: logement.titre,
          description: logement.description,
          rating: logement.rating,
          prixmoyen: logement.prixmoyen,
        }));
      } catch (error) {
        console.error('Erreur lors de la récupération des logements', error);
      }
    };

    const fetchPhotos = async () => {
      try {
        const response = await axios.get('https://127.0.0.1:8000/api/photos');
        const photosData = response.data['hydra:member'];

        photosData.forEach((photo) => {
          const logementId = extractIdFromUrl(photo.id_logements);
          if (!logementPhotosMap.value[logementId]) {
            logementPhotosMap.value[logementId] = [];
          }
          logementPhotosMap.value[logementId].push({
            imageName: photo.imageName,
          });
        });
      } catch (error) {
        console.error('Erreur lors de la récupération des images', error);
      }
    };

    function extractIdFromUrl(url) {
      const parts = url.split('/');
      return parseInt(parts[parts.length - 1], 10);
    }

    const getPhotoUrl = (imageName) => {
      return `https://127.0.0.1:8000/images/photos/${imageName}`;
    };

    // Filtrer les logements avec au moins une photo associée
    const logementsWithPhotos = computed(() => {
      return logements.value.filter(
          (logement) =>
              logementPhotosMap.value[logement.id] &&
              logementPhotosMap.value[logement.id].length > 0
      );
    });

    // Afficher les logements en fonction de logementsPerPage
    const displayedLogements = computed(() =>
        logementsWithPhotos.value.slice(0, logementsPerPage.value)
    );

    // Méthode pour charger plus de logements
    const loadMoreLogements = () => {
      logementsPerPage.value += 8; // Chargez 8 de plus
    };

    return {
      displayedLogements,
      logementPhotosMap,
      getPhotoUrl,
      isLoading,
      loadMoreLogements,
    };
  },
};
</script>

<style scoped>
.title {
  font-size: 60px;
  font-weight: 600;
}

.subtitle {
  font-size: 18px;
  font-weight: 300;
}

.sejour {
  margin-bottom: 2rem;
  padding-bottom: 3rem;
}

.card-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.card-img-top {
  border-radius: 15px;
  width: 100%;
  height: 200px;
  object-fit: cover;
}

h5 {
  font-family: Helvetica, sans-serif;
}

p {
  font-family: Helvetica, sans-serif;
  margin-bottom: 0px;
}

.rounded-square {
  border-radius: 15px; /* Bordure arrondie pour garder un aspect carré */
  width: 100%; /* Largeur souhaitée pour les images carrées */
  height: 350px; /* Hauteur souhaitée pour les images carrées */
  object-fit: cover; /* Redimensionner l'image pour qu'elle remplisse le conteneur carré */
}

.bg-perso {
  background-color: rgb(75, 108, 204);
}

/* Styles personnalisés pour les flèches du carrousel */
.carousel-control-prev,
.carousel-control-next {
  width: 40px; /* Largeur personnalisée */
  height: 40px; /* Hauteur personnalisée */
  background-color: white; /* Fond blanc */
  border-radius: 50%; /* Forme ronde */
  color: black; /* Couleur du texte noire */
  font-size: 24px; /* Taille de la police personnalisée */
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none; /* Suppression du soulignage */
}

/* Styles personnalisés pour les icônes personnalisées */
.custom-icon {
  font-family: Arial, sans-serif; /* Utilisez une police de caractères appropriée */
}

.custom-prev-icon::before {
  content: "←"; /* Caractère de flèche pour la flèche de gauche */
}

.custom-next-icon::before {
  content: "→"; /* Caractère de flèche pour la flèche de droite */
}

/* Centrage vertical des flèches */
.carousel-control-prev,
.carousel-control-next {
  top: calc(50% - 20px); /* Réglage de la position verticale */
}

.custom-btn {
  color: #FC9063;
  border-color: #FC9063;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s, color 0.3s;
  margin: 1rem;
}

.custom-btn:hover {
  background-color: #FC9063;
  color: white;
  border-color: white;
}
</style>
