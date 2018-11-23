import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ComeState:0,
  },
  mutations: {
    // 更改 状态值
    // ChangeComeState:state=>state.count=1,
    ChangeComeState(state){
      state.count=1;
    }
  },
  actions: {

  }
})
