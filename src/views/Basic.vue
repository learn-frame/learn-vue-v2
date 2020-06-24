<template>
  <div class="basic">
    <h1>Vue 基础</h1>

    <p>{{ msg }}</p>

    <transition name="fade">
      <p v-if="show">{{ msg }}</p>
    </transition>

    <v-btn outlined @click="handleClick">click me</v-btn>

    <v-col cols="12" sm="6" md="3">
      <v-text-field v-model="inputTxt" label="Input something..." />
      <p>{{ inputTxt }}</p>
    </v-col>

    <hello-world :dataList="todos"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'

export default Vue.extend({
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    msg: 'first love.'.slice(0, -1),
    msg2: 'first love',
    show: false,
    todos: [
      { text: '学习 JavaScript' },
      { text: '学习 Vue' },
      { text: '整个牛项目' },
    ],
    inputTxt: '',
  }),

  methods: {
    handleClick() {
      this.msg = this.msg
        .split('')
        .reverse()
        .join('')
      this.show = !this.show
    },
  },
})
</script>

<style lang="scss" scoped>
.nav-link {
  text-decoration: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
