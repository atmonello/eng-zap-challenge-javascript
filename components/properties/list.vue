<template>
  <v-container fluid>
    <v-row>
      <v-col
        cols="12"
        md="6"
        lg="4"
        v-for="property in properties"
        :key="property.id"
      >
        <p>
          Imóvel em {{ property.address.neighborhood }},
          {{ property.address.city }}
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    properties: {
      type: Array,
      required: true,
    },
  },
};
</script>