<template>
  <div>
    <list-container :selected-portal="selectedPortal" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ListContainer from "@/components/properties/listContainer.vue";
export default {
  layout: "properties",
  components: {
    ListContainer,
  },
  computed: {
    ...mapGetters("portals", ["listPortals"]),
  },
  data() {
    return {
      selectedPortal: {},
    };
  },
  created() {
    this.selectedPortal = this.listPortals.filter(
      (p) => p.slug === this.$route.params.portal
    )[0];
  },
};
</script>
