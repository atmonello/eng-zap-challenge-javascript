<template>
  <v-container fluid>
    <v-card tile elevation="0">
      <v-carousel :height="carouselHeight" class="mb-4" hide-delimiters>
        <v-carousel-item
          v-for="(image, index) in selectedProperty.images"
          :key="`${selectedProperty.id}-image-${index}`"
          :src="image"
        ></v-carousel-item>
      </v-carousel>
      <v-row dense class="px-6">
        <v-col cols="12">
          <h1 class="text-xl-h1 text-h5 font-weight-bold">
            Imóvel para <span v-if="isRental">alugar</span
            ><span v-else>comprar</span> em
            {{ selectedProperty.address.neighborhood }},
            {{ selectedProperty.address.city }}
          </h1>
        </v-col>
      </v-row>
      <v-row dense class="px-6">
        <v-col cols="12" v-if="propertyAddress">
          <h2 class="text-xl-h2 text-subtitle-1">
            {{ propertyAddressFormatted }}
          </h2>
        </v-col>
        <v-col cols="6">
          <detailed-features
            :area="selectedProperty.usableAreas"
            :bathrooms="selectedProperty.bathrooms"
            :bedrooms="selectedProperty.bedrooms"
            :parking="selectedProperty.parkingSpaces"
            :icon-size="32"
          />
        </v-col>
        <v-divider vertical />
        <v-col cols="6">
          <detailed-finance
            :price-info="selectedProperty.pricingInfos"
          ></detailed-finance>
        </v-col>
      </v-row>
      <v-row dense class="px-6">
        <v-col cols="12">
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn icon class="mx-4 background--text">
              <v-icon size="48">mdi-whatsapp</v-icon>
            </v-btn>
            <v-btn rounded text class="background white--text px-4" x-large>
              Mensagem
            </v-btn>
          </v-card-actions>
        </v-col>
      </v-row>
      <v-row dense class="pt-6">
        <v-col cols="12" class="pb-0">
          <v-card tile width="100%" v-if="!showMap">
            <v-img
              src="/map-placeholder.jpg"
              width="100%"
              height="320"
              gradient="to bottom, rgba(0, 0, 0, .33), rgba(0, 0, 0, .5) 25%, rgba(0, 0, 0, .75) 50%, #000 90%"
              class="align-end"
              ><v-card-title class="text-center">
                <v-spacer></v-spacer>
                <v-btn
                  outlined
                  class="background white--text"
                  @click="showMap = true"
                  >Exibir mapa da região</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-title>
            </v-img>
          </v-card>
          <GmapMap
            v-else
            :center="propertyGeolocation"
            style="width: 100%; height: 320px"
            :zoom="15"
          >
            <GmapMarker
              :position="propertyGeolocation"
              :clickable="false"
              :draggable="false"
            />
          </GmapMap>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<style lang="scss" scoped>
h1 {
  word-break: break-word;
}
.v-list-item {
  min-height: unset;
}
</style>

<script>
import { gmapApi } from "gmap-vue";
import { mapActions, mapGetters } from "vuex";
import DetailedFinance from "@/components/property/detailedFinance.vue";
import DetailedFeatures from "@/components/property/detailedFeatures.vue";

export default {
  components: {
    DetailedFinance,
    DetailedFeatures,
  },
  props: {
    selectedProperty: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      propertyAddress: null,
      showMap: false,
    };
  },
  computed: {
    ...mapGetters("screen", ["isBlockedScreen"]),
    google: gmapApi,
    isRental() {
      return this.selectedProperty.pricingInfos.businessType === "RENTAL";
    },
    propertyGeolocation() {
      return {
        lat: Number(this.selectedProperty.address.geoLocation.location.lat),
        lng: Number(this.selectedProperty.address.geoLocation.location.lon),
      };
    },
    screenBreakpoint() {
      return this.$vuetify.breakpoint;
    },
    carouselHeight() {
      if (this.screenBreakpoint.mdAndDown) return 320;
      else if (this.screenBreakpoint.lg) return 360;
      else return 480;
    },
    propertyAddressFormatted() {
      if (this.propertyAddress) {
        return `${this.propertyAddress.street || this.propertyAddress.name} - ${
          this.selectedProperty.address.neighborhood
        }, ${this.propertyAddress.locality}, ${
          this.propertyAddress.region_code
        }`;
      }
    },
  },
  methods: {
    ...mapActions("screen", ["blockScreen", "unblockScreen"]),
    async getPropertyAddress() {
      try {
        const url = this.$addressApi.buildGeoToAddressUrl(
          this.propertyGeolocation.lat,
          this.propertyGeolocation.lng
        );
        const {
          data: { data: addressArray },
        } = await this.$addressApi.get(url);
        return addressArray.sort((a, b) => a.confidence > b.confidence)[0];
      } catch (e) {
        return null;
      }
    },
  },
  async fetch() {
    this.blockScreen();
    this.propertyAddress = await this.getPropertyAddress();
    this.unblockScreen();
  },
};
</script>