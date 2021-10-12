import Vue from "vue";
import * as GmapVue from "gmap-vue";

Vue.use(GmapVue, {
  load: {
    key: "AIzaSyASqwm85izav-qdtqvegnh9SU_neguMg4A",
    region: "BR",
    language: "pt-BR",
  },
  installComponents: true,
  autobindAllEvents: true,
});
