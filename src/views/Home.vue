<template>
  <div class="home">
    <a-row :gutter="[16, 16]">
      <a-col :span="10">
        <div class="home-theme">
          <a-button class="home-theme__btn">Светлая тема</a-button>
          <a-button>Тёмная тема</a-button>
        </div>
        <div class="action-bar">
          <a-input placeholder="О чём вы думаете" />
          <a-button class="action-bar__btn" type="primary">Поделиться</a-button>
        </div>
        <div class="message">
          <div v-for="message of messageList" :key="message.id">
            <a-card class="message-card">
              <a-card-meta :title="message.user.name" :description="message.textMessage">
                <a-avatar slot="avatar" icon="user" :src="message.user.url" />
              </a-card-meta>
            </a-card>
          </div>
        </div>
      </a-col>
      <a-col :span="13" :offset="1">
        <div class="popular">
          <div class="popular-title">Самые часто обсуждаемые посты</div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {},
  computed: {
    ...mapState(['messageList'])
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
  }
}
.message {
  &-card {
    display: flex;
    margin-bottom: 16px;
  }
}
</style>
