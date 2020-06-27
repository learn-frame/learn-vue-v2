<template>
  <v-app>
    <v-app-bar app color="black" dark dense>
      <div class="d-flex align-center">
        <router-link to="/">
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="./assets/logo.png"
            transition="scale-transition"
            width="40"
          />
        </router-link>
      </div>

      <v-spacer></v-spacer>

      <router-link to="/vue-router" class="nav-link">
        <v-btn text>Vue Router</v-btn>
      </router-link>

      <router-link to="/vuex" class="nav-link">
        <v-btn text>Vuex</v-btn>
      </router-link>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'App',

  components: {},

  data: () => ({
    //
  }),
})
</script>

<style lang="scss" scoped>
.nav-link {
  text-decoration: none;
}
</style>
