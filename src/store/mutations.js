import {SET_FULL_SCREEN,SET_USER_PHONE,SET_USER_ID} from './mutations-type'
export default {
  [SET_FULL_SCREEN](state,flag){
    state.isFullScreen = flag
  },
  [SET_USER_PHONE](state,flag){
    state.userPhone = flag
  },
  [SET_USER_ID](state,flag){
    state.userId = flag
  }
}
