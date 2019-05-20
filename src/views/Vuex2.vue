<template>
  <div class="vuex2">
    <h1>任意页面都可以使用全局状态</h1>

    <el-row :gutter="20">
      <el-col :span="12">
        <h2>count 的值为: {{count}}</h2>
      </el-col>
      <el-col :span="12">
        <h2>异步 store 示例</h2>
        <el-table :data="asyncData">
          <el-table-column prop="code" label="code"></el-table-column>
          <el-table-column label="symbol">
            <template slot-scope="scope">
              <span v-html="scope.row.symbol"></span>
            </template>
          </el-table-column>
          <el-table-column prop="rate" label="rate"></el-table-column>
          <el-table-column prop="description" label="description"></el-table-column>
          <el-table-column prop="rate_float" label="rate_float"></el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutation, mapActions } from "vuex";
export default {
  name: "Vuex2",
  data() {
    return {};
  },
  watch: {},
  computed: {
    ...mapState({
      count(state) {
        return state.countStore.count;
      },
      asyncData(state) {
        return state.asyncStore.data;
      }
    })
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss">
</style>
