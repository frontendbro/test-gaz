<template>
  <div class="home">
    <a-row :gutter="[16, 16]">
      <a-col :span="10">
        <div class="home-theme">
          <a-switch checked-children="светлая" un-checked-children="тёмная" @change="changeTheme" />
        </div>
        <div class="action-bar">
          <a-tooltip title="Можно вставить URL картинки">
            <a-input
              @keydown.enter="createNewPost"
              v-model="newPostTxt"
              placeholder="О чём вы думаете?"
            />
          </a-tooltip>

          <a-button @click="createNewPost" class="action-bar__btn" type="primary"
            >Поделиться</a-button
          >
        </div>
        <div class="message" v-if="messageList.length">
          <div class="message-wrap" v-for="message of messageList" :key="message.id">
            <div class="message-card">
              <a-tooltip placement="topLeft" :title="message.user.name">
                <div>
                  <a-avatar
                    class="message-card__avatar"
                    slot="avatar"
                    icon="user"
                    :src="message.user.url"
                  />
                </div>
              </a-tooltip>

              <div>
                <div class="message-card__title" v-html="message.textMessage"></div>
                <div class="message-card__date">
                  {{ $date(message.dateCreate).format('DD/MM/YYYY-HH:mm:ss') }}
                </div>
              </div>
            </div>
            <div
              class="comment"
              v-for="comment of message.comments.length > 3
                ? message.comments.slice(message.comments.length - 3, message.comments.length)
                : message.comments"
              :key="comment.id"
            >
              <div class="comment-avatar">
                <a-tooltip placement="topLeft" :title="comment.user.name">
                  <div>
                    <a-avatar slot="avatar" icon="user" :src="message.user.url" />
                  </div>
                </a-tooltip>
              </div>
              <div>{{ comment.textMessage }}</div>
            </div>
          </div>
        </div>
        <div class="message_empty" v-else>Список пуст</div>
      </a-col>
      <a-col :span="13" :offset="1">
        <div class="popular">
          <div class="popular-title">Самые часто обсуждаемые посты</div>
          <div
            class="popular-item"
            v-for="popular of popularComments.slice(0, 3)"
            :key="popular.id"
          >
            <div class="popular-item__count">{{ popular.comments.length }}</div>
            <div class="popular-item__txt" v-html="popular.textMessage"></div>
          </div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {},
  data() {
    return {
      newPostTxt: '',
      user: {
        name: 'Семён',
        url: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
      }
    }
  },
  computed: {
    ...mapState(['messageList']),
    ...mapGetters(['popularComments']),
    textWithPreview() {
      const re = /(https?|ftp):\/\/\S+[^\s.,> )\];'\"!?]/
      const subst = '<img src="$&" alt="$&" width="100" height="100" />'
      return this.newPostTxt.replace(re, subst)
    }
  },
  methods: {
    ...mapActions(['CreateNewPost']),
    ...mapMutations(['CREATE_NEW_COMMENT']),
    createNewPost() {
      const newPost = {
        user: this.user,
        id: Math.random()
          .toString(36)
          .substr(2, 9),
        textMessage: this.textWithPreview,
        dateCreate: this.$date(),
        comments: []
      }

      this.CreateNewPost(newPost)

      this.newPostTxt = ''
    },
    changeTheme(e) {
      if (e) {
        document.documentElement.setAttribute('data-theme', 'dark')
      } else {
        document.documentElement.setAttribute('data-theme', 'light')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  padding: 50px;
  &-theme {
    margin-bottom: 16px;
    &__btn {
      margin-right: 16px;
    }
  }
}
.action-bar {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  &__btn {
    margin-left: 12px;
  }
}
.popular {
  &-title {
    font-size: 24px;
    margin-bottom: 16px;
  }
  &-item {
    display: flex;
    align-items: center;
    &:not(:last-child) {
      margin-bottom: 16px;
    }
    &__count {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      border: 1px solid #536390;
      margin-right: 16px;
    }
    &__txt {
      max-width: 300px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
.message {
  &-wrap {
    margin-bottom: 16px;
  }
  &-card {
    display: flex;
    padding: 16px;
    margin-bottom: 16px;
    background-color: var(--card-color);
    overflow: hidden;
    &__avatar {
      margin-right: 8px;
    }
    &__title {
      font-size: 18px;
      margin-bottom: 4px;
    }
    &__date {
      font-size: 12px;
    }
  }
}
.comment {
  display: flex;
  align-items: center;
  padding-left: 36px;
  &-avatar {
    margin-right: 16px;
  }
  &:not(:last-child) {
    margin-bottom: 8px;
  }
}
</style>
