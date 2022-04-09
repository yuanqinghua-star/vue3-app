import { createStore } from 'vuex'


interface LogUserInfo {
  token: string,
  username: string,
  email: string
}


export default createStore({
  state: {
    userInfo: {}
  },
  getters: {
    userInfo: state => state.userInfo
  },
  mutations: {
    "SET_USERINFO": (state, userInfo) => {
      state.userInfo = userInfo
    }
  },
  actions: {
    login(context, userInfo:LogUserInfo ) {
      context.commit("SET_USERINFO", userInfo)
    }
  },
  modules: {
  }
})
