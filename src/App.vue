<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <div id="guestready-booking-widget__root"></div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { onMounted } from 'vue';

export default {
  name: 'App',
  components: {
    HelloWorld
  },
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
