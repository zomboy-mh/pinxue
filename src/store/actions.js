import {SET_FULL_SCREEN,SET_USER_PHONE,SET_USER_ID} from './mutations-type'

export default {
  setFullScreen({commit}, flag) {
    commit(SET_FULL_SCREEN, flag)
  },
  setUserPhone({commit},flag){
    commit(SET_USER_PHONE,flag)
  },
  setUserId({commit},flag){
    commit(SET_USER_ID,flag)
  }
}
