import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Goods from "../views/Goods.vue";

// 这里定义你的路由
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  // 其他路由...
  {
    path: "/goods",
    name: "Goods",
    component: Goods,
  },
];

// 创建路由实例
const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

// 导出路由实例，以便在 main.js 中使用
export default router;
