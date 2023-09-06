<template>
  <section>
    <div class="container">
      <div class="row">
        <div v-for="(column, index) in columns" :key="index" class="col-md-6">
          <div :class="`card ${column.bgColor} text-center`">
            <div class="card-body">
              <div class="icon-bar">
                <i v-for="(icon, iconIndex) in column.icons" :key="iconIndex" :class="icon"></i>
              </div>
              <h1>{{ column.title }}</h1>
            </div>
          </div>
          <h3 class="mt-5">{{ column.subtitle }}</h3>
          <h4 class="mt-4 mb-5">{{ column.description }}</h4>
          <p v-for="(item, itemIndex) in column.items" :key="itemIndex"><i
              class="fas fa-check text-success mr-3"></i>{{ item }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Service",
  data() {
    return {
      columns: [
        {
          bgColor: "bg-yellow",
          icons: ["fas fa-home fa-3x text-primary", "fas fa-bed fa-3x text-success", "fas fa-car fa-3x text-danger"],
          title: "Votre annonce Airbnb",
          subtitle: "On optimise votre annonce avec de belles photos et des textes précis.",
          description: "On la diffuse sur les plateformes partenaires : Airbnb, Booking, Abritel On fait varier le prix des nuitées tous les jours pour saisir toutes les opportunités",
          items: ["Des demandes de résa plus importantes", "Une visibilité augmentée", "Des revenus maximisés"]
        },
        // Ajoutez ici les données pour la deuxième colonne
        {
          bgColor: "bg-pink",
          icons: ["fas fa-key fa-3x text-info", "fas fa-lock fa-3x text-warning", "fas fa-key fa-3x text-danger"],
          title: "Vos clés",
          subtitle: "Sécurité maximale pour votre propriété.",
          description: "Nous gérons les clés de votre propriété et assurons une sécurité totale.",
          items: ["Accès sécurisé", "Gestion des clés", "Surveillance 24/7"]
        },
        {
          bgColor: "bg-green",
          icons: ["fas fa-key fa-3x text-info", "fas fa-lock fa-3x text-warning", "fas fa-key fa-3x text-danger"],
          title: "Le ménage et le linge",
          subtitle: "Nos pros du ménage interviennent avant et après chaque voyageur.",
          description: "Votre linge reste dans leur placard ! On fourni les draps, serviette, torchons … Savons, shampoing, sacs poubelle, papier toilette … on gère vraiment tout !",
          items: ["Votre logement est ultrapropre", "Pas de lessive quand vous revenez !"]
        },
        {
          bgColor: "bg-orange",
          icons: ["fas fa-key fa-3x text-info", "fas fa-lock fa-3x text-warning", "fas fa-key fa-3x text-danger"],
          title: "Les voyageurs",
          subtitle: "Au moindre problème voyageur, notre assistance intervient 24/7. On gère le check-in et le check-out en mode hôtel 5* !",
          description: "",
          items: ["Leur commentaires 5* seront visibles", "Ils se souviendront de leur séjour chez vous et ils reviendront ..."]
        },
        {
          bgColor: "bg-blue",
          icons: ["fas fa-key fa-3x text-info", "fas fa-lock fa-3x text-warning", "fas fa-key fa-3x text-danger"],
          title: "La caution et les assurances",
          subtitle: "En cas de problème, on mobilise caution voyageurs, assurance hôte Airbnb et notre assurance.",
          description: "On est sur le pont 24/7 pour résoudre tous les éventuels problèmes.",
          items: ["Aucune formalité administrative à gérer de votre côté", "Vous partez en mode sérénité"]
        },
        {
          bgColor: "bg-red",
          icons: ["fas fa-key fa-3x text-info", "fas fa-lock fa-3x text-warning", "fas fa-key fa-3x text-danger"],
          title: "La maintenance et l’assistance 24/7",
          subtitle: "Un problème rencontré par un voyageur, nos pros de l’assistance interviennent 24/.",
          description: "Nos techniciens veillent à la bonne tenue de votre logement.",
          items: ["Vous ne vous préocuppez de rien !", "Des voyageurs comblés"]
        },
        // Ajoutez ici les données pour d'autres colonnes si nécessaire
      ]
    };
  }
};
</script>

<style scoped>

section{
  margin-bottom: 5rem;
}

.card{
  border-radius: 15px;
  border: none;
}
h1 {
  font-size: 2.5rem;
  margin-top: 2rem;
  font-weight: 700;
  font-family: poppin, cursive;
}

h3 {
  font-size: 18px;
  font-weight: 700;
  font-family: poppin, cursive;
}

h4 {
  font-size: 18px;
  font-weight: 400;
  font-family: poppin, cursive;
}

.icon-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 0 auto;
}

.bg-red{
  background-color: rgb(255 192 160);
}

.bg-blue{
  background-color: rgb(189 209 255);
}

.bg-green{
  background-color: rgb(194 249 223);
}

.bg-yellow{
  background-color: rgb(255 246 198);
}

.bg-pink{
  background-color: rgb(255 208 217);
}

.bg-orange{
  background-color: rgb(255 219 158);
}
/* Ajoutez ici vos styles CSS pour les classes de couleur (bg-yellow, bg-pink, etc.) si nécessaire */
</style>
