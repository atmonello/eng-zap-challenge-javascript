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

<style lang="scss" scoped>
.theme--dark.v-application {
  background-color: var(--v-background-base, #121212) !important;
  color: #fff;
}
.theme--light.v-application {
  background-color: var(--v-background-base, white) !important;
  color: #fff;
}
</style>

<script>
import ThemeSwitch from "@/components/shared/themeSwitch.vue";
export default {
  components: {
    ThemeSwitch,
  },
};
</script>
