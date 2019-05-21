<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>learn Vue.js</h1>
    <Button disabled>disabled</Button>
    <Button loading type="primary">loading</Button>
    <Button type="danger">danger</Button>
    <Button type="default">default</Button>
    <Button type="primary">primary</Button>
    <Button>使用默认属性</Button>
    <Button type="primary" icon="el-icon-eleme">禽兽</Button>
  </div>
</template>

<script>
import Button from "../components/Button";
export default {
  name: "home",
  components: {
    Button
  },
  methods:{
  }
};
</script>
