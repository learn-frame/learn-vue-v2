import { INCREMENT, DECREMENT } from './mutation-types';

const state = {
  count: 0
};

const mutations = {
  [INCREMENT](state, payload) {
    state.count += payload.amount;
  },
  [DECREMENT](state, payload) {
    state.count -= payload.amount;
  }
};

export default {
  state,
  mutations
};
