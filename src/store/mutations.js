import {SET_USER_PHONE,
      SET_USER_ID,
      SET_TOKEN,
  SET_NICKNAME,
  SET_USER_IMAGE_URL} from './mutations-type'
export default {
  [SET_USER_PHONE](state,flag){
    state.userPhone = flag
  },
  [SET_NICKNAME](state,flag){
    state.nickName = flag
  },
  [SET_USER_ID](state,flag){
    state.userId = flag
  },
  [SET_TOKEN](state,flag){
    localStorage.setItem('token',flag)
    state.token = flag
  },
  [SET_USER_IMAGE_URL](state,flag){
    state.userImageUrl = flag
  },
}
