<template>
  <div class="vuex">
    <h1>Vuex practice</h1>
    <el-row :gutter="20">
      <el-col :xs="12" :sm="12" :md="12" :lg="8" :xl="6">
        <div class="block">
          <h2>全局 store 的计数器</h2>
          <el-button type="danger" @click="handleDecreaseChange()">-</el-button>
          <span class="count">当前 count 的值: {{count}}</span>
          <el-button type="primary" @click="handleIncreaseChange()">+</el-button>
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :md="12" :lg="8" :xl="6">
        <div class="block">
          <h2>已经完成的 todo 的数量: {{aliasDoneTodosLength}}</h2>
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :md="12" :lg="8" :xl="6">
        <div class="block">
          <h2>已经完成的 todo</h2>
          <el-table :data="doneTodos">
            <el-table-column prop="id" label="id"></el-table-column>
            <el-table-column prop="text" label="todo"></el-table-column>
            <el-table-column label="done">
              <template slot-scope="scope">
                <span>{{scope.row.done.toString()}}</span>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :md="12" :lg="8" :xl="6">
        <div class="block">
          <h2>根据 id 检索相应的 todo</h2>
          <el-input
            style="margin-bottom: 10px;"
            type="number"
            v-model.number="inputValue"
            placeholder="输入 1 或 2 或 3 能匹配到"
          ></el-input>
          <el-button type="primary" @click="getTodoById(inputValue)">click me</el-button>
          <p>{{curTodo}}</p>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12">
        <div class="block">
          <h2>异步 store 示例</h2>
          <el-table :data="data">
            <el-table-column prop="code" label="code"></el-table-column>
            <el-table-column label="symbol">
              <template slot-scope="scope">
                <!-- 通过 v-html 传入 html 代码, 使用 {{}} 均会被解析成字符串 -->
                <span v-html="scope.row.symbol"></span>
              </template>
            </el-table-column>
            <el-table-column prop="rate" label="rate"></el-table-column>
            <el-table-column prop="description" label="description"></el-table-column>
            <el-table-column prop="rate_float" label="rate_float"></el-table-column>
          </el-table>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutation, mapActions } from "vuex";
import { INCREMENT, DECREMENT, FETCH } from "../store/mutation-types";

export default {
  name: "Vuex",
  computed: {
    localCompute() {
      return this.base;
    },
    // mapState 可以组合多个来自 store 的 computed, 参数为 state
    // 避免了写多个 this.$store.state.count
    // 因为普通组件也可能会有自己的计算属性
    // 可以通过展开运算符来组合组件内部的 computed 和与 store 有关的 computed
    ...mapState({
      count(state) {
        return state.countStore.count;
      },
      countPlusLocalState(state) {
        return state.countStore.count + this.base;
      },
      data(state) {
        return state.asyncStore.data;
      }
    }),

    // mapGetters 辅助函数是将 store 中的 getter 映射到局部计算属性:
    // 可以使用数组的形式, 如下
    // ...mapGetters(['doneTodosLength']),

    // 也可以使用对象的形式, 对象的形式可以给指定 getter 创建别名
    ...mapGetters({
      aliasDoneTodosLength: "doneTodosLength"
    })
  },

  data() {
    return {
      base: 5,
      doneTodos: this.$store.getters.doneTodos,
      inputValue: null,
      curTodo: null
    };
  },
  mounted() {
    this.getAsyncData();
  },
  watch: {},
  methods: {
    getTodoById(id) {
      const res = this.$store.getters.getTodoById(id);
      if (res) {
        this.curTodo = res;
      } else {
        this.curTodo = "没有此 id 的 todo";
      }
    },
    // 可以使用 mapMutations
    // ...mapMutations({
    //   handleIncreaseChange: INCREMENT,
    //   handleDecreaseChange: DECREMENT,
    // }),

    // 使用 mapMutations 等价于下面的代码
    handleIncreaseChange() {
      this.$store.commit({
        type: INCREMENT,
        amount: 10
      });
    },
    handleDecreaseChange() {
      this.$store.commit({
        type: DECREMENT,
        amount: 10
      });
    },

    // 可以使用 mapActions
    // ...mapActions({
    //   getAsyncData: FETCH,
    // }),

    // 使用 mapActions 等价于下面的代码
    getAsyncData() {
      this.$store.dispatch(FETCH);
    }
  }
};
</script>

<style scope lang='scss'>
.count {
  margin: 0 10px;
}

.block {
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
}
</style>