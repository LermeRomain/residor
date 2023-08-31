<template>
  <section class="section text-white py-5">
    <div class="container-fluid col-md-11">
      <div class="card">
        <div class="card-body d-md-flex">
          <div class="col-md-3">
            <a class="navbar-brand" href="#">
              <span class="residor-logo">Résidor</span>
            </a>
            <p>Nous offrons aux voyageurs un séjour confortable et aidons les hôtes à gérer leurs propriétés dans le
              respect des standards professionnels.</p>
            <a href="mailto:hello@residor-paris.com">
              <button class="btn btn-outline-success custom-btn" type="submit">Nous contacter</button>
            </a>
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
          <div class="text-white d-none d-md-block">© 2023 Altius Group. Tous droits réservés.</div>
          <div>
            <a href="https://www.instagram.com/residorparis/"><span
                class="fab fa-instagram fa-3x text-white mx-3"></span></a>
            <a href="https://www.facebook.com/profile.php?id=100095601399409"><span class="fab fa-facebook fa-3x text-white mx-3"></span></a>
            <a href="https://www.tiktok.com/@residor2024?lang=fr"><span class="fab fa-tiktok fa-3x text-white mx-3"></span></a>
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

.residor-logo:hover {
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
  border-radius: 25px;
}

.card-footer {
  border: none;
  background-color: #f6692c;
  border-radius: 25px;
}

.section {
  background-color: #FC9063;
}

.custom-btn {
  color: white;
  border-color: white;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s, color 0.3s;
}

.custom-btn:hover {
  background-color: white;
  color: #FC9063;
}

li{
  font-family: poppin,cursive;
}
</style>
