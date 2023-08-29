<template>
  <section class="section bg-light text-white py-5">
    <div class="container-fluid">
      <div class="container-fluid col-md-10">
        <h1 class="title text-dark">Destinations populaires</h1>
        <p class="subtitle text-dark">Nous proposons des séjours de qualité à nos voyageurs dans plus de 7 pays à travers le monde.</p>
      </div>
      <carousel :per-page="4" :navigation-enabled="destinations.length > 4">
        <vue-slide v-for="(destination, index) in destinations" :key="index">
          <div class="col-md-3">
            <div class="card text-bg-dark">
              <div class="image-container">
                <img :src="destination.image" class="card-img" alt="...">
                <div class="zoom-overlay">
                  <span class="zoom-text">{{ destination.name }}</span>
                </div>
              </div>
            </div>
          </div>
        </vue-slide>
      </carousel>
    </div>
  </section>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Zone",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Carousel,
    VueSlide: Slide,
  },
  data() {
    return {
      destinations: [
        {
          name: "T1",
          image: "https://book.guestready.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-image.0a2eba96.jpeg&w=1920&q=75"
        },
        {
          name: "T2",
          image: "https://book.guestready.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-image.0a2eba96.jpeg&w=1920&q=75"
        },
        {
          name: "T3",
          image: "https://book.guestready.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-image.0a2eba96.jpeg&w=1920&q=75"
        },
        {
          name: "T4",
          image: "https://book.guestready.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-image.0a2eba96.jpeg&w=1920&q=75"
        },
        {
          name: "T5",
          image: "https://book.guestready.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-image.0a2eba96.jpeg&w=1920&q=75"
        },
      ],
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

.image-container:hover .card-img {
  transform: scale(1.1);
}
</style>
