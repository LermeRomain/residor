<template>
  <div id="nav">
    <nav class=" navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand" href="#">
        <span class="residor-logo">résidor</span>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item">
            <button class="btn btn-outline-success custom-btn" type="submit">Aide</button>
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
  <Search/>
  <Sejour/>
  <Type/>
  <Zone/>
  <Satisfaction/>
  <Avis/>
  <Footer/>
</template>

<script>

import Search from "@/components/Search";
import Sejour from "@/components/Sejour";
import Type from "@/components/Type";
import Zone from "@/components/Zone";
import Satisfaction from "@/components/Satisfaction";
import Avis from "@/components/Avis";
import Footer from "@/components/Footer";

export default {
  name: 'App',
  components: {
    Footer,
    Avis,
    Satisfaction,
    Zone,
    Type,
    Sejour,
    Search
  }
}
</script>

<style>
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

#nav a.router-link-exact-active {
  color: whitesmoke;
  background: crimson;
  border-radius: .5rem;
}

.residor-logo {
  font-family: 'Sacramento', cursive;
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

body{
  background-color: #f8f9fa!important;
}


</style>
