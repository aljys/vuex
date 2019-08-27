import Vue from 'vue'
import vuex, { Store } from 'vuex'
import { getList } from '../api/user'

Vue.use(vuex)
const state = {
  isCollapse: false,
  count: 0,
  list: []
}
const mutations = {
  add(state) {
    state.count++
  },
  sub(state) {
    state.count--
  },
  open(state, label) {
    state.isCollapse = label
  },
  getMenu(state) {
    getList('/mock/5d62966d1fc89667465ec0bd/react/demo/menu').then(res => {
      state.list = res.menu
    })
  }
}
const getters = {
  count: function (state) {
    return state.count += 100;
  }
}
const actions = {
  menuActions({ commit }) {
    commit('getMenu')
  }
}

const store = new Store({
  state, mutations, actions, getters
})
export default store