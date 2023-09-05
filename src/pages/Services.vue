<template>
  <NavBar/>
  <Hero/>
  <Footer/>
</template>

<script>

import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Services/Hero";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Services',
  components: {
    Hero,
    Footer,
    NavBar
  }
}
</script>

<style>

</style>
