<template>
  <div class="dynamic_route">
    <h1>动态路由渲染</h1>

    <p>当前ID: {{$route.params.id}}</p>
  </div>
</template>

<script>
export default {
  name: "DynamicRoute",
  data() {
    return {};
  },
  watch: {},
  computed: {},
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      // console.log(this.$route.params.id);
      // console.log("getDataById...");
      // console.log(this);
    }
  }
};
</script>

<style scoped lang="scss">
</style>
