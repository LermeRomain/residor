<template>
  <NavBar/>
  <Hero/>
  <Service/>
  <Resume/>
  <Footer/>
</template>

<script>

import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Services/Hero";
import Service from "@/components/Services/Service";
import Resume from "@/components/Services/Resume";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Services',
  components: {
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
