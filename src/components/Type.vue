<template>
  <section class="section bg-light text-white py-5">
    <div class="container-fluid">
      <div class="container-fluid col-md-10">
        <h1 class="title text-dark">Type de propriété</h1>
        <p class="subtitle text-dark">Vacances en famille ou week-end en ville ? Choisissez le logement qui répond à vos
          besoins.</p>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-3 m-3">
          <div class="card text-bg-dark">
            <div class="image-container">
              <img
                  src="https://book.guestready.com/_next/image?url=%2Fassets%2Fimages%2FpropertyTypes%2Fstudio.jpg&w=2048&q=75"
                  class="card-img" alt="...">
              <div class="zoom-overlay">
                <span class="zoom-text">T1</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3 m-3">
          <div class="card text-bg-dark">
            <div class="image-container">
              <img
                  src="https://book.guestready.com/_next/image?url=%2Fassets%2Fimages%2FpropertyTypes%2Fapartment.jpg&w=2048&q=75"
                  class="card-img" alt="...">
              <div class="zoom-overlay">
                <span class="zoom-text">T2</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3 m-3">
          <div class="card text-bg-dark">
            <div class="image-container">
              <img
                  src="https://book.guestready.com/_next/image?url=%2Fassets%2Fimages%2FpropertyTypes%2Fhouse.jpg&w=2048&q=75"
                  class="card-img" alt="...">
              <div class="zoom-overlay">
                <span class="zoom-text">T3</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Type",
};
</script>

<style scoped>

section{
  margin-bottom: 2rem;
}

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
