import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import UserProfile from '../views/UserProfile.vue';

// 这里定义你的路由
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/user-profile',
        name: 'UserProfile',
        component: UserProfile // 添加用户资料页面路由
    },
    // 其他路由...
];

// 创建路由实例
const router = createRouter({
    history: createWebHistory('/'),
    routes
});


// 导出路由实例，以便在 main.js 中使用
export default router;
