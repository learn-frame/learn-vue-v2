import { LOGIN } from './mutation-types';

const state = {
  token: '',
  userId: '',
  userName: ''
};

const mutations = {
  [LOGIN](state, payload) {
    state.token = payload.token;
    state.userId = payload.userId;
    state.userName = payload.userName;
  }
};

export default {
  state,
  mutations
};
