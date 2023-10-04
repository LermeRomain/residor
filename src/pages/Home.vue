<template>
  <NavBar/>
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
import NavBar from "@/components/Navbar";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  components: {
    NavBar,
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

body{
  background-color: #f8f9fa!important;
}

p{
  font-size: 1rem;
}


</style>
