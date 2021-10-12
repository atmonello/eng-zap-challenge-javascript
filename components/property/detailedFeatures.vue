<template>
  <div class="d-sm-flex">
    <p
      class="grey--text pr-sm-4 text--darken-1 font-weight-medium text-caption"
    >
      <v-icon class="mr-2 mr-sm-1" :size="iconSize">mdi-set-square</v-icon
      >{{ area }} m²
    </p>
    <p
      class="grey--text pr-sm-4 text--darken-1 font-weight-medium text-caption"
    >
      <v-icon class="mr-2 mr-sm-1" :size="iconSize">mdi-bed</v-icon
      >{{ bedrooms }} quartos
    </p>
    <p
      class="grey--text pr-sm-4 text--darken-1 font-weight-medium text-caption"
    >
      <v-icon class="mr-2 mr-sm-1" :size="iconSize">mdi-toilet</v-icon
      >{{ bathrooms }} banheiros
    </p>
    <p
      class="grey--text pr-sm-4 text--darken-1 font-weight-medium text-caption"
      v-if="parking > 0"
    >
      <v-icon class="mr-2 mr-sm-1" :size="iconSize">mdi-car</v-icon
      >{{ parking }}
      {{ parking === 1 ? "vaga" : "vagas" }}
    </p>
  </div>
</template>

<style lang="scss" scoped>
p {
  margin-bottom: 0;
}
</style>

<script>
export default {
  name: "property-detailed-features",
  props: {
    area: Number,
    bathrooms: Number,
    bedrooms: Number,
    parking: Number,
    iconSize: {
      type: Number,
      default: 24,
    },
  },
};
</script>
