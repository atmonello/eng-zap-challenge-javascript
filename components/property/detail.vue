<template>
  <div>
    <pre>{{ selectedProperty }}</pre>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("properties", ["listPropertiesById"]),
    selectedProperty() {
      return this.listPropertiesById[this.$route.params.property];
    },
  },
};
</script>