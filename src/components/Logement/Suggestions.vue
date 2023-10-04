<template>
  <div class="container-fluid">
    <div class="container col-md-12 pb-3">
      <h1 class="title">Nos suggestions</h1>
      <p class="subtitle">Découvrez une sélection de nos maisons les plus réservées</p>
    </div>

    <div class="container col-md-12 ">
      <div class="row justify-content-center">
        <div v-for="logement in logements.slice(0, 4)" :key="logement.id" class="col-md-3">

          <div class="card custom-card-width mb-4">
            <!-- Utilisez v-if pour conditionnellement afficher le contenu -->
            <div v-if="!isLoading">
              <router-link :to="{ name: 'logement-details', params: { id: logement.id } }">
                <img v-if="logementPhotosMap[logement.id]" :src="getPhotoUrl(logementPhotosMap[logement.id].imageName)"
                     class="card-img-top" :alt="logementPhotosMap[logement.id].imageName">
              </router-link>
              <div class="card-body">
                <div class="d-flex align-items-start">
                  <h5>
                    <span class="badge bg-perso p-2 text-white">
                      <i class="fa fa-star mr-2"></i>
                      {{ logement.rating }}
                    </span>
                  </h5>
                </div>
                <div class="d-flex flex-column align-items-start"> <!-- Enveloppez le titre et la description dans une div -->
                  <p class="font-weight-bold">{{ logement.titre }}</p>
                  <p class="small">{{ logement.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {onMounted, ref} from 'vue';
import axios from 'axios';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Suggestions',
  setup() {
    const logements = ref([]);
    const logementPhotosMap = ref({});
    const isLoading = ref(true);

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
        logements.value = response.data['hydra:member'].map(logement => ({
          id: logement.id,
          titre: logement.titre,
          description: logement.description,
          rating: logement.rating,
          superficie: logement.superficie,
        }));

        // Ajoutez un message de débogage pour vérifier les données du logement
        console.log("Données des logements récupérées :", logements.value);
      } catch (error) {
        console.error('Erreur lors de la récupération des logements', error);
      }
    };

    const fetchPhotos = async () => {
      try {
        const response = await axios.get('https://127.0.0.1:8000/api/photos');
        const photosData = response.data['hydra:member'];

        photosData.forEach(photo => {
          const logementId = extractIdFromUrl(photo.id_logements);
          if (!logementPhotosMap.value[logementId]) {
            logementPhotosMap.value[logementId] = {
              imageName: photo.imageName,
            };
          }
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

    return {
      logements,
      logementPhotosMap,
      getPhotoUrl,
      isLoading,
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

.container-fluid {
  padding-top: 5rem;
  padding-bottom: 5rem;
}

.card {
  border: none;
  border-radius: 15px;
}

.card:hover {
  transform: scale(1.07); /* Grossissement de 10% */
  transition: transform 0.3s ease; /* Transition fluide */
}

.custom-card-width {
  width: 100%;
}

.custom-card-width {
  width: 100%;
}

.card-img-top {
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}

h5{
  font-family: Helvetica, sans-serif;
}

p{
  font-family: Helvetica, sans-serif;
  margin-bottom: 0px;
}

.bg-perso {
  background-color: rgb(75, 108, 204);
}
</style>
