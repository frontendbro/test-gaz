import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    messageList: []
  },
  getters: {
    popularComments: ({ messageList }) => {
      return messageList.slice(0).sort((a, b) => b.comments.length - a.comments.length)
    }
  },
  actions: {
    CreateNewPost: ({ commit }, payload) => {
      commit('CREATE_NEW_POST', payload)

      let count = 0
      let timer = setInterval(() => {
        count++
        commit('CREATE_NEW_COMMENT', {
          id: payload.id,
          comment: {
            id: count,
            user: {
              name: 'Комментатор',
              url: ''
            },
            textMessage: `Текст комментария ${count}`
          }
        })
      }, 25000 * Math.random() + 5000)

      if (count === 3) {
        clearInterval(timer)
      }
    }
  },
  mutations: {
    CREATE_NEW_POST: (state, payload) => {
      state.messageList.push(payload)
    },
    CREATE_NEW_COMMENT: (state, obj) => {
      state.messageList.forEach(message => {
        if (message.id === obj.id) {
          message.comments.push(obj.comment)
        }
      })
    }
  },
  modules: {}
})
