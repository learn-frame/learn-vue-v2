<template>
  <div class="ui_component">
    <h1>UI Component</h1>
    <Button disabled>disabled</Button>
    <Button loading type="primary">loading</Button>
    <Button type="danger">danger</Button>
    <Button type="default">default</Button>
    <Button type="primary">primary</Button>
    <Button>使用默认属性</Button>
    <Button type="primary" icon="el-icon-eleme">添加一个 icon</Button>
    <Button type="primary" icon="el-icon-s-flag" @click="handleClickChange">点我触发事件</Button>
  </div>
</template>

<script>
import Button from "../components/Button";
export default {
  name: "home",
  data() {
    return {};
  },
  components: {
    Button
  },
  methods: {
    handleClickChange() {
      this.$message({
        message: "你点击了 y-button 组件",
        type: "success",
        showClose: true
      });
    }
  }
};
</script>
