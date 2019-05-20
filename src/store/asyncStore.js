import { FETCH } from './mutation-types';

const state = {
  data: []
};

const mutations = {
  [FETCH](state, payload) {
    state.data = payload.res;
  }
};

const actions = {
  [FETCH]({ commit }) {
    fetch(
      'https://openexchangerates.org/api/latest.json?app_id=644c28c2a5ce4a28986c075724069501'
    ).then(res => {
      res.json().then(data => {
        const result = Object.keys(data.rates).map(key => ({
          type: key,
          value: data.rates[key]
        }));
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
