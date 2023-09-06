<template>
  <NavBar/>
  <Hero/>
  <Service/>
  <Resume/>
  <Convaincus/>
  <Footer/>
</template>

<script>

import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Services/Hero";
import Service from "@/components/Services/Service";
import Resume from "@/components/Services/Resume";
import Convaincus from "@/components/Services/Convaincus";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Services',
  components: {
    Convaincus,
    Resume,
    Service,
    Hero,
    Footer,
    NavBar
  }
}
</script>

<style>

</style>
