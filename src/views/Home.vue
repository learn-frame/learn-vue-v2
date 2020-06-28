<template>
  <div class="home">
    <h1>Vue 基础</h1>

    <!-- 数据绑定使用 Mustache 语法 -->
    <p>{{ msg }}</p>

    <!-- 使用 v-once 绑定的数据不会被改变 -->
    <p v-once>{{ msg }}</p>

    <!-- transition 跟 v-show 或 v-if 配合, 制造淡入/淡出的效果 -->
    <transition name="fade">
      <p v-show="isFetching">{{ msg }}</p>
    </transition>

    <!-- 绑定事件简写用 '@', 绑定动态属性简写用 ':' -->
    <v-btn
      depressed
      color="primary"
      @click="handleClick"
      :disabled="isFetching"
      >{{ isFetching ? 'loading' : 'click me' }}</v-btn
    >

    <!-- v-if v-else-if v-else -->
    <p v-if="isFetching">{{ msg }}</p>
    <p v-else-if="isFetching">{{ msg }}</p>
    <p v-else>{{ msg }}</p>

    <!-- v-if 与 v-show 的区别, 老生常谈 -->
    <p v-show="isFetching">{{ msg }}</p>

    <!-- 渲染 html 语法用 v-html, 类似于 React 的 dangerouslySetInnerHTML, 小心 XSS -->
    <p>Using mustaches: {{ rawHtml }}</p>
    <p>
      Using v-html directive:
      <span v-html="rawHtml"></span>
    </p>

    <!-- 动态参数 -->
    <a :[attributeName]="url">Yancey Official Blog</a>

    <!-- prevent 为修饰符, 直阻止默认行为 -->
    <form @submit.prevent="onSubmit">...</form>

    <!-- 双向绑定 -->
    <v-col cols="12" sm="6" md="3">
      <v-text-field v-model="inputTxt" label="Input something..." />
      <p>{{ reversedInputTxt }}</p>
    </v-col>

    <!-- 绑定 class -->
    <div
      class="static"
      :class="{ active: !!inputTxt, 'text-danger': isFetching }"
    >
      如果在文本框输入文字, 我就会变绿; 如果点击上面的按钮, 我就会变红
    </div>

    <!-- 绑定 class 可以用对象的形式 -->
    <div :class="classObj">
      i'm red
    </div>

    <!-- 绑定 class 还可以用数组的形式 -->
    <div
      :class="[
        isFetching ? activeClass : '',
        errorClass,
        { active: isFetching },
      ]"
    >
      i'm red
    </div>

    <!-- 绑定 inline style 的方式几乎跟 class 一样 -->
    <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>

    <!-- vue 会将两个 input 框复用, 因此切换之后输入的值会保留 -->
    <!-- 在指明 key 后就会把输入的值清除了 -->
    <template v-if="loginType === 'username'">
      <label>Username</label>
      <input placeholder="Enter your username" key="username-input" />
    </template>
    <template v-else>
      <label>Email</label>
      <input placeholder="Enter your email address" key="email-input" />
    </template>

    <!-- 类似 Python 中的 Range, 下面会渲染出 1 2 3 4 5 -->
    <div>
      <span v-for="n in 5" :key="n">{{ n }} </span>
    </div>

    <!-- 写个组件吧 -->
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

  created() {
    // TODO:
  },

  mounted() {
    // TODO:
  },

  // 计算属性最好是“纯”的, watch 可以添加一些副作用
  watch: {
    inputTxt(val) {
      this.msg = `Utada Hikaru - ${val}`
    },
  },

  data: () => ({
    msg: 'first love.'.slice(0, -1),
    todos: [
      { text: '学习 JavaScript' },
      { text: '学习 Vue' },
      { text: '整个牛项目' },
    ],
    inputTxt: '',
    rawHtml: '<span style="color: red">hello, world</span>',
    isFetching: false,
    attributeName: 'href',
    url: 'https://yanceyleo.com',
    firstName: '',
    lastName: '',
    classObj: {
      active: false,
      'text-danger': true,
    },
    activeClass: 'active',
    errorClass: 'text-danger',
    activeColor: 'red',
    fontSize: 30,
    loginType: 'username',
  }),

  // 计算属性是基于它们的响应式依赖进行缓存的
  // 计算属性完全可以用 method 代替
  // 但计算属性会进行缓存, 性能会更好
  computed: {
    reversedInputTxt() {
      return this.inputTxt
        .split('')
        .reverse()
        .join('')
    },

    fullName: {
      // getter
      get() {
        return `${this.firstName} ${this.lastName}`
      },
      // setter
      set(newValue: string) {
        const nameArr = newValue.split(' ')
        const [firstName, lastName] = nameArr
        this.firstName = firstName
        this.lastName = lastName
      },
    },
  },

  methods: {
    handleClick(e: Event) {
      this.msg = this.msg
        .split('')
        .reverse()
        .join('')

      this.isFetching = !this.isFetching

      console.log(e.target)
    },
    onSubmit() {
      // TODO:
    },
  },
})
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.active {
  color: #42b983;
}

.text-danger {
  color: #d63200;
}
</style>
