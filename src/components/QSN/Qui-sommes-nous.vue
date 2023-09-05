<template>
  <section>
    <div class="container-fluid col-md-11">
      <div class="row align-items-center">
        <div class="col-md-6 text-left">
          <h1 class="title">Résidor est une entreprise dynamique et experte
            dans le secteur hôtelier.
          </h1>
          <button class="btn btn-outline custom-btn btn-lg" type="submit">Nous rejoindre</button>
        </div>
        <div class="col-md-6 text-left">
          <p class="subtitle">Heureux d’accompagner les Parisiens pour leur permettre de tirer profit de l’évènement
            exceptionnel que représentent les Jeux Olympiques, nous leur avons préparé une formule sur mesure pour
            répondre à la forte demande de location pendant cette période. </p>
        </div>
      </div>
    </div>

    <div class="container text-center">
      <div class="row">
        <div class="col-md-12">
          <img src="https://i.ibb.co/JrFVbML/photo-equipe-residor.jpg" class="img-fluid">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Qui-sommes-nous"
}
</script>

<style scoped>
.title {
  font-size: 2.5rem;
  font-weight: 600;
  color: white;
  font-family: poppin,cursive;
}

.subtitle {
  font-size: 1rem;
  font-weight: 300;
  font-family: poppin,cursive;
}

section {
  background-color: #FC9063;
  padding-top: 3rem;
  padding-bottom: 3rem;
}

img {
  border-radius: 25px;
}

.custom-btn {
  color: white;
  border-color: white;
  font-size: 1.5rem;
  font-weight: bold;
  transition: background-color 0.3s, color 0.3s;
  margin: 1rem;
}

.custom-btn:hover {
  background-color: white;
  color: #f6692c;
  border-color: white;
}
</style>
