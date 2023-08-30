<template>
  <section class="section text-white py-5">
    <div class="container-fluid col-md-11">
      <div class="card">
        <div class="card-body d-md-flex">
          <div class="col-md-3">
            <a class="navbar-brand" href="#">
              <span class="residor-logo">Résidor</span>
            </a>
            <p>Nous offrons aux voyageurs un séjour confortable et aidons les hôtes à gérer leurs propriétés dans le respect des standards professionnels.</p>
            <button type="button" class="btn btn-outline-light">Nous contacter</button>
          </div>
          <div class="col-md-9">
            <div class="row justify-content-end">
              <div class="col-md-3">
                <h4>Entreprise</h4>
                <ul class="list-unstyled">
                  <li>À propos</li>
                  <li>Devenir hôte</li>
                  <li>Carrières</li>
                  <li>Contact</li>
                  <li>Aide et FAQ</li>
                </ul>
              </div>
              <div class="col-md-3">
                <h4>Arrondissements</h4>
                <ul class="list-unstyled">
                  <li>Arrondissement 1</li>
                  <li>Arrondissement 2</li>
                  <li>Arrondissement 3</li>
                  <li>Arrondissement 4</li>
                  <li>Arrondissement 5</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="card-footer text-muted d-flex justify-content-between">
          <div class="text-white">© 2023 GuestReady Group. Tous droits réservés.</div>
          <div>
            <span class="fab fa-instagram fa-3x text-white mx-2"></span>
            <span class="fab fa-facebook fa-3x text-white mx-2"></span>
            <span class="fab fa-twitter fa-3x text-white mx-2"></span>
            <span class="fab fa-linkedin fa-3x text-white mx-2"></span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Footer"
}
</script>

<style scoped>

.residor-logo {
  font-family: 'Sacramento', cursive;
  font-size: 3em;
  color: white;
}

h3 {
  font-size: 24px;
  font-weight: 700;
}

h4 {
  font-size: 18px;
  font-weight: 300;
  opacity: 75%;
}

.card {
  border: none;
  background-color: #f6692c;
  padding-top: 3rem;
  padding-bottom: 3rem;
}

.section {
  background-color: #FC9063;
  margin-top: 10rem;
}
</style>
