<template>
  <div id="app">
    <div id="nav">
      <router-link :to="routePath.home.path">Home</router-link>
      {{' '}}|
      <router-link :to="routePath.vuex.path">Vuex</router-link>
      {{' '}}|
      <router-link :to="routePath.vuex2.path">Vuex2</router-link>
      {{' '}}|
      <router-link :to="routePath.vshowif.path">深入理解 v-show</router-link>
      {{' '}}|
      <router-link :to="routePath.use.path">深入理解 Vue.use</router-link>
      {{' '}}|
      <router-link :to="routePath.interview.path">面试题</router-link>
      {{' '}}|
      <router-link :to="routePath.uiComponent.path">UI 轮子</router-link>
      {{' '}}|
      <router-link :to="routePath.slot.path">Slot</router-link>
      {{' '}}|
      <router-link :to="routePath.router.path">Router</router-link>
      {{' '}}|
      <router-link to="/a-nonexistent-route">一个不存在的路由</router-link>
    </div>
    <router-view class="main_content"/>
    <p>Copyright © {{new Date().getFullYear()}} Yancey Inc. All rights reserved.</p>
  </div>
</template>

<script>
import routePath from "./constants/routePath";
export default {
  name: "App",
  data() {
    return {
      routePath
    };
  },

  mounted() {},
  methods: {}
};
</script>

<style lang="scss">
body {
  margin: 0;
}
#app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    &.router-link-exact-active {
      color: #42b983;
    }
    &:hover {
      color: #42b983;
      transition: color 200ms linear;
    }
  }
}

.main_content {
  flex: 1;
}
</style>
