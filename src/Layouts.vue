<template>
  <div class="layouts">
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      router
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <!-- <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>-->
      <el-menu-item
        v-for="routePath in routePaths"
        :key="routePath.path"
        :index="routePath.path"
      >{{routePath.showName}}</el-menu-item>
    </el-menu>
    <router-view class="main_content"/>
    <p>Copyright © {{new Date().getFullYear()}} Yancey Inc. All rights reserved.</p>
  </div>
</template>

<script>
import routePaths from "./constants/routePaths";
export default {
  name: "Layouts",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: routePaths.home.path,
      routePaths
    };
  },
  watch: {},
  computed: {},
  mounted() {
    console.log(this.$router);
    console.log(this.$route);
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style lang="scss">
body {
  margin: 0;
}
.layouts {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;
}

.main_content {
  flex: 1;
  margin-top: 40px;
}
</style>
