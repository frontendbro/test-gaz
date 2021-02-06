<template>
  <div class="main-layout">
    <slot name="router"></slot>
  </div>
</template>

<script>
export default {
  name: 'MainLayout',
  components: {}
}
</script>

<style lang="scss" scoped>
.main-layout {
  min-height: 100%;
}
</style>
