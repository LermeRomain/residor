<template>
  <NavBar/>
  <Aides/>
  <Footer/>
</template>

<script>

import NavBar from "@/components/Navbar";
import Aides from "@/components/questions/Aides";
import Footer from "@/components/Footer";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Questions',
  components: {
    Footer,
    Aides,
    NavBar
  }
}
</script>

<style>

</style>
