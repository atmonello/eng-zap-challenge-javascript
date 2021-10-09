<template>
  <v-container class="challenge__home my-16">
    <v-row class="pt-10">
      <v-col cols="12" class="d-flex justify-center">
        <img
          class="challenge__home__logo--group"
          src="/logo-grupo.png"
          alt="Logo do GrupoZap"
        />
      </v-col>
    </v-row>
    <v-row class="py-6 text-center">
      <v-col cols="12">
        <h3 class="text-h3">Teste de engenharia do GrupoZap</h3>
      </v-col>
      <v-col cols="12">
        <h5 class="text-h5">
          Clique abaixo para filtrar os imóveis por portal
        </h5>
      </v-col>
    </v-row>
    <v-row class="py-6 text-center">
      <v-col cols="12" md="6">
        <v-btn
          class="
            rounded-lg
            pa-6
            challenge__home__btn challenge__home__btn--viva
            vivaRealBlue
          "
        >
          <v-img src="/logo-vivareal.png" max-height="36" contain />
        </v-btn>
      </v-col>
      <v-col cols="12" md="6">
        <v-btn
          class="rounded-lg pa-6 challenge__home__btn challenge__home__btn--zap"
        >
          <v-img src="/logo-zap.png" max-height="36" contain />
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
.challenge {
  &__home {
    &__logo {
      &--group {
        height: 48px;
      }
    }
  }
}
</style>
