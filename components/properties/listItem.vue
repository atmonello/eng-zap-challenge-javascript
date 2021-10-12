<template>
  <v-card shaped :min-height="$vuetify.breakpoint.mdAndDown ? 300 : 350">
    <v-carousel continuous hide-delimiters height="200">
      <v-carousel-item
        v-for="(image, index) in property.images"
        :key="`${property.id}-image-${index}`"
        :src="image"
        :to="property.id"
        nuxt
        append
      ></v-carousel-item>
    </v-carousel>
    <v-card :to="property.id" nuxt append height="100%" elevation="0">
      <v-card-text>
        <span class="text-body-1 font-weight-regular">
          Imóvel em {{ property.address.neighborhood }},
          {{ property.address.city }}
        </span>
        <p class="mt-1 mb-3">
          <span class="text-h5 font-weight-black">
            {{ formatPrice(this.property.pricingInfos.price) }}
          </span>
          <span v-if="isRentalProperty" class="font-weight-regular">
            / mês</span
          >
          <span v-else class="font-weight-regular"> / venda</span>
        </p>
      </v-card-text>
    </v-card>
  </v-card>
</template>

<script>
import { formatPrice } from "@/utils/properties";
export default {
  props: {
    property: {
      type: Object,
      required: true,
    },
  },
  methods: {
    formatPrice(val) {
      return formatPrice(val, "R$");
    },
  },
  computed: {
    isRentalProperty() {
      return this.property.pricingInfos.businessType === "RENTAL";
    },
  },
};
</script>