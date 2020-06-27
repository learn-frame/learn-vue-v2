<template>
  <div class="home">
    <h1>Vue 基础</h1>

    <!-- 数据绑定使用 Mustache 语法 -->
    <p>{{ msg }}</p>

    <p v-once>{{ msg }}</p>

    <transition name="fade">
      <p v-if="show">{{ msg }}</p>
    </transition>

    <v-btn
      depressed
      color="primary"
      @click="handleClick"
      :disabled="isFetching"
    >{{isFetching ? 'loading' : 'click me'}}</v-btn>

    <p>Using mustaches: {{ rawHtml }}</p>
    <p>
      Using v-html directive:
      <span v-html="rawHtml"></span>
    </p>

    <p v-if="isFetching">正在加载中...</p>

    <a :[attributeName]="url">Yancey Official Blog</a>

    <form @submit.prevent="onSubmit">...</form>

    <v-col cols="12" sm="6" md="3">
      <v-text-field v-model="inputTxt" label="Input something..." />
      <p>{{ inputTxt }}</p>
    </v-col>

    <hello-world :dataList="todos" />
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
    rawHtml: '<span style="color: red">hello, world</span>',
    isFetching: true,
    attributeName: 'href',
    url: 'https://yanceyleo.com',
  }),

  methods: {
    handleClick() {
      this.msg = this.msg
        .split('')
        .reverse()
        .join('')
      this.show = !this.show
    },
    onSubmit() {
      // TODO:
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
  transition: opacity 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
