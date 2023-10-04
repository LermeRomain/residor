<template>
  <NavBar/>
  <Listing/>
  <Footer/>
</template>

<script>
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Listing from "@/components/Logements/Listing";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Logements",
  components: {Listing, Footer, NavBar},
  props: {
    logement: Object, // Receive the logement object as a prop
  },
}
</script>

<style scoped>

</style>