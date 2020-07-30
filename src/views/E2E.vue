<template>
  <div class="e2e">
    <h1>Learn E2E</h1>

    <v-btn
      depressed
      color="primary"
      @click="handleClick"
      :class="{ 'is-fetching': showLog }"
    >click me!</v-btn>
    <p v-if="showLog" class="log">Hello, world.</p>

    <p class="c-image">https://www.baidu.com</p>

    <input type="text" class="c-input" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'E2E',

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
