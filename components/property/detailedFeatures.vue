<template>
  <div>
    <h6 class="grey--text text--darken-1 font-weight-medium text-caption">
      <v-icon class="mr-2" :size="iconSize">mdi-set-square</v-icon>
      {{ area }} m²
    </h6>
    <h6 class="grey--text text--darken-1 font-weight-medium text-caption">
      <v-icon class="mr-2" :size="iconSize">mdi-bed</v-icon>
      {{ bedrooms }} quartos
    </h6>
    <h6 class="grey--text text--darken-1 font-weight-medium text-caption">
      <v-icon class="mr-2" :size="iconSize">mdi-toilet</v-icon>
      {{ bathrooms }} banheiros
    </h6>
    <h6
      class="grey--text text--darken-1 font-weight-medium text-caption"
      v-if="parking > 0"
    >
      <v-icon class="mr-2" :size="iconSize">mdi-car</v-icon>
      {{ parking }} {{ parking === 1 ? "vaga" : "vagas" }}
    </h6>
  </div>
</template>

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
