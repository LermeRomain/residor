<template>
  <div>
    <div
        id="guestready-booking-widget__root"
        :data-rental="propertyId"
        data-locale="fr"
        data-reservation-platform-id="132"
        data-base-url="https://openflats.rentalready.io"
    ></div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Api',
  props: {
    logement: Object
  },

  setup() {
    const propertyId = 72410;
    const isScriptLoaded = ref(false);

    onMounted(async () => {
      try {
        await loadBookingScript();
        isScriptLoaded.value = true;
      } catch (error) {
        console.error('Une erreur est survenue :', error);
      }
    });

    const loadBookingScript = () => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://book.guestready.com/booking_widget/main.js';
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    };

    return {
      propertyId,
      isScriptLoaded,
    };
  },
};
</script>
