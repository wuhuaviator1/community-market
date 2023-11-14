import { createApp, ref } from 'vue';
import App from './App.vue';
import router from './router'; // 确保这个路径与你的文件结构相匹配
import './assets/main.css'; // 导入全局CSS

// Profile bootstrap
import 'bootstrap';
import 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';


// 创建Vue实例
const app = createApp(App);

// 使用 Vue 3 的响应式引用
app.config.globalProperties.$user = ref(null); 

// 使用路由器
app.use(router);

// 挂载到#app
app.mount('#app');
