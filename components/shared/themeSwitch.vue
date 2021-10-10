<template>
  <div class="d-block">
    <v-input dense hide-details class="theme__switch d-flex align-center">
      <template v-slot:prepend class="ma-0">
        <v-icon class="theme__switch__icon--prepend"
          >mdi-white-balance-sunny</v-icon
        >
      </template>
      <v-switch
        class="pa-0 ma-0"
        inset
        prepend-icon=""
        hide-details
        slot="default"
        :value="isDark"
        @change="changeTheme"
      ></v-switch>
      <template v-slot:append>
        <v-icon class="theme__switch__icon--append">mdi-weather-night</v-icon>
      </template>
    </v-input>
  </div>
</template>

<style lang="scss">
.theme__switch__icon {
  &--prepend {
    margin-right: 8px;
  }
  &--append {
    margin-left: -8px;
  }
}
</style>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "theme-switcher",
  computed: {
    ...mapGetters("screen", ["isDarkTheme"]),
  },
  methods: {
    ...mapActions("screen", ["setLightTheme", "setDarkTheme"]),
    changeTheme() {
      this.isDark = !this.isDark;
      this.$nuxt.$vuetify.theme.dark = this.isDark;
      if (this.isDark) this.setDarkTheme();
      else this.setLightTheme();
    },
  },
  data() {
    return {
      isDark: false,
    };
  },
  mounted() {
    if (this.isDarkTheme) this.isDark = true;
  },
};
</script>
