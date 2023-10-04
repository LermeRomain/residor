<template>
  <div>
    <NavBar/>

    <div class="container mt-5">
      <h1 class="text-center">Mentions Légales</h1>
      <hr>

      <div class="row">
        <div class="col-md-8 offset-md-2">
          <div class="card p-4">
            <h2>1. Informations légales</h2>
            <p>L’Application, Le Site et les Services sont exploités par la société Residor par actions simplifiée au
              capital de ??? € immatriculée sous le numéro 819 675 885 RCS PARIS, dont le siège se trouve 23 rue des
              Lombards, 75004 Paris.</p>
            <p>HOSTNFLY peut être contacté aux coordonnées suivantes :</p>
            <ul>
              <li>Par voie postale: Residor : Relations Clients 23 rue des Lombards, 75004 Paris</li>
              <li>Par voie électronique : hello@residor-paris.com</li>
              <li>Par voie téléphonique : 01 44 7_ 75 61</li>
            </ul>
            <p>Le Directeur de la publication du Site est : Monsieur Lermé Romain.</p>
          </div>

          <div class="card p-4 mt-4">
            <h2>2. Hébergement</h2>
            <p>Le Site est hébergé par: OVH SAS au capital de 10 069 020 € RCS Lille Métropole 424 761 419 00045
              <br>
              Siège social : 2 rue Kellermann - 59100 Roubaix - France.</p>
          </div>

          <div class="card p-4 mt-4">
            <h2>3. Déclaration CNIL</h2>
            <p>Le Site internet a fait l’objet d’une déclaration auprès de la CNIL sous le numéro ????</p>
          </div>

          <div class="card p-4 mt-4 mb-4">
            <h2>4. TVA et Carte Professionnelle</h2>
            <p>Numéro de TVA intracommunautaire: ????</p>
            <p>Numéro de carte professionnelle d'agent immobilier: ????</p>
          </div>

          <!-- Ajoutez d'autres sections de mentions légales si nécessaire -->

        </div>
      </div>
    </div>

    <Footer/>
  </div>
</template>

<script>
import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";

export default {
  name: "MentionsLegales",
  components: {NavBar, Footer}
};
</script>

<style scoped>
/* Ajoutez des styles CSS personnalisés pour votre page de mentions légales si nécessaire */
</style>
