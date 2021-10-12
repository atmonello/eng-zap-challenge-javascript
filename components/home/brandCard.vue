<template>
  <v-card
    class="d-flex flex-column py-6"
    :class="[cardBackground]"
    min-width="200"
    :to="destination"
    nuxt
    shaped
  >
    <v-img :src="logoImage" max-height="36" contain />
  </v-card>
</template>

<script>
export default {
  name: "home-brand-card",
  props: {
    logoImage: {
      type: String,
      required: true,
    },
    cardBackground: {
      type: String,
      default: "white",
    },
    destination: {
      type: String,
      required: true,
    },
  },
};
</script>
