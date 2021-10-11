<template>
  <properties-loader v-if="isBlockedScreen" />
  <div v-else>
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="4" lg="3">
          <v-card class="pb-4" tile>
            <v-card-title :class="[selectedPortal.color, 'mb-4']">
              <v-img :src="selectedPortal.logo" contain height="36" />
            </v-card-title>
            <v-card-actions class="d-flex flex-column align-start px-4">
              <p class="text-h5">Filtrar imóveis</p>
              <v-checkbox
                hide-details
                v-model="filters.rental"
                label="Aluguel"
                class="px-4"
                :disabled="!filters.sale"
              ></v-checkbox>
              <v-checkbox
                hide-details
                v-model="filters.sale"
                label="Venda"
                class="px-4"
                :disabled="!filters.rental"
              ></v-checkbox>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" md="8" lg="9">
          <properties-list :properties="selectedProperties" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import PropertiesLoader from "@/components/properties/loader.vue";
import PropertiesList from "@/components/properties/list.vue";

export default {
  name: "properties-list-container",
  components: {
    PropertiesLoader,
    PropertiesList,
  },
  props: {
    selectedPortal: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapGetters("properties", [
      "listProperties",
      "listZapProperties",
      "listVivaProperties",
    ]),
    ...mapGetters("screen", ["isBlockedScreen"]),
    selectedPortalSlug() {
      return this.selectedPortal.slug || null;
    },
    selectedProperties() {
      if (!this.listProperties) return [];

      if (this.selectedPortalSlug === "zap") {
        return this.selectFilteredProperties(this.listZapProperties);
      } else if (this.selectedPortalSlug === "vivareal") {
        return this.selectFilteredProperties(this.listVivaProperties);
      }
      return this.selectFilteredProperties(this.listProperties);
    },
  },
  data: () => ({
    filters: {
      rental: true,
      sale: true,
    },
  }),
  methods: {
    ...mapActions("properties", ["getProperties"]),
    ...mapActions("screen", ["blockScreen", "unblockScreen"]),
    selectFilteredProperties(portalProperties) {
      if (!this.filters.sale) return portalProperties.rental.slice(0, 21);
      else if (!this.filters.rental) return portalProperties.sale.slice(0, 21);
      return (
        portalProperties.properties.slice(0, 21) ||
        portalProperties.slice(0, 21)
      );
    },
  },
  async fetch() {
    this.blockScreen();
    await this.getProperties();
    this.unblockScreen();
  },
};
</script>
