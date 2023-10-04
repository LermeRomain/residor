<template>
  <NavBar/>
  <div class="container-fluid">
    <div class="row justify-content-center align-items-center">
      <!-- Colonne pour la grande image centrée -->
      <div class="col-12">
        <div class="" v-if="filteredPhotos.length > 0">
          <img
              :src="getPhotoUrl(filteredPhotos[0].imageName)"
              :alt="filteredPhotos[0].imageName"
              class="img-fluid w-100 max-height-img"
          />
        </div>
      </div>
    </div>
    <div class="row">
      <!-- Colonne pour les trois petites images alignées horizontalement (version ordinateur) -->
      <div class="col-12 d-md-block d-none">
        <Carousel :itemsToShow="3" :wrapAround="true" :transition="500">
          <Slide v-for="(photo, index) in filteredPhotos.slice(1, 4)" :key="index">
            <div class="carousel__item">
              <img :src="getPhotoUrl(photo.imageName)" :alt="photo.imageName"
                   class="img-fluid photoright"/>
            </div>
          </Slide>
        </Carousel>
      </div>
      <!-- Colonne pour les deux petites images (version mobile) -->
      <div class="col-12 col-md-4 d-md-none">
        <Carousel :itemsToShow="2" :wrapAround="true" :transition="500">
          <Slide v-for="(photo, index) in filteredPhotos.slice(1, 3)" :key="index">
            <div class="carousel__item">
              <img :src="getPhotoUrl(photo.imageName)" :alt="photo.imageName"
                   class="img-fluid photobis"/>
            </div>
          </Slide>
        </Carousel>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-4 mt-5">
          <!-- Utilisez le composant Api pour afficher le titre et la description du logement -->
          <div class="sticky">
            <div
                id="guestready-booking-widget__root"
                :data-rental="logement.rentalready"
                data-locale="fr"
                data-reservation-platform-id="132"
                data-base-url="https://openflats.rentalready.io"
            ></div>
          </div>
        </div>
        <!-- Colonne fixe à gauche (8 colonnes) -->
        <div class="col-md-8 mt-5">
          <LogementInfos :logement="logement"/>
        </div>
      </div>
    </div>
  </div>
  <Suggestions/>
  <Footer/>
</template>

<script>
import {onMounted, ref, computed} from "vue";
import axios from "axios";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {Carousel, Slide} from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import LogementInfos from "@/components/Logement/LogementInfos";
import Suggestions from "@/components/Logement/Suggestions";

export default {
  name: "LogementDetails",
  components: {Suggestions, LogementInfos, Footer, NavBar, Carousel, Slide},
  props: {
    id: String,
  },
  setup(props) {
    const isScriptLoaded = ref(false);

    const logement = ref({});
    const logementPhotos = ref([]);
    const isLoading = ref(true);

    onMounted(async () => {
      try {
        await fetchLogement(props.id);
        await fetchLogementPhotos(props.id);
        await loadBookingScript();
        isLoading.value = false;
      } catch (error) {
        console.error("An error occurred:", error);
      }
    });

    const loadBookingScript = () => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://book.guestready.com/booking_widget/main.js';
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    };

    const fetchLogement = async (logementId) => {
      try {
        const response = await axios.get(
            `https://127.0.0.1:8000/api/logements/${logementId}`
        );
        const logementData = response.data;
        logement.value = {
          titre: logementData.titre,
          description: logementData.description,
          rating: logementData.rating,
          superficie: logementData.superficie,
          chambres: logementData.chambres,
          capacity: logementData.capacity,
          rentalready: logementData.rentalready,
          descriptionlg: logementData.descriptionlg,
          salledebains: logementData.salledebains,
        };
      } catch (error) {
        console.error(
            "Erreur lors de la récupération des détails du logement",
            error
        );
      }
    };

    const fetchLogementPhotos = async (logementId) => {
      try {
        const response = await axios.get(
            `https://127.0.0.1:8000/api/photos?logementId=${logementId}`
        );
        const photosData = response.data["hydra:member"];
        logementPhotos.value = photosData.map((photo) => ({
          imageName: photo.imageName,
          id: photo.id,
          logementId: photo.idLogements,
        }));
      } catch (error) {
        console.error(
            "Erreur lors de la récupération des photos du logement",
            error
        );
      }
    };

    const getPhotoUrl = (imageName) => {
      return `https://127.0.0.1:8000/images/photos/${imageName}`;
    };

    const extractLogementId = (logementUrl) => {
      const matches = logementUrl.match(/\/api\/logements\/(\d+)/);
      if (matches && matches.length > 1) {
        return parseInt(matches[1], 10);
      } else {
        return null;
      }
    };

    // Filtrer les photos en fonction de l'ID du logement spécifié dans le routeur
    const filteredPhotos = computed(() => {
      return logementPhotos.value.filter(
          (photo) => extractLogementId(photo.logementId) === parseInt(props.id)
      );
    });

    return {
      logement,
      filteredPhotos, // Utilisez les photos filtrées dans le template
      isLoading,
      getPhotoUrl,
      extractLogementId,
      isScriptLoaded,
    };
  },
};
</script>

<style scoped>
/* Ajoutez votre CSS pour la section des photos ici */
.photos {
  margin-top: 20px;
}

.photo {
  display: inline-block;
  margin-bottom: 10px; /* Ajoute une marge en bas des images */
  border-radius: 25px;
}

.max-height-img {
  max-height: 500px; /* Ajustez la valeur en fonction de votre préférence */
  width: 100%;
  object-fit: cover;
}

.img-fluid {
  border-radius: 15px;
  margin-top: 2em;
  margin-right: 10px;
}

/* Ajoutez de l'espace entre les images du carousel */
.carousel__item {
  margin-right: 10px; /* Vous pouvez ajuster la valeur de la marge comme souhaité */
}

.sticky {
  position: sticky;
  top: 20px; /* Ajustez la valeur en fonction de la distance souhaitée depuis le haut */
  z-index: 100; /* Si nécessaire, ajustez la valeur du z-index */
  /* Ajoutez d'autres styles CSS personnalisés selon vos besoins */
}
</style>