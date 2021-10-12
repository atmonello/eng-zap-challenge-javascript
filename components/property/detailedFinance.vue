<template>
  <div class="d-flex flex-column px-6">
    <div class="d-flex justify-space-between">
      <p class="text-subtitle-2 font-weight-bold">
        {{ priceInfo.businessType === "SALE" ? "Valor" : "Aluguel" }}
      </p>
      <p class="text-xl-h1 text-subtitle-1 font-weight-bold">
        {{ formatPrice(priceInfo.price) }}
      </p>
    </div>
    <div class="d-flex justify-space-between">
      <p class="text-subtitle-2">Condomínio</p>
      <p class="text-xl-h1 text-subtitle-1">
        {{ formatPrice(priceInfo.monthlyCondoFee) }}
      </p>
    </div>
    <div class="d-flex justify-space-between">
      <p class="text-subtitle-2">IPTU</p>
      <p class="text-xl-h1 text-subtitle-1">
        {{ formatPrice(priceInfo.yearlyIptu) }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
p {
  margin-bottom: 8px;
}
</style>

<script>
import { formatPrice } from "@/utils/properties";

export default {
  name: "property-detailed-finance",
  props: {
    priceInfo: {
      type: Object,
      required: true,
    },
  },
  methods: {
    formatPrice(val) {
      return formatPrice(val);
    },
  },
};
</script>
