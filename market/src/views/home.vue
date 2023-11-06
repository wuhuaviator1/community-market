<template>
  <div class="home">
    <Navbar />
    <header class="home-header">
      <h1>Welcome to Our Community Marketplace</h1>
      <p>Discover amazing products and deals!</p>
      <!-- 添加一个输入框和显示消息的段落 -->
      <input v-model="userMessage" placeholder="What are you looking for?">
      <p>You are searching for: {{ userMessage }}</p>
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
  },
  data() {
    return {
      // 添加一个新的数据属性
      userMessage: ''
    }
  }
}
</script>

<style scoped>
.home-header {
  text-align: center;
  padding: 50px;
  background: #f5f5f5;
}

/* 为输入框添加一些基本样式 */
input {
  margin-top: 20px;
  padding: 10px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
}
</style>
