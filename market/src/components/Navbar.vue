<template>
  <nav class="navbar">
    <div>
      <img class="logo1" src="../assets/Logo.png" alt="logo" />
      <img class="logo2" src="../assets/Name.png" alt="name" />
    </div>

    <div>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/user-profile">Profile</router-link></li>
        <li>
          <router-link to="/user-information">User-Information</router-link>
        </li>
        <li><router-link to="/goods">Goods</router-link></li>
        <li><router-link to="/sell-items">Sell your items</router-link></li>
        <li><router-link to="/cart"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
          </svg></router-link>
        </li>
        <!-- 只有在用户登录后才显示用户头像 -->
        <li v-if="$root.$user && $root.$user.value">
          <img
            :src="$root.$user.value.photoURL || require()"
            alt="User Avatar"
            class="user-avatar"
          />
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
import { auth, GoogleAuthProvider } from "../firebase"; // 调整路径以匹配你的文件结构
import { signInWithPopup } from "firebase/auth";

export default {
  name: "Navbar",
  methods: {
    loginWithGoogle() {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
        .then((result) => {
          this.$root.$user.value = result.user; // 更新用户信息
        })
        .catch((error) => {
          console.error("Login failed:", error);
        });
    },
  },
};
</script>

<style scoped>
.navbar {
  background-color: black;
  color: white;
  padding-top: 0;
  padding-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo1 {
  padding: 0.5rem;
  border-radius: 50%;
  height: 5rem;
  width: 5rem;
}

.logo2 {
  height: 4rem;
  width: 5rem;
}

.navbar ul {
  list-style: none;
  display: flex;
  margin: 0;
  /* float: right; */
}

.navbar li {
  padding-left: 1rem;
  padding-right: 1rem;
  transition: font-size 0.5s ease-in-out, box-shadow 0.5s ease-in-out; /* 延长并调整过渡效果 */
  border-radius: 10px;
}

.navbar li:hover {
  font-size: 1.1em; /* 轻微放大字体 */
  box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.5); /* 添加白色阴影 */
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
