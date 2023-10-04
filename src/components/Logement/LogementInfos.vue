<template>
  <div>
    <div class="card">
      <div class="row">

        <!-- Colonne pour le texte dans "card-body" aligné à gauche -->
        <div class="col-md-6 card-body text-left ml-2 mr-2">
          <h1 class="title">{{ logement.titre }}</h1>
          <p class="description text-black">
          {{ logement.capacity }} voyageur{{ logement.capacity > 1 ? 's' : '' }} -
          {{ logement.chambres }} chambre{{ logement.chambres > 1 ? 's' : '' }} -
          1 lit -
          {{ logement.salledebains }} salle de bain{{ logement.salledebains > 1 ? 's' : '' }}
        </p>

          <p class="description text-black">{{ logement.descriptionlg }}</p>
        </div>


        <!-- Colonne pour le texte "rating" aligné à droite -->
        <div class="col-md-5 text-right mr-2">
          <h5>
            <span class="badge bg-perso m-md-3 p-3 text-white">
              <i class="fa fa-star text-white"></i>
              {{ logement.rating }}
            </span>
          </h5>
        </div>


      </div>

      <!-- Informations organisées en catégories -->
      <div class="card-body bg-perso m-3 text-white">
        <!-- Catégorie : Self check-in -->
        <div class="category">
          <i class="fa fa-check-circle"></i> Self check-in available
        </div>

        <!-- Catégorie : Capacité d'accueil -->
        <div class="category">
          <i class="fa fa-users"></i> Max. 20 voyageurs
        </div>

        <!-- Catégorie : Serviettes et linge de lit -->
        <div class="category">
          <i class="fa-solid fa-cart-flatbed"></i> Serviettes de toilette et linge de lit inclus
        </div>

        <!-- Catégorie : Chambres -->
        <div class="category">
          <ul class="no-bullets">
            <i class="fa fa-bed"></i>
            <li>Chambre 1 • 2 lits simples</li>
            <li>Chambre 2 • 2 lits simples</li>
            <li>Chambre 3 • Lit king 180×200cm</li>
          </ul>
        </div>

        <!-- Catégorie : Salles de bains -->
        <div class="category">
          <ul class="no-bullets">
            <i class="fa fa-bath"></i>
            <li>Nombres de salles de bains : 4</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Équipements</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <Modal/>
      </div>
    </div>

    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Autres informations</h5>
        <Autres/>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "@/components/Logement/Modal";
import Autres from "@/components/Logement/Autres";

export default {
  name: "LogementInfos",
  components: { Autres, Modal},
  props: {
    logement: Object // Propriété pour transmettre les détails du logement au composant
  },
}
</script>

<style scoped>
.title {
  font-size: 2rem;
  font-weight: 700;
}

.card {
  margin-bottom: 2rem;
  border-radius: 15px;
}

.card-body {
  border-radius: 15px;
}

.category {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

.category i {
  margin-right: 10px;
  /* Couleur de l'icône */
  font-size: 20px; /* Taille de l'icône */
}

.category ul {
  margin-left: 0; /* Définir la marge gauche à zéro */
  margin-top: 1rem;
}

/* Style pour supprimer les puces des listes */
.no-bullets {
  list-style-type: none;
  padding: 0px 0px 0px 0px;
}

.bg-perso {
  background-color: rgb(75, 108, 204);
}
</style>
