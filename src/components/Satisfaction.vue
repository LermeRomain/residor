<template>
  <section class="section bg-light text-white py-5">
    <div class="container-fluid col-md-11">
      <div class="card">
        <div class="card-body d-md-flex">
          <!-- Colonne d'image (pour les grands écrans) -->
          <div class="col-md-4">
            <img src="https://medias.paris2024.org/uploads/2022/11/phryge2.png?x-oss-process=image/resize,w_800,h_800,m_lfit/format,png" class="img-fluid" alt="...">
          </div>

          <!-- Colonne de texte -->
          <div class="col-md-8">
            <h1 class="title text-dark">475 000+ voyageurs satisfaits</h1>
            <p class="subtitle text-dark">Avec une grande sélection de locations <br>à court terme et long terme à travers tout Paris,
              <br>il n'est pas étonnant que nos voyageurs <br>reviennent toujours.</p>
           <router-link to="/services"><button class="btn btn-outline-success custom-btn">En savoir plus sur Residor</button></router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Satisfaction"
}
</script>

<style scoped>
.title {
  font-size: 50px;
  font-weight: 600;
}

.subtitle {
  font-size: 18px;
  font-weight: 400;
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
  background-color: #FC9063;
  padding-top: 3rem;
  padding-bottom: 3rem;
  border-radius: 25px;
}

section {
  margin-bottom: 2rem;
}

.custom-btn {
  color: white;
  border-color: white;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s, color 0.3s;
}

.custom-btn:hover {
  background-color: white;
  color: #FC9063;
}

img{
  max-height: 300px;
}
</style>
