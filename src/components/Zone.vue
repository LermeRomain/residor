<template>
  <section class="section bg-light text-white py-5">
    <div class="container-fluid">
      <div class="container-fluid col-md-10">
        <h1 class="title text-dark">Destinations populaires</h1>
        <p class="subtitle text-dark">Nous proposons des séjours de qualité à nos voyageurs dans plus de 7 pays à travers le monde.</p>
      </div>
      <Carousel :itemsToShow="itemsToShow" :wrapAround="true" :transition="500">
        <Slide v-for="slide in 6" :key="slide">
          <div class="carousel__item">
            <div class="card text-bg-dark">
              <div class="image-container">
                <img
                    src="https://book.guestready.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-image.0a2eba96.jpeg&w=1920&q=75"
                    class="card-img" alt="...">
                <div class="zoom-overlay">
                  <span class="zoom-text">T{{ slide }}</span>
                </div>
              </div>
            </div>
          </div>
        </Slide>
      </Carousel>
    </div>
  </section>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Zone',
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      itemsToShow: this.calculateItemsToShow(),
    }
  },
  methods: {
    calculateItemsToShow() {
      const breakpoints = [
        { width: 767, items: 1.2 },  // Petit écran (par exemple, mobile)
        { width: 1023, items: 2.2 }, // Écran moyen (par exemple, tablette)
        { width: Infinity, items: 3.3 }, // Grand écran (par exemple, ordinateur)
      ];

      const screenWidth = window.innerWidth;

      const matchedBreakpoint = breakpoints.find(bp => screenWidth <= bp.width);

      return matchedBreakpoint.items;
    },
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.itemsToShow = this.calculateItemsToShow();
    });
  },
})
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

h3 {
  font-size: 24px;
  font-weight: 700;
}

h4 {
  font-size: 18px;
  font-weight: 300;
  opacity: 75%;
}

.card {
  border: none;
}

.image-container {
  position: relative;
  overflow: hidden;
}

.card-img {
  display: block;
  max-width: 100%;
  height: auto;
  transition: transform 0.3s ease;
}

.zoom-overlay {
  position: absolute;
  bottom: 10px;
  left: 10px;
  background-color: white;
  padding: 5px 10px;
  border-radius: 5px;
  opacity: 1; /* Afficher le bouton en permanence */
}

.zoom-text {
  display: block;
  text-align: center;
  color: black;
  font-size: 18px;
  font-weight: 500;
  height: 2rem;
  width: 4rem;
}

.carousel__item {
  margin: 0 1rem; /* Ajoutez la marge horizontale souhaitée ici */
}

/* Styles spécifiques aux écrans mobiles */
@media (max-width: 767px) {

  .carousel__item {
    margin: 0 0.5rem; /* Ajustez la marge pour les mobiles */
  }
}

section{
  margin-bottom: 2rem;
}
</style>
