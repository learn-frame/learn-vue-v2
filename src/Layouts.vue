<template>
  <div class="layouts">
    <el-menu
      :default-active="activeIndex2"
      class="menu"
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
      <el-menu-item :index="routePaths.home.path">Home</el-menu-item>
      <el-menu-item :index="routePaths.vuex.path">Vuex</el-menu-item>
      <el-menu-item :index="routePaths.vuex2.path">Vuex2</el-menu-item>
      <el-menu-item :index="routePaths.vshowif.path">深入理解 v-show</el-menu-item>
      <el-menu-item :index="routePaths.use.path">深入理解 Vue.use</el-menu-item>
      <el-menu-item :index="routePaths.interview.path">面试题</el-menu-item>
      <el-menu-item :index="routePaths.uiComponent.path">UI 轮子</el-menu-item>
      <el-menu-item :index="routePaths.slot.path">Slot</el-menu-item>
      <el-menu-item :index="routePaths.router.path">Router</el-menu-item>
      <el-menu-item index="/a-nonexistent-route">一个不存在的路由</el-menu-item>
      <div class="user_info">
        <i class="el-icon-user-solid"></i>
        <span v-if="getUserName">Hello, {{getUserName}}</span>
        <router-link v-else to="/login">
          <span>请登录</span>
        </router-link>
      </div>
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
  computed: {
    getUserName() {
      return this.$store.state.loginStore.userName;
    }
  },
  mounted() {},
  methods: {
    handleSelect(key, keyPath) {
      // console.log(key, keyPath);
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
.menu {
  .user_info {
    float: right;
    margin-right: 20px;
    line-height: 61px;
    color: #fafafa;
    outline: none;
  }
  a {
    color: #fafafa;
    text-decoration: none;
  }
  .el-icon-user-solid {
    margin-right: 4px;
  }
}
</style>
