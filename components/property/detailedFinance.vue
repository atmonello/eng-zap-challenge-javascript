<template>
  <div class="d-flex flex-column mt-2 px-6 px-sm-0">
    <div class="d-flex justify-space-between">
      <p class="text-subtitle-2 font-weight-bold d-block d-sm-none">
        {{ priceInfo.businessType === "SALE" ? "Valor" : "Aluguel" }}
      </p>
      <p class="text-subtitle-1 text-sm-h2 text-xl-h1 font-weight-bold">
        {{ formatPrice(priceInfo.price) }}
        <span
          class="d-none d-sm-inline-block text-h4"
          v-if="priceInfo.businessType === 'RENTAL'"
        >
          / mês</span
        >
      </p>
    </div>
    <div class="d-flex flex-column flex-sm-row justify-sm-start">
      <div
        class="
          d-flex
          justify-space-between justify-sm-start
          align-sm-center
          mr-sm-6
        "
      >
        <p class="text-subtitle-2 pr-sm-2">Condomínio</p>
        <p class="d-sm-inline-block text-xl-h1 text-subtitle-1">
          <span v-if="Number(priceInfo.monthlyCondoFee)">
            {{ formatPrice(priceInfo.monthlyCondoFee) }}
          </span>
          <span v-else>não informado</span>
        </p>
      </div>
      <div
        class="d-flex justify-space-between justify-sm-start align-sm-center"
      >
        <p class="text-subtitle-2 pr-sm-2">IPTU</p>
        <p class="d-sm-inline-block text-xl-h1 text-subtitle-1">
          <span v-if="Number(priceInfo.yearlyIptu)">
            {{ formatPrice(priceInfo.yearlyIptu) }}
          </span>
          <span v-else>não informado</span>
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
p {
  margin-bottom: 0;
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
      return formatPrice(val, 0);
    },
  },
};
</script>
