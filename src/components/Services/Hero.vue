<template>
  <section>
    <div class="container-fluid col-md-7 relative-container">
      <!-- Nuages animés derrière les titres -->
      <div class="cloud cloud-behind-title cloud1"></div>
      <div class="cloud cloud-behind-title cloud2 m-4"></div>
      <h1 class="title text-center">On s’occupe de tout et on le fait bien !</h1>
      <h2 class="subtitle text-center">Nos services de conciergerie</h2>
      <!-- Fin des nuages animés derrière les titres -->
    </div>
    <div class="container text-center">
      <!-- Nuages animés pour le contenu -->
      <div class="cloud cloud-content cloud3"></div>
      <div class="cloud cloud-content cloud4 m-4"></div>
      <div class="row">
        <div class="col">
          <p>Vous partez et revenez l’esprit tranquiiiiiiille</p>
        </div>
        <div class="col">
          <p>Les voyageurs passent un moment inoubliable</p>
        </div>
        <div class="col">
          <p>Votre logement est toujours impeccable</p>
        </div>
      </div>
      <!-- Fin des nuages animés pour le contenu -->
    </div>
  </section>
</template>


<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Hero",
}
</script>

<style scoped>
section {
  margin-top: 3rem;
  position: relative; /* Permet de positionner les nuages par rapport à cette section */
}

.title {
  font-size: 4rem;
  font-family: poppin, cursive;
  font-weight: 600;
}

.subtitle {
  font-size: 3rem;
  font-family: poppin, cursive;
  font-weight: 600;
}

p {
  font-size: 2rem;
  font-family: poppin, cursive;
  font-weight: 600;
}

.container {
  margin-top: 5rem;
}

/* CSS pour les nuages animés derrière les titres */
.cloud {
  height: 30px;
  opacity: 40%;
  background-color: #87CEEB; /* Couleur bleue */
  border-radius: 100px;
  position: absolute;
  top: 50%;
  animation-duration: 3s; /* Durée de l'animation */
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

.cloud-behind-title {
  z-index: -1; /* Place le nuage derrière les titres */
  animation-direction: alternate; /* Animation aller-retour */
}

.cloud-content {
  z-index: -1; /* Place le nuage devant le contenu */
  animation-direction: alternate; /* Animation aller-retour */
}

.cloud1 {
  left: -200px; /* Position horizontale initiale en dehors de l'écran à gauche */
  width: 100px; /* Largeur initiale */
  animation-name: changeWidthLeft1; /* Animation de gauche à droite */
  animation-delay: 0s; /* Délai avant le départ de l'animation */
}

.cloud2 {
  left: -200px; /* Position horizontale initiale en dehors de l'écran à gauche */
  width: 150px; /* Largeur initiale */
  animation-name: changeWidthLeft2; /* Animation de gauche à droite */
  animation-delay: 1s; /* Délai avant le départ de l'animation */
}

.cloud3 {
  right: 200px; /* Position horizontale initiale en dehors de l'écran à droite */
  width: 80px; /* Largeur initiale */
  animation-name: changeWidthRight1; /* Animation de droite à gauche */
  animation-delay: 0s; /* Délai avant le départ de l'animation */
}

.cloud4 {
  right: 200px; /* Position horizontale initiale en dehors de l'écran à droite */
  width: 120px; /* Largeur initiale */
  animation-name: changeWidthRight2; /* Animation de droite à gauche */
  animation-delay: 1s; /* Délai avant le départ de l'animation */
}

@keyframes changeWidthLeft1 {
  0% {
    left: -200px;
    width: 100px;
  }
  100% {
    left: 0;
    width: 200px;
  }
}

@keyframes changeWidthLeft2 {
  0% {
    left: -200px;
    width: 150px;
  }
  100% {
    left: 0;
    width: 250px;
  }
}

@keyframes changeWidthRight1 {
  0% {
    right: 200px;
    width: 80px;
  }
  100% {
    right: 0;
    width: 160px;
  }
}

@keyframes changeWidthRight2 {
  0% {
    right: 200px;
    width: 120px;
  }
  100% {
    right: 0;
    width: 240px;
  }
}
</style>
