<template>
  <v-container fluid>
    <v-row>
      <v-col
        cols="12"
        md="6"
        xl="3"
        v-for="property in properties"
        :key="property.id"
      >
        <list-item :property="property" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ListItem from "@/components/properties/listItem.vue";
export default {
  components: {
    ListItem,
  },
  props: {
    properties: {
      type: Array,
      required: true,
    },
  },
};
</script>