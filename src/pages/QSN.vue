<template>
  <NavBar/>
  <QuiSommesNous/>
  <Footer/>
</template>

<script>

import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuiSommesNous from "@/components/QSN/Qui-sommes-nous";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'QSN',
  components: {
    QuiSommesNous,
    Footer,
    NavBar
  }
}
</script>

<style>

</style>