import {SET_USER_PHONE,SET_USER_ID,SET_TOKEN,SET_NICKNAME,SET_USER_IMAGE_URL} from './mutations-type'

export default {
  setUserPhone({commit},flag){
    commit(SET_USER_PHONE,flag)
  },
  setUserId({commit},flag){
    commit(SET_USER_ID,flag)
  },
  setToken({commit},flag){
    commit(SET_TOKEN,flag)
  },
  setNickName({commit},flag){
    commit(SET_NICKNAME,flag)
  },
  setUserImageUrl({commit},flag){
    commit(SET_USER_IMAGE_URL,flag)
  }
}
