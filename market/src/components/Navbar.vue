<template>
  <nav class="navbar">
    <div>Marketplace</div>
    <div>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <!-- 只有在用户登录后才显示用户头像 -->
        <li v-if="$root.$user && $root.$user.value">
          <img :src="$root.$user.value.photoURL || require() " alt="User Avatar" class="user-avatar">
        </li>
        <li v-else>
          <a href="#" @click.prevent="loginWithGoogle">Login</a>
        </li>
        <!-- 更多链接 -->
      </ul>
    </div>
  </nav>
</template>

<script>
import { auth, GoogleAuthProvider } from '../firebase'; // 调整路径以匹配你的文件结构
import { signInWithPopup } from 'firebase/auth';

export default {
  name: 'Navbar',
  methods: {
    loginWithGoogle() {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
        .then((result) => {
          this.$root.$user.value = result.user; // 更新用户信息
        })
        .catch((error) => {
          console.error('Login failed:', error);
        });
    }
  }
}
</script>

<style scoped>
.navbar {
  background-color: #333;
  color: white;
  padding-top: 1rem;
  padding-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar ul {
  list-style: none;
  display: flex;
  margin:0;
  /* float: right; */
}

.navbar li {
  padding-right: 1rem;
}

.navbar a {
  color: white;
  text-decoration: none;
}

.user-avatar {
  width: 2rem; /* 调整为所需大小 */
  height: 2rem;
  border-radius: 50%; /* 圆形头像 */
}
</style>
