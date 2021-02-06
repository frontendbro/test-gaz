import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    messageList: [
      {
        id: 1,
        user: {
          name: 'Иван',
          url: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
        },
        textMessage: 'Текст сообщения',
        dateCreate: '06-02-2021',
        comments: [
          {
            user: {
              name: 'Комментатор',
              url: ''
            },
            textMessage: 'Текст комментария'
          },
          {
            user: {
              name: 'Комментатор',
              url: ''
            },
            textMessage: 'Текст комментария'
          },
          {
            user: {
              name: 'Комментатор',
              url: ''
            },
            textMessage: 'Текст комментария'
          },
          {
            user: {
              name: 'Комментатор',
              url: ''
            },
            textMessage: 'Текст комментария'
          }
        ]
      },
      {
        id: 2,
        user: {
          name: 'Пётр',
          url: ''
        },
        textMessage: 'Текст сообщения',
        dateCreate: '07-02-2021',
        comments: [
          {
            user: {
              name: 'Комментатор',
              url: ''
            },
            textMessage: 'Текст комментария'
          },
          {
            user: {
              name: 'Комментатор',
              url: ''
            },
            textMessage: 'Текст комментария'
          },
          {
            user: {
              name: 'Комментатор',
              url: ''
            },
            textMessage: 'Текст комментария'
          },
          {
            user: {
              name: 'Комментатор',
              url: ''
            },
            textMessage: 'Текст комментария'
          }
        ]
      },
      {
        id: 3,
        user: {
          name: 'Семён',
          url: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
        },
        textMessage: 'Текст сообщения',
        dateCreate: '08-02-2021',
        comments: [
          {
            user: {
              name: 'Комментатор',
              url: ''
            },
            textMessage: 'Текст комментария'
          },
          {
            user: {
              name: 'Комментатор',
              url: ''
            },
            textMessage: 'Текст комментария'
          },
          {
            user: {
              name: 'Комментатор',
              url: ''
            },
            textMessage: 'Текст комментария'
          },
          {
            user: {
              name: 'Комментатор',
              url: ''
            },
            textMessage: 'Текст комментария'
          }
        ]
      }
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
})
