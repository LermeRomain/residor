<template>
  <div id="guestready-booking-widget__root"
       data-rental="72410"
       data-locale="fr"
       data-reservation-platform-id="132"
       data-base-url="https://openflats.rentalready.io"
  >
  </div>
</template>

<script>
import { onMounted } from 'vue';

export default {
  name: 'HelloWorld',
    setup() {
      onMounted(() => {
        const script = document.createElement('script');
        script.src = 'https://book.guestready.com/booking_widget/main.js';
        script.async = true;
        document.head.appendChild(script);
      });

      return {}; // Assurez-vous de renvoyer un objet ou des valeurs si nécessaire
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
