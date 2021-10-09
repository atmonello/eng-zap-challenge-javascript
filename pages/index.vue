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
        <h3 class="text-h3">
          Clique abaixo para filtrar os imóveis por portal
        </h3>
      </v-col>
    </v-row>
    <v-row class="py-6">
      <v-col cols="12" md="6" class="d-flex justify-center">
        <brand-card
          logo-image="/logo-vivareal.png"
          card-background="vivaRealBlue"
          destination="/vivareal"
        ></brand-card>
      </v-col>
      <v-col cols="12" md="6" class="d-flex justify-center">
        <brand-card logo-image="/logo-zap.png" destination="/zap"></brand-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BrandCard from "@/components/home/brandCard.vue";
export default {
  components: {
    BrandCard,
  },
};
</script>

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
