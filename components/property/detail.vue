<template>
  <v-container fluid>
    <v-card shaped>
      <v-carousel>
        <v-carousel-item
          v-for="(image, index) in selectedProperty.images"
          :key="`${selectedProperty.id}-image-${index}`"
          :src="image"
        ></v-carousel-item>
      </v-carousel>
      <v-card-title class="my-3">
        <h1>
          Imóvel para <span v-if="isRental">alugar</span
          ><span v-else>comprar</span> em
          {{ selectedProperty.address.neighborhood }},
          {{ selectedProperty.address.city }}
        </h1>
        <v-divider class="mx-2"></v-divider>
        <h1>{{ formatPrice(selectedProperty.pricingInfos.price) }}</h1>
      </v-card-title>
      <v-card-subtitle class="pt-2 pb-8 d-flex justify-space-between">
        <div class="d-flex">
          <h4 class="font-weight-black text-h5 mr-6">
            <v-icon size="48">mdi-set-square</v-icon>
            {{ selectedProperty.usableAreas }} m²
          </h4>
          <h4 class="font-weight-black text-h5 mr-6">
            <v-icon size="48">mdi-bed</v-icon>
            {{ selectedProperty.bedrooms }} quartos
          </h4>
          <h4 class="font-weight-black text-h5 mr-6">
            <v-icon size="48">mdi-toilet</v-icon>
            {{ selectedProperty.bathrooms }} banheiros
          </h4>
          <h4 class="font-weight-black text-h5">
            <v-icon size="48">mdi-car</v-icon>
            {{ selectedProperty.parkingSpaces }} vagas
          </h4>
        </div>
        <div>
          <span class="mx-3 font-weight-bold text-h4">
            condomínio
            {{ formatPrice(selectedProperty.pricingInfos.monthlyCondoFee) }}
          </span>
          <span class="font-weight-bold text-h4"
            >IPTU
            {{ formatPrice(selectedProperty.pricingInfos.yearlyIptu) }}</span
          >
        </div>
      </v-card-subtitle>
      <v-card-actions class="pa-6 d-flex justify-center">
        <v-btn icon class="mx-4 background--text">
          <v-icon size="60">mdi-whatsapp</v-icon>
        </v-btn>
        <v-btn rounded flat class="background white--text px-4" x-large>
          Mensagem
        </v-btn>
      </v-card-actions>
    </v-card>
    <pre>{{ selectedProperty }}</pre>
  </v-container>
</template>

<script>
import { formatPrice } from "@/utils/properties";

export default {
  props: {
    selectedProperty: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isRental() {
      return this.selectedProperty.pricingInfos.businessType === "RENTAL";
    },
  },
  methods: {
    formatPrice(val) {
      return formatPrice(val);
    },
  },
};
</script>