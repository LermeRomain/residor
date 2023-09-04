import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router';

const app = createApp(App);

// Utilisez le routeur dans votre application Vue.js
app.use(router);

app.mount('#app');
