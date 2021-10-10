<template>
  <v-app>
    <v-app-bar absolute short flat class="px-6">
      <v-app-bar-nav-icon>
        <v-btn icon to="/">
          <v-icon>mdi-home</v-icon>
        </v-btn>
      </v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <theme-switch></theme-switch>
    </v-app-bar>
    <v-main class="mt-8 px-10 py-12">
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
