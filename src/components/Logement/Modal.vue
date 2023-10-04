<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6 col-lg-4" v-for="(icon, index) in icons" :key="index">
          <div class="text-left mb-3">
            <span class="badge">
              <i :class="icon" class="mr-2 custom-icon"></i>
              <span class="text-black">{{ equipmentDescriptions[index] }}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Modal",
  data() {
    return {
      icons: [
        "fas fa-wifi",
        "fas fa-bread-slice",
        "fas fa-coffee",
        "fas fa-bed",
        "fas fa-elevator",
        "fas fa-parking",
        "fas fa-bicycle",
        "fas fa-kitchen-set",
      ],
      equipmentDescriptions: [
        "Accès Wi-Fi",
        "Petit-déjeuner inclus",
        "Machine à café",
        "Chambre avec lit double",
        "Ascenseur",
        "Parking disponible",
        "Espaces pour vélos",
        "Cuisine équipée",
      ],
    };
  },
};
</script>

<style scoped>
.custom-icon {
  font-size: 2rem; /* Ajustez la taille comme vous le souhaitez */
  color: rgb(75, 108, 204);
}

/* Ajoutez d'autres styles CSS personnalisés si nécessaire */

@media (max-width: 767px) {
  .text-left {
    text-align: center; /* Centrer le texte pour les écrans plus petits */
  }
}
</style>


