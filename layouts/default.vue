<template>
  <v-app>
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
