<template>
  <NavBar/>
  <Partenaires class="d-none d-md-block"/>
  <Search/>
  <Valeurs/>
  <!--  <Sejour/>-->
  <Sejourtest/>
  <Type/>
  <Zone/>
  <Satisfaction/>
  <Avis/>
  <Footer/>
</template>

<script>

import Search from "@/components/Search";
/*import Sejour from "@/components/Sejour";*/
import Type from "@/components/Type";
import Zone from "@/components/Zone";
import Satisfaction from "@/components/Satisfaction";
import Avis from "@/components/Avis";
import Footer from "@/components/Footer";
import Sejourtest from "@/components/Sejourtest";
import Partenaires from "@/components/Partenaires";
import Valeurs from "@/components/Valeurs";
import NavBar from "@/components/Navbar";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  components: {
    NavBar,
    Valeurs,
    Partenaires,
    Sejourtest,
    Footer,
    Avis,
    Satisfaction,
    Zone,
    Type,
    /*    Sejour,*/
    Search
  }
}
</script>

<style>

body{
  background-color: #f8f9fa!important;
}

p{
  font-family: poppin,cursive;
  font-size: 1rem;
}


</style>
