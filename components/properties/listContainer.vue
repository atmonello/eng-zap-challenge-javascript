<template>
  <properties-loader v-if="isBlockedScreen" />
  <div v-else>
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="3" lg="2">
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
                @change="updateFilters"
              ></v-checkbox>
              <v-checkbox
                hide-details
                v-model="filters.sale"
                label="Venda"
                class="px-4"
                :disabled="!filters.rental"
                @change="updateFilters"
              ></v-checkbox>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" md="9" lg="10">
          <properties-list :properties="currentItems" />
          <v-pagination
            total-visible="5"
            circle
            :length="totalPages"
            v-model="pagination.currentPage"
            @input="updatePagination"
          />
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
    properties() {
      if (!this.listProperties) return [];

      if (this.selectedPortalSlug === "zap") {
        return this.selectFilteredProperties(this.listZapProperties);
      } else if (this.selectedPortalSlug === "vivareal") {
        return this.selectFilteredProperties(this.listVivaProperties);
      }
      return this.selectFilteredProperties(this.listProperties);
    },
    totalPages() {
      return Math.ceil(this.properties.length / this.pagination.pageSize);
    },
  },
  data: () => ({
    filters: {
      rental: true,
      sale: true,
    },
    pagination: {
      pageSize: 20,
      currentPage: 1,
    },
    currentItems: [],
  }),
  methods: {
    ...mapActions("properties", ["getProperties"]),
    ...mapActions("screen", ["blockScreen", "unblockScreen"]),
    selectFilteredProperties(portalProperties) {
      if (!this.filters.sale) return portalProperties.rental;
      else if (!this.filters.rental) return portalProperties.sale;
      return portalProperties.properties || portalProperties;
    },
    updateFilters() {
      // eslint-disable-next-line
      if (process.client) {
        localStorage.setItem(
          `${this.selectedPortalSlug}_filters`,
          JSON.stringify(this.filters)
        );
      }
    },
    updatePagination() {
      // eslint-disable-next-line
      if (process.client) {
        localStorage.setItem(
          `${this.selectedPortalSlug}_pagination`,
          JSON.stringify(this.pagination)
        );
      }
      this.currentItems = this.properties.slice(
        (this.pagination.currentPage - 1) * this.pagination.pageSize,
        this.pagination.currentPage * this.pagination.pageSize
      );
    },
    readPageSavedState() {
      // eslint-disable-next-line
      if (process.client) {
        this.filters =
          JSON.parse(
            localStorage.getItem(`${this.selectedPortalSlug}_filters`)
          ) || this.filters;
        this.pagination =
          JSON.parse(
            localStorage.getItem(`${this.selectedPortalSlug}_pagination`)
          ) || this.pagination;
      }
    },
  },
  async fetch() {
    this.blockScreen();
    await this.getProperties();
    this.readPageSavedState();
    this.updatePagination();
    this.unblockScreen();
  },
};
</script>
