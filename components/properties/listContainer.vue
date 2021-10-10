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
              ></v-checkbox>
              <v-checkbox
                hide-details
                v-model="filters.sale"
                label="Venda"
                class="px-4"
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
    ...mapGetters("properties", ["listProperties"]),
    ...mapGetters("screen", ["isBlockedScreen"]),
    selectedProperties() {
      if (!this.listProperties) return [];
      return this.listProperties.slice(0, 10);
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
  },
  async fetch() {
    this.blockScreen();
    await this.getProperties();
    this.unblockScreen();
  },
};
</script>
