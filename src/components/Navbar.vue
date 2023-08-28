<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid" bis_skin_checked="1">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="#">
        <span class="residor-logo">Résidor</span>
      </a>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo03" bis_skin_checked="1">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <button class="btn btn-outline-success custom-btn" type="submit">Aide</button>
          </li>
          <li class="nav-item">
            <button class="btn btn-outline-success custom-btn" type="submit">Choix de langue</button>
          </li>
          <li class="nav-item">
            <button class="btn btn-outline-success custom-btn" type="submit">Se connecter</button>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Link
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
.residor-logo {
  font-family: 'Sacramento', cursive;
  font-size: 2em;
  color: #FC9063;
}

.custom-btn {
  color: #FC9063;
  border-color: #FC9063;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s, color 0.3s;
}

.custom-btn:hover {
  background-color: #FC9063;
  color: white;
}

.nav-item {
  margin-right: 1rem;
  margin-left: 1rem;
}
</style>
