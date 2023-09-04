<template>
  <div id="nav">
    <nav class=" navbar navbar-expand-lg navbar-light">
      <router-link to="/" class="navbar-brand">
        <span class="residor-logo">résidor</span>
        <p>Votre logement vaut de l’or</p>
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/Questions"><button class="btn btn-outline-success custom-btn" type="submit">Aide</button></router-link>
          </li>
          <li class="nav-item">
            <button class="btn btn-outline-success custom-btn" type="submit">Choix de langue</button>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li class="nav-item">
            <button class="btn btn-outline-success custom-btn" type="submit">Se connecter</button>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
#nav{
  background: white;
}

#nav {
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #FC9063;
}

.residor-logo {
  font-family: 'Sacramento',cursive;
  font-size: 3.5em;
  color: #FC9063;
}

.residor-logo:hover{
  color: #f6692c;
}

.custom-btn {
  color: #FC9063;
  border-color: #FC9063;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s, color 0.3s;
  margin: 1rem;
}

.custom-btn:hover {
  background-color: #FC9063;
  color: white;
  border-color: white;
}

#nav a  {
  color: #FC9063;
  font-weight: bold;
  border-color: #FC9063;
  margin: 1rem;
}

#nav a.router-link-exact-active {
  background: none;
}
</style>
