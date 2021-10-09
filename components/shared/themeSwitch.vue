<template>
  <v-input dense hide-details class="d-flex align-center">
    <template v-slot:prepend class="ma-0">
      <v-icon class="theme__switch__icon--prepend"
        >mdi-white-balance-sunny</v-icon
      >
    </template>
    <v-switch
      class="pa-0 ma-0"
      inset
      v-model="$nuxt.$vuetify.theme.dark"
      prepend-icon=""
      hide-details
      slot="default"
    ></v-switch>
    <template v-slot:append>
      <v-icon class="theme__switch__icon--append">mdi-weather-night</v-icon>
    </template>
  </v-input>
</template>

<style lang="scss">
.theme__switch__icon {
  &--prepend {
    margin-right: 8px;
  }
  &--append {
    margin-left: -8px;
  }
}
</style>
