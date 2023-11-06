<template>
  <div class="home">
    <Navbar />
    <header class="home-header">
      <h1>Welcome to Our Marketplace</h1>
      <p>Discover amazing products and deals!</p>
    </header>
    <!-- 其他首页内容 -->
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style scoped>
.home-header {
  text-align: center;
  padding: 50px;
  background: #f5f5f5;
}
</style>
