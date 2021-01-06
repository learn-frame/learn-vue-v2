<template>
  <div class="home">
    <Child
      staticTxt="向子组件传递静态文字"
      :propValue="propValue"
      @parentMethod2="parentMethod2"
      :parentMethod3="parentMethod3"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Child from '@/components/Child.vue'

@Component({
  components: {
    Child,
  },
})
export default class Home extends Vue {
  public propValue = '向子组件传递属性值'

  // eslint-disable-next-line class-methods-use-this
  public parentMethod1(value: string) {
    // eslint-disable-next-line no-alert
    alert(`我是父组件方法1, 我接受到子组件传递来的值：${value}`)
  }

  // eslint-disable-next-line class-methods-use-this
  public parentMethod2(value: number) {
    // eslint-disable-next-line no-alert
    alert(`我是父组件方法2, 我接受到子组件传递来的值：${value}`)
  }

  // 这是最推荐的方式
  // eslint-disable-next-line class-methods-use-this
  public parentMethod3(value: number) {
    // eslint-disable-next-line no-alert
    alert(`我是父组件方法3, 我接受到子组件传递来的值：${value}`)
  }
}
</script>
