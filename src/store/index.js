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
      }, (29000 - 4000) * Math.random() + 4000)

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

// {
//   id: 1,
//     user: {
//   name: 'Иван',
//     url: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
// },
//   textMessage: 'Сообщение1',
//     dateCreate: '2021-01-01',
//   comments: [
//   {
//     id: 1,
//     user: {
//       name: 'Комментатор',
//       url: ''
//     },
//     textMessage: 'Текст комментария'
//   },
//   {
//     id: 2,
//     user: {
//       name: 'Комментатор',
//       url: ''
//     },
//     textMessage: 'Текст комментария'
//   },
//   {
//     id: 3,
//     user: {
//       name: 'Комментатор',
//       url: ''
//     },
//     textMessage: 'Текст комментария'
//   },
//   {
//     id: 4,
//     user: {
//       name: 'Комментатор',
//       url: ''
//     },
//     textMessage: 'Текст комментария'
//   }
// ]
// }
