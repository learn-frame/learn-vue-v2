<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      {{' '}}|
      <router-link to="/vuex">Vuex</router-link>
      {{' '}}|
      <router-link to="/vuex2">Vuex2</router-link>
      {{' '}}|
      <router-link to="/vshowif">深入理解 v-show</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
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
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
