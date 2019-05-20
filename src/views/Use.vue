<template>
  <div class="use">
    <p>
      Vue.use() 用于安装插件。当插件是一个对象时，它必须提供一个 install 方法；当插件是一个函数时，
      它会被作为 install 方法。install 方法调用时，会将 Vue 作为参数传入。
    </p>
    <p>
      <code>initUse()</code> 方法在定义了
      <code>Vue.use()</code> 的职责。
      <code>_installedPlugins</code> 是一个数组，它保存着已安装的插件。该方法首先判断
      <strong>该插件是否已安装</strong>，然后执行该插件的 install 方法。
      <strong>
        initUse() 的源码戳这里：
        <a
          href="https://github.com/vuejs/vue/blob/master/src/core/global-api/use.js"
        >src/core/global-api/use.js</a>
      </strong>
    </p>
    <p>
      以 Vuex 为例，它有一个
      <a href="https://github.com/vuejs/vuex/blob/dev/src/store.js#L496">install() 方法</a>，该方法再次做一次判断，判断
      <strong>该插件是否已安装。</strong> 其次，该方法会执行
      <a href="https://github.com/vuejs/vuex/blob/dev/src/mixin.js">applyMixin()</a>，它的目的是将 vuexInit 混入到生命周期钩子 beforeCreate 中。
    </p>
    <p>而 vuexInit 使每个组件都使用一份 store.</p>
    <pre>
      <code>
          function vuexInit () {
            const options = this.$options
            // options.store 意味着该组件已经是根组件，此时将 store 注入
            if (options.store) {
              this.$store = typeof options.store === 'function'
                ? options.store()
                : options.store
            // 当组件不是根组件时，则使用其父组件的 store，层层嵌套，使得每个组件都使用一份 store
            } else if (options.parent && options.parent.$store) {
              this.$store = options.parent.$store
            }
          }
      </code>
    </pre>
    <p>
      参考：
      <a href="https://juejin.im/post/5cb30243e51d456e431ada29">【前端词典】从源码解读 Vuex 注入 Vue 生命周期的过程</a>
    </p>
  </div>
</template>
<script>
export default {
  name: "VueUse",
  data() {
    return {
      data: ""
    };
  },
  watch: {},
  computed: {},
  mounted() {
    // 用于获取当前 Vue 实例的初始化选项
    console.log(this.$options);
  },
  methods: {}
};
</script>

<style scoped lang="scss">
.use {
  text-align: left;
}
</style>
