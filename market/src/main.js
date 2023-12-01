import { createApp, ref } from 'vue';
import App from './App.vue';
import router from './router'; // 确保这个路径与你的文件结构相匹配
import './assets/main.css'; // 导入全局CSS
import { auth } from './firebase';
import 'firebase/auth';

// Profile bootstrap
import 'bootstrap';
import 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import store from './store'; // 引入 store


// 创建Vue实例
const app = createApp(App);

// 添加用户登录状态监听
auth.onAuthStateChanged((user) => {
    if (user) {
      const uid = user.uid;
      sendUidToBackend(uid); // 添加这个函数来处理 UID 发送
    }
  });

// 使用 Vue 3 的响应式引用
app.config.globalProperties.$user = ref(null); 

// 使用路由器
app.use(router);
app.use(store);
// 挂载到#app
app.mount('#app');

// 添加发送 UID 到后端的函数
function sendUidToBackend(uid) {
    fetch('/api/user/uid', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ uid }),
    });
  }
