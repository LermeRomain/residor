<template>
  <section>
    <div class="container-fluid col-md-7 relative-container">
      <!-- Nuages animés derrière les titres -->
      <div class="cloud cloud-behind-title cloud1"></div>
      <div class="cloud cloud-behind-title cloud2 m-4"></div>
    </div>
    <div class="container text-center">
      <!-- Numéros au centre -->
      <div class="row">
        <div class="col">
          <div v-for="(item, index) in evenItems" :key="index" class="col-md-12">
            <div class="number-wrapper">
              <p class="text">{{ item.text }}</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div v-for="(item, index) in items" :key="index" class="col-md-12">
            <div class="number-wrapper">
              <div class="number-circle">
                <div class="number">{{ item.number }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div v-for="(item, index) in oddItems" :key="index" class="col-md-12">
            <div class="number-wrapper">
              <p class="text">{{ item.text }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Fin des numéros au centre -->
      <!-- Nuages animés pour le contenu -->
      <div class="cloud cloud-content cloud3"></div>
      <div class="cloud cloud-content cloud4 m-4"></div>
      <!-- Fin des nuages animés pour le contenu -->
    </div>
  </section>
</template>


<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Resume",
  data() {
    return {
      items: [
        {number: 1, text: "Vous nous confiez vos clés"},
        {number: 3, text: "On accueille les voyageurs comme à l’hôtel !"},
        {number: 5, text: "Nos partenaires font le ménage avant et après"},
        {number: 7, text: "Et vos voyageurs seront contents de revenir ;)"}
      ],
      items2: [
        {number: 2, text: "On gère votre annonce Airbnb pour la rendre séduisante"},
        {number: 4, text: "On veille sur votre logement et vos voyageurs"},
        {number: 6, text: "Vous êtes content de rentrer chez vous !"},
      ]
    };
  },
  computed: {
    evenItems() {
      return this.items.filter((item, index) => index % 2 === 0);
    },
    oddItems() {
      return this.items.filter((item, index) => index % 2 !== 0);
    },
  },
}
</script>

<style scoped>
section {
  margin-top: 3rem;
  position: relative; /* Permet de positionner les nuages par rapport à cette section */
  background-color: rgb(223, 229, 246);
  z-index: -1;
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
  opacity: 60%;
  background-color: white; /* Couleur bleue */
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

.number {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.number {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
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

.number-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Pour centrer verticalement */
  margin-bottom: 1rem;
}

.number-circle {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  min-width: 8rem;
  min-height: 8rem;
  background: rgb(255, 255, 255);
  color: rgb(1, 79, 255);
  box-shadow: rgba(31, 54, 107, 0.13) 0px 2px 5px 0px;
  font-size: 3.5rem;
}

.number {
  font-size: 3rem;
  font-weight: bold;
  color: #FC9063; /* Couleur du texte du numéro */
  /* text-align: center; Supprimez cette ligne */
  /* margin: 0 auto; Supprimez cette ligne */
}

</style>
