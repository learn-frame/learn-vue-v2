import { FETCH } from './mutation-types';
import { bitcoinApi } from '../constants/constants';

const state = {
  data: []
};

// 将异步信息存储到 store 中
const mutations = {
  [FETCH](state, payload) {
    state.data = payload.res;
  }
};

// 异步代码必须放到 actions 中
// 在请求到数据的时候提交 commit 至 mutations
const actions = {
  [FETCH]({ commit }) {
    fetch(bitcoinApi).then(res => {
      res.json().then(data => {
        const result = Object.values(data.bpi);
        commit({
          type: FETCH,
          res: result
        });
      });
    });
  }
};

export default {
  state,
  mutations,
  actions
};
