<template>
  <b-container>
    <div v-if="!userSignedIn">ログインしてください</div>
  </b-container>
</template>

<script lang="ts">
import { authStore } from '@/store'
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
class Index extends Vue {
  get userSignedIn() {
    return authStore.userSignedIn
  }
}
export default Index
</script>

<style lang="sass">
.title
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif
  display: block
  font-weight: 300
  font-size: 100px
  color: #35495e
  letter-spacing: 1px
</style>
