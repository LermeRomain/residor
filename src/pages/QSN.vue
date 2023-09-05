<template>
  <NavBar/>
  <QuiSommesNous/>
  <Valeurs2/>
  <Footer/>
</template>

<script>

import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuiSommesNous from "@/components/QSN/Qui-sommes-nous";
import Valeurs2 from "@/components/QSN/Valeurs2";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'QSN',
  components: {
    Valeurs2,
    QuiSommesNous,
    Footer,
    NavBar
  }
}
</script>

<style>

</style>