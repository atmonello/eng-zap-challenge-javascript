<template>
  <v-container>
    <property-detail :selected-property="selectedProperty"></property-detail>
  </v-container>
</template>

<script>
/* eslint-disable */
import { mapGetters } from "vuex";
import PropertyDetail from "@/components/property/detail.vue";
export default {
  layout: "properties",
  components: {
    PropertyDetail,
  },
  data() {
    return {
      storedProperty: {},
    };
  },
  computed: {
    ...mapGetters("properties", ["listPropertiesById"]),
    selectedProperty() {
      return (
        this.listPropertiesById[this.$route.params.property] ||
        this.storedProperty ||
        {}
      );
    },
  },
  created() {
    if (!!this.selectedProperty.id && process.client) {
      localStorage.setItem(
        "SelectedPropertyInfo",
        JSON.stringify(this.selectedProperty)
      );
    } else {
      this.storedProperty = JSON.parse(
        localStorage.getItem("SelectedPropertyInfo")
      );
    }
  },
};
</script>