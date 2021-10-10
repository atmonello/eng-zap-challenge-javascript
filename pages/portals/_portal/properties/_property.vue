<template>
  <v-container>
    <property-detail></property-detail>
  </v-container>
</template>

<script>
import PropertyDetail from "@/components/property/detail.vue";
export default {
  layout: "properties",
  components: {
    PropertyDetail,
  },
};
</script>