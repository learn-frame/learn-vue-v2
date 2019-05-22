<template>
  <div class="parent">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Parent",
  props: {
    data: {
      type: Array,
      default: null
    }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss" scope>
</style>
