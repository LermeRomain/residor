<template>
  <section>
    <div class="container-fluid col-md-7 relative-container">
      <!-- Nuages animés derrière les titres -->
      <div class="cloud cloud-behind-title"></div>
      <div class="cloud cloud-behind-title m-5"></div>
      <h1 class="title text-center">On s’occupe de tout et on le fait bien !</h1>
      <h2 class="subtitle text-center">Nos services de conciergerie</h2>
      <!-- Fin des nuages animés derrière les titres -->
    </div>
    <div class="container text-center">
      <!-- Nuages animés pour le contenu -->
      <div class="cloud cloud-content"></div>
      <div class="cloud cloud-content"></div>
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
  width: 200px;
  height: 50px;
  opacity: 25%;
  background-color: #87CEEB; /* Couleur bleue */
  border-radius: 100px;
  position: absolute;
  top: 50%;
  animation-duration: 3s; /* Durée de l'animation */
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

.cloud-behind-title {
  left: -200px; /* Position horizontale initiale en dehors de l'écran à gauche */
  z-index: -1; /* Place le nuage derrière les titres */
  animation-name: moveCloudLeft; /* Animation de droite à gauche */
  animation-direction: alternate; /* Animation aller-retour */
  animation-delay: 2s; /* Délai avant le départ de l'animation */
}

.cloud-content {
  right: 200px; /* Position horizontale initiale en dehors de l'écran à droite */
  z-index: -1; /* Place le nuage devant le contenu */
  animation-name: moveCloudRight; /* Animation de gauche à droite */
  animation-direction: alternate; /* Animation aller-retour */
  animation-delay: 1s; /* Délai avant le départ de l'animation */
}

@keyframes moveCloudLeft {
  0% {
    left: -200px;
  }
  100% {
    left: 0;
  }
}

@keyframes moveCloudRight {
  0% {
    right: 200px;
  }
  100% {
    right: 0;
  }
}
</style>
