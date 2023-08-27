<template>
  <div>
    <h1>Liste des Logements</h1>
    <ul>
      <li v-for="logement in logements" :key="logement.id">
        {{ logement.titre }} - {{ logement.description }}
      </li>
    </ul>
  </div>
  <div id="guestready-booking-widget__root"
       data-rental="72410"
       data-locale="fr"
       data-reservation-platform-id="132"
       data-base-url="https://openflats.rentalready.io"
  >
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import axios from 'axios';

export default {
  name: 'HelloWorld',
  setup() {
    const logements = ref([]);

    onMounted(async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/logements');
        logements.value = response.data['hydra:member'];

        const script = document.createElement('script');
        script.src = 'https://book.guestready.com/booking_widget/main.js';
        script.async = true;
        document.head.appendChild(script);
      } catch (error) {
        console.error('Erreur lors de la récupération des logements', error);
      }
    });

    return {
      logements,
    };
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
