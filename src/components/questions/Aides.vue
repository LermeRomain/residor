<template>
  <section>
    <div class="container text-center">
      <div class="row">
        <div class="col-md-6" v-for="(question, index) in question1" :key="index">
          <div class="card">
            <div class="card-body text-left"> <!-- Ajout de la classe text-left -->
              <h6 class="title">{{ question }}</h6>
              <p>{{ reponse1[index] }}</p>
            </div>
          </div>
          <div class="card">
            <div class="card-body text-left"> <!-- Ajout de la classe text-left -->
              <h6 class="title">{{ question2[index] }}</h6>
              <p>{{ reponse2[index] }}</p>
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
  name: "Aides",
  data() {
    return {
      question1: [
        "1. Comment estimer mes revenus ?",
        "3. Je ne suis pas propriétaire : ai-je le droit de louer mon appartement ?",
        "5. Pourquoi passer par vous et pas directement sur Airbnb ?",
        "7. Que devons-nous vérifier avant de louer notre logement ?",
      ],
      reponse1: [
        "A l’aide d’une base de données programmée pour les Jeux Olympiques, nous sommes aujourd’hui en mesure de faire une estimation des potentiels revenus générés pendant les Jeux Olympiques en prenant en compte différents facteurs : le nombre de pièces, la localisation, l’état de l’appartement et le nombre de couchages. Une fois tous ces paramètres renseignés, vous pourrez connaître combien votre logement peut vous rapporter.",
        "Vous pouvez tout à fait louer votre appartement alors que vous êtes locataire. Toutefois, vous devez obtenir une autorisation de votre bailleur pour pouvoir faire cette sous-location. S’il émet certaines réserves, vous pouvez tout à fait le rediriger vers notre plateforme pour qu’il puisse comprendre le fonctionnement de Résidor et pouvoir le rassurer sur l’entretien de son appartement.",
        "Vous nous confiez vos clés et nous nous occupons de tout : des messages clients, jusqu’à la publication de l’annonce, gestion de vos clés, du ménage et du linge ! Autrement dit, Résidor c’est LA solution sans prise de tête. Notre équipe experte en immobilier et en hôtellerie connaît également parfaitement le marché de la location saisonnière et sera parfaitement vous orienter pour optimiser vos revenus de location en mettant le bon prix !",
        "Les propriétaires ont tout à fait le droit de louer leur résidence principale à des fins touristiques en respectant certains critères : les réservations ne doivent pas excéder 120 jours, déclaration de son logement auprès de la mairie (Résidor s’en occupe pour vous), et bien sûr être propriétaire. Si vous êtes locataire, vous pouvez demander l’autorisation à votre bailleur pour sous-louer votre logement. De plus, vous devez vérifier dans votre règlement de copropriété si l’usage de l’immeuble n’est pas une « clause bourgeoise », autrement dit, un immeuble réservé à l’habitation.",
      ],
      question2: [
        "2. Comment gérez-vous les clés de mon logement ?",
        "4. Comment être sûr que mon appartement sera loué ?",
        "6. Combien prenez-vous de commission ?",
      ],
      reponse2: [
        "Au début de la location, vous nous confiez un jeu de clés (idéalement entre 2 et 3 jeux). Nous prenons soin de vos clés pendant toute la durée de la location dans l’appartement. Entre chaque réservation, nous réalisons des check-in en physique, autrement dit : nous assurons nous-mêmes de la bonne distribution des clés au locataire au début de sa réservation, ainsi que de sa bonne restitution (pas de boîte à clé).",
        "Le marché immobilier sur Paris est très tendu pendant la période des Jeux Olympiques. Il manque plus de 5 000 000 de logements pour satisfaire la demande de tous les voyageurs. Dans ce contexte, et après observations des Jeux Olympiques de Rio et de Londres, nous sommes intimement persuadés que votre logement arrivera à être loué. Par la même occasion, vous avez une plateforme (Rental Ready) sur votre téléphone qui vous permet de suivre les réservations de votre logement !",
        "Dès que votre logement est loué, nous encaissons 20% de commissions sur chaque réservation effectuée (nette des frais de plateformes et des frais de ménage).",
      ],
    };
  },
};
</script>

<style scoped>
.card{
  margin-bottom: 2rem;
  margin-top: 2rem;
}
.title {
  font-size: 18px;
  font-weight: 600;
  font-family: poppin, cursive;
  color: #FC9063;
}
</style>
