<template>
  <div class="e2e">
    <h1>Learn E2E</h1>
    <v-btn depressed color="primary" @click="handleClick">click me!</v-btn>
    <p v-if="showLog">Hello, world.</p>

    <p>https://www.baidu.com</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'E2E',

  mounted() {
    // TODO:
  },

  data: () => ({
    showLog: false,
  }),

  methods: {
    handleClick() {
      this.showLog = true
    },
  },
})
</script>
