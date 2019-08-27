import Vue from 'vue'
import vuex, { Store, mapState, mapGetters, mapMutations, module } from 'vuex'
Vue.use(vuex)

const state = {
  isCollapse: false
}
const mutations = {
  open(state, label) {
    state.isCollapse = label
  },
}

const module = {
  state, mutations
}
const store = new Store({
  modules: { a: module }
})
export default store