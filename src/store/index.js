import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      user: null,   // 存储用户信息
      token: null   // 可选：存储 token
    }
  },
  mutations: {
    setUser(state, user) {
      state.user = user
      console.log("Vuex 已更新用户信息：", user)
    },
    setToken(state, token) {
      state.token = token
      console.log("Vuex 已更新 token：", token)
    }
  }
})

export default store
