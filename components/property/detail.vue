<template>
  <div>
    <pre>{{ selectedProperty }}</pre>
  </div>
</template>

<script>
export default {
  props: {
    selectedProperty: {
      type: Object,
      required: true,
    },
  },
};
</script>