import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import createPersistedState from "vuex-persistedstate"
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state:state,
  mutations:mutations,
  actions:actions,
  getters:getters,
  plugins: [createPersistedState({
    storage: window.localStorage,
    reducer(val) {
      return { // 只储存state中的user
        userPhone: val.userPhone,
        userId:val.userId,
        token:val.token,
        nickName:val.nickName,
        userImageUrl:val.userImageUrl
      }
    }
  })]
 /* //state: 用于保存全局共享数据
  state: {
  },
  //用于保存修改全局共享的数据的方法
  mutations: {
  },
  //用于保存触发mutations种保存的方法的方法
  actions: {
  },
  //专门用于保存获取全局共享的数据的方法
  getters:{

  },
  modules: {
  }*/
})

