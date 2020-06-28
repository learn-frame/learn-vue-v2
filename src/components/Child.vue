<template>
  <section class="child_component_wrapper">
    <p>{{ staticTxt }}</p>
    <p>{{ propValue }}</p>
    <button @click="getParentMethod1">子组件调用父组件方式一</button>
    <button @click="getParentMethod2">子组件调用父组件方式二</button>
    <button @click="getParentMethod3">子组件调用父组件方式三</button>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Child extends Vue {
  @Prop() private staticTxt!: string

  @Prop() private propValue!: string

  @Prop({ required: true, type: Function }) private parentMethod3!: (
    value: number,
  ) => void

  public getParentMethod1() {
    // @ts-ignore
    // 节制地使用 $parent 和 $children,
    // 它们的主要目的是作为访问组件的应急方法,
    // 更推荐用 props 和 events 实现父子组件通信
    this.$parent.parentMethod1(1)
  }

  public getParentMethod2() {
    this.$emit('parentMethod2', 2)
  }

  public getParentMethod3() {
    this.parentMethod3(3)
  }
}
</script>

<style scoped lang="scss">
button {
  margin: 4px;
}
</style>
