<template>
  <section>
    <div class="container-fluid col-md-11 text-center">
      <h1 class="title">Nos valeurs</h1>
      <div class="row align-items-center">
        <div class="col-md-6">
          <img src="https://book.guestready.com/_next/image?url=%2Fassets%2Fimages%2FaboutUs%2Finfo_2.jpeg&w=2048&q=75" alt="Image" class="img-fluid">
        </div>
        <div class="col-md-6">
          <div class="row">
            <div class="col-md-6">
              <h2 class="subtitle">Solidarité</h2>
              <i class="fa-solid fa-handshake"></i>
            </div>
            <div class="col-md-6">
              <h2 class="subtitle">Passion</h2>
              <i class="fa-solid fa-fire"></i>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <h2 class="subtitle">Détermination</h2>
              <i class="fa-solid fa-bullseye"></i>
            </div>
            <div class="col-md-6">
              <h2 class="subtitle">Excellence</h2>
              <i class="fa-solid fa-graduation-cap"></i>
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
  name: "Valeurs2"
}
</script>

<style scoped>
section {
  background-color: white;
  padding-top: 3rem;
  padding-bottom: 3rem;
}
.title {
  font-size: 3rem;
  font-weight: 600;
  color: #f6692c;
  font-family: poppin,cursive;
}

.img-fluid{
  border-radius: 25px;
}

.fa-solid{
  font-size: 5rem;
  color: #f6692c;
  font-weight: 900;
}

.row{
  margin-top: 3rem;
  margin-bottom: 3rem;
}

.subtitle{
  margin-bottom: 1rem;
  font-family: poppin,cursive;
}
</style>
