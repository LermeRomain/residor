<template>
  <div class="sejour">
    <div class="container-fluid col-md-10">
      <h1 class="title text-white">Trouvez votre séjour idéal</h1>
      <p class="subtitle text-white">Découvrez une sélection de nos maisons les plus réservées</p>
    </div>

    <div class="container-fluid col-md-11">
      <div class="row justify-content-center">
        <div v-for="i in 4" :key="i" class="col-md-3">
          <div class="card custom-card-width mb-4 ">
            <img :src="images[i]" class="card-img-top">
            <div class="card-body">
              <div class="d-flex align-items-start">
                <h5>
                  <span class="badge bg-info">
                    <i class="fa fa-star"></i>
                    4.5
                  </span>
                </h5>
              </div>
              <div class="d-flex align-items-start">
                <p class="font-weight-bold">{{ titres[i] }}</p>
              </div>
              <div class="d-flex align-items-start">
                <p class="small">{{ truncateDescription(descriptions[i], 100) }}</p>
              </div>
              <div class="d-flex justify-content-between align-items-center mt-3">
                <div class="d-flex align-items-center">
                  <i class="fas fa-bed"></i><span class="ms-1">2</span>
                </div>
                <div class="d-flex align-items-center">
                  <i class="fas fa-bath"></i><span class="ms-1">1</span>
                </div>
                <div class="d-flex align-items-center">
                  <i class="fas fa-toilet"></i><span class="ms-1">1</span>
                </div>
                <div class="d-flex align-items-center">
                  <i class="fas fa-car"></i><span class="ms-1">1</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Sejourtest",
  methods: {
    truncateDescription(description, maxLength) {
      if (description.length <= maxLength) {
        return description;
      } else {
        // Tronquer la description et ajouter "..."
        return description.slice(0, maxLength) + " ...";
      }
    },
  },
  data() {
    return {
      images: [
        "https://imagedelivery.net/EiO3lIGpRo242B2Q4qZMkg/3c4f133e-f948-48a4-b904-61589a456800/square1000",
        "https://imagedelivery.net/EiO3lIGpRo242B2Q4qZMkg/0ad3e80b-76b8-4631-a8fb-17a1354f7400/square1000",
        "https://imagedelivery.net/EiO3lIGpRo242B2Q4qZMkg/b44ab842-bebe-4815-44ff-ec70c8d8e900/square1000",
        "https://imagedelivery.net/EiO3lIGpRo242B2Q4qZMkg/6810d13a-ead2-445c-6e02-5d2afbd95d00/square1000",
        "https://imagedelivery.net/EiO3lIGpRo242B2Q4qZMkg/71f0ab14-53c7-4170-3970-73afa9693d00/square1000",
      ],
      titres: [
        "Maison Romain",
        "Maison Romain",
        "Maison Fanny",
        "Maison Pierre",
        "Maison Nicolas",
      ],
      descriptions: [
        "Cette maison de ville charmante est située dans le centre-ville, à quelques pas des magasins, des restaurants et des...",
        "Cette maison de ville charmante est située dans le centre-ville, à quelques pas des magasins, des restaurants et des...",
        "Cette maison écologique est construite avec des matériaux durables et des technologies écoénergétiques. Elle...",
        "Cette maison de plage moderne est située sur la côte, à quelques pas de la plage. Elle dispose de quatre chambres à... ",
        "Cette maison de luxe est située dans un quartier huppé, à proximité des meilleures écoles et des centres commerciaux... ",
      ],
    };
  },
}
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

.sejour {
  background-color: #FC9063;
  margin-bottom: 2rem;
}

.card {
  border: none;
  border-radius: 25px;
}

.custom-card-width {
  width: 100%;
}

.card-img-top {
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
}
</style>