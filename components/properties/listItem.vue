<template>
  <v-card shaped d>
    <v-carousel continuous hide-delimiter-background height="200">
      <v-carousel-item
        v-for="(image, index) in property.images"
        :key="`${property.id}-image-${index}`"
        :src="image"
        :to="property.id"
        nuxt
        append
      ></v-carousel-item>
    </v-carousel>
    <v-card :to="property.id" nuxt append>
      <v-card-title>
        <span class="font-weight-bold">{{
          formatPrice(this.property.pricingInfos.price)
        }}</span>
        <span v-if="isRentalProperty" class="font-weight-regular"> / mês</span>
        <span v-else class="font-weight-regular"> / venda</span>
      </v-card-title>
      <v-card-subtitle>
        <p>
          Imóvel em {{ property.address.neighborhood }},
          {{ property.address.city }}
        </p>
        <span class="mr-2">{{ property.usableAreas }} m²</span>
        <span class="mr-2"
          ><v-icon>mdi-bed</v-icon> {{ property.bedrooms }}</span
        >
        <span class="mr-2"
          ><v-icon>mdi-toilet</v-icon> {{ property.bathrooms }}</span
        >
        <span><v-icon>mdi-car</v-icon> {{ property.parkingSpaces }}</span>
      </v-card-subtitle>
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
    isSaleProperty() {
      return this.property.pricingInfos.businessType === "SALE";
    },
    isRentalProperty() {
      return this.property.pricingInfos.businessType === "RENTAL";
    },
  },
};
</script>