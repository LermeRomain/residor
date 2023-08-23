<template>
  <div id="guestready-booking-widget__root"
       :data-rental="propertyId"
       data-locale="fr"
       data-reservation-platform-id="132"
       data-base-url="https://openflats.rentalready.io"
  >
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    propertyId: {
      type: String,
      required: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
