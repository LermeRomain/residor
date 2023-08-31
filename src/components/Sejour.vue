<template>
  <div class="sejour">
    <div class="container-fluid col-md-10">
      <h1 class="title text-white">Trouvez votre séjour idéal</h1>
      <p class="subtitle text-white">Découvrez une sélection de nos maisons les plus réservées</p>
    </div>

    <div class="container-fluid col-md-11">
      <div class="row justify-content-center">
        <div v-for="logement in logements.slice(0, 4)" :key="logement.id" class="col-md-3">
          <div class="card custom-card-width mb-4">
            <img v-if="logementPhotosMap[logement.id]" :src="getPhotoUrl(logementPhotosMap[logement.id].imageName)" class="card-img-top" :alt="logementPhotosMap[logement.id].imageName">
            <div class="card-body">
              <div class="d-flex align-items-start">
                <h5>
                  <span class="badge bg-info">
                    <i class="fa fa-star"></i>
                    {{ logement.rating }}
                  </span>
                </h5>
              </div>
              <div class="d-flex align-items-start">
                <p class="font-weight-bold">{{ logement.titre }}</p>
              </div>
              <div class="d-flex align-items-start">
                <p class="small">{{ logement.description }}</p>
              </div>
              <div class="d-flex justify-content-between align-items-center mt-3">
                <div v-for="icon in logement.icons" :key="icon.name" class="d-flex align-items-center">
                  <i :class="icon.class"></i><span class="ms-1">{{ icon.number }}</span>
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
import { onMounted, ref } from 'vue';
import axios from 'axios';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Sejour',
  setup() {
    const logements = ref([]);
    const logementPhotosMap = ref({}); // Create a map for logement IDs to photos

    onMounted(async () => {
      try {
        await fetchLogements();
        await fetchPhotos();
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
          icons: [
            { name: 'user', class: 'fa-solid fa-user m-1', number: logement.capacity },
            { name: 'bed', class: 'fa-solid fa-bed m-1', number: logement.chambres },
            { name: 'shower', class: 'fa-solid fa-shower m-1', number: logement.douche },
            { name: 'house', class: 'fa-solid fa-house m-1', number: logement.superficie }
          ],
        }));
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
  background-color: #FC9063;
  margin-bottom: 2rem;
}

.card {
  border: none;
  border-radius: 25px;
}

.custom-card-width {
  width: 100%;
}

.card-img-top {
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
}
</style>
