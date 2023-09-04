<template>
  <NavBar/>
  <Aides/>
</template>

<script>

import NavBar from "@/components/Navbar";
import Aides from "@/components/questions/Aides";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Questions',
  components: {
    Aides,
    NavBar
  }
}
</script>

<style>

</style>
