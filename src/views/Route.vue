<template>
  <div class="route">
    <h1>Learn Vue Router</h1>

    <p>
      注：方框按钮都是
      <strong>编程式导航</strong>，圆角按钮都是
      <strong>链接式导航</strong>，
    </p>

    <el-button type="danger" @click="back">动态路由</el-button>
    <router-link :to="routePath.vuex.path">
      <el-button type="primary" round>点击跳转至 Vuex 页面</el-button>
    </router-link>
    <router-link :to="{name: routePath.vuex2.name}">
      <el-button type="primary" round>点击跳转至 Vuex2 页面</el-button>
    </router-link>
    <router-link
      :to="{name: routePath.dynamicRouter.name, params: {id: '5acd0c8a6fb9a028da7cdfaf'}}"
    >
      <el-button type="primary" round>点击跳转至 Dynamic Router 页面</el-button>
    </router-link>

    <el-menu
      default-active="2"
      mode="horizontal"
      router
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="/router/child">
        <i class="el-icon-eleme"></i>
        <span slot="title">渲染子路由</span>
      </el-menu-item>
      <el-menu-item index="2" disabled>
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4" disabled>
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import routePath from "../constants/routePath";
export default {
  name: "Route",
  data() {
    return {
      routePath
    };
  },
  watch: {
    $route(to, from) {
      console.log("ff");
    }
  },
  computed: {},
  mounted() {
  },
  methods: {
    back() {
      // push 可以接收一个字符串，它是某个路由的 path
      // this.$router.push("/");

      // 它也可以接收一个对象
      // 注意 path 和 params 不能一起使用，否则不能正常渲染动态路由
      // 如要渲染动态路由应当使用 name 和 params 的组合
      // 该条同样适用于 router-link 组件的 to 属性
      this.$router.push({
        name: routePath.dynamicRouter.name,
        params: { id: "5c02142fe51d4511be77aad7" },
        query: { pageSize: 10, pageNum: 1 }
      });

      // 后退一步
      // this.$router.go(-1);
      // 前进一步
      // this.$router.go(1);
    },
  }
};
</script>

<style scoped lang="scss">
.route {
  .el-button {
    margin: 10px;
  }
}
</style>
