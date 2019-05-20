import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState, ITodo } from '@/types/rootTypes';
import { INCREMENT, DECREMENT, FETCH } from '@/mutation-types';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  // 初始化全局状态都写在这里
  state: {
    count: 0,
    todos: [
      {
        id: 1,
        text: '第一件事',
        done: true,
      },
      {
        id: 2,
        text: '第二件事',
        done: false,
      },
    ],
    data: [],
  },
  // 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
  // 下面这个例子中, 可以理解为 increment 是一个事件名
  // 当 "触发" 该事件时, 将执行事件 "回调函数" 中的代码
  mutations: {
    [INCREMENT](state, payload) {
      state.count += payload.amount;
    },
    [DECREMENT](state, payload) {
      state.count -= payload.amount;
    },
    [FETCH](state, payload) {
      state.data = payload.res;
    },
  },
  actions: {
    // 异步操作必须放到 actions 里, 在异步代码中触发 commit
    // 在异步成功后发出一个 commit, 将异步结果以负载的形式传给相应的 mutation
    [FETCH]({ commit }) {
      fetch(
        'https://openexchangerates.org/api/latest.json?app_id=644c28c2a5ce4a28986c075724069501',
      ).then((res: any) => {
        res.json().then((data: any) => {
          const result = data.rates;
          commit({
            type: FETCH,
            res: result,
          });
        });
      });
    },
  },
  // getters 可以认为是 store 的计算属性

  // 它接受两个参数:
  // 第一个参数是 state 对象
  // 第二个参数是 getters 对象, 也就是说你可以通过第二个参数, 在一个 getter 中调用另一个 getter

  // 下面这个例子中, 第一个 getter 返回一个数组
  // 第二个 getter 返回第一个 getter 结果的长度
  getters: {
    doneTodos: (state: RootState) => {
      return state.todos.filter((todo: ITodo) => todo.done);
    },
    doneTodosLength: (state: RootState, getters: any) => {
      return getters.doneTodos.length;
    },
    // getters 也可以返回一个函数, 这样方便传参
    getTodoById: (state: RootState) => (id: number) =>
      state.todos.find((todo: ITodo) => todo.id === id),
  },
};

export default new Vuex.Store<RootState>(store);
