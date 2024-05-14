<script>
import Header from './components/Header/Header.vue'
import Footer from './components/Footer/Footer.vue'
import Loader from './components/Loader/Loader.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    HeaderComponent: Header,
    FooterComponent: Footer,
    Loader
  },
  computed: {
    ...mapGetters(['isLoading'])
  }
}
</script>

<template>
  <div class="wrapper">
    <Loader v-if="isLoading" />
    <HeaderComponent />
    <main class="main-container">
      <RouterView />
    </main>
    <FooterComponent />
  </div>
</template>

<style scoped>
.wrapper {
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-container {
  flex: 1 0 auto;
}
</style>
