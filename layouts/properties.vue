<template>
  <v-app>
    <v-app-bar flat dense app class="transparent">
      <v-app-bar-nav-icon>
        <v-btn icon to="/">
          <v-icon>mdi-home</v-icon>
        </v-btn>
      </v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <theme-switch></theme-switch>
    </v-app-bar>
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
import ThemeSwitch from "@/components/shared/themeSwitch.vue";
export default {
  components: {
    ThemeSwitch,
  },
};
</script>
