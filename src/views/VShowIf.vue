<template>
  <div class>
    <div>
      <span class="span1" style="display: none" v-show="vShow">span1</span>
      <span class="span2" v-show="vShow">span2</span>
    </div>
    <el-button @click="handleVShowChange">切换 v-show</el-button>

    <p>
      当 v-show 为 false 时, 它会给相应元素添加一个
      <strong>内联的{{' '}}</strong>
      <code>display: none</code>
    </p>
    <p>
      当 v-show 为 true 时, 它会将相应元素
      <strong>内联的</strong> 那个
      <code>display: none</code>
      <strong>{{' '}}移除掉</strong>
    </p>
    <p>
      因此, 当该元素的外联样式存在
      <code>display: none</code> 时, 即便 v-show 为 true, 该元素也是隐藏的。
    </p>

    <p>
      源码位置：
      <a
        href="https://github.com/vuejs/vue/blob/master/src/platforms/web/runtime/directives/show.js"
      >vue/src/platforms/web/runtime/directives/show.js</a>
    </p>
    <p>源码分析:</p>
    <p>
      当 v-show 为 true 时，会执行
      <code>el.style.display = ''</code>，这一句实际就把内联的 display 清除掉了
    </p>
    <p>
      当 v-show 为 false 时，会执行
      <code>el.style.display = 'none'</code>
    </p>
    <p>
      <code>el.style</code> 只会获取
      <strong>内联样式</strong>，而
      <code>window.getComputedStyle(el)</code> 可以获取内联、外联样式。
    </p>
  </div>
</template>

<script>
export default {
  name: "VShowIf",
  data() {
    return {
      vShow: false
    };
  },
  watch: {},
  computed: {},
  mounted() {},
  methods: {
    handleVShowChange() {
      this.vShow = !this.vShow;
    }
  }
};
</script>

<style scoped lang="scss">
.span1 {
  color: red;
}

.span2 {
  display: none;
  color: green;
}
</style>
