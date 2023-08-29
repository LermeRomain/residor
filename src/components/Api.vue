<template>
  <div>
    <div
        id="guestready-booking-widget__root"
        :data-rental="propertyId"
        data-locale="fr"
        data-reservation-platform-id="132"
        data-base-url="https://openflats.rentalready.io"
    ></div>
    <h1>Logements</h1>
    <ul>
      <li v-for="logement in logements" :key="logement.id">
        <h2>{{ logement.titre }}</h2>
        <p>{{ logement.description }}</p>
        <p>{{ logement.rating }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import axios from "axios";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Api',
  setup() {
    const logements = ref([]);
    const propertyId = 72410; // Remplacez par l'ID de la propriété que vous souhaitez afficher

    onMounted(async () => {
      try {
        await fetchLogements();
        loadBookingScript();
      } catch (error) {
        console.error('Une erreur est survenue :', error);
      }
    });

    const fetchLogements = async () => {
      try {
        const response = await axios.get('https://127.0.0.1:8000/api/logements'); // Utilisez le bon chemin vers votre endpoint logements
        logements.value = response.data['hydra:member'];
      } catch (error) {
        console.error('Erreur lors de la récupération des logements', error);
      }
    };

    const loadBookingScript = () => {
      const script = document.createElement('script');
      script.src = 'https://book.guestready.com/booking_widget/main.js';
      script.async = true;
      document.head.appendChild(script);
    };

    return {
      logements,
      propertyId,
    };
  },
};
</script>

<style scoped>
/* Vos styles spécifiques au composant ici */
</style>
