<template>
  <v-app>
    <v-app-bar fixed flat class="transparent d-flex justify-end">
      <theme-switch></theme-switch>
    </v-app-bar>
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
import ThemeSwitch from "@/components/shared/themeSwitch.vue";
export default {
  components: {
    ThemeSwitch,
  },
};
</script>
