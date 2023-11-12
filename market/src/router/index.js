import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import UserProfile from "../views/UserProfile.vue";
import Goods from "../views/Goods.vue";
import Logistics from "../views/Logistics.vue"; // 引入 Logistics 视图
import Cart from "../views/Cart.vue"; // 引入 Cart 视图

// 这里定义你的路由
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/user-profile",
    name: "UserProfile",
    component: UserProfile, // 用户资料页面路由
  },
  {
    path: "/goods",
    name: "Goods",
    component: Goods,
  },
  {
    path: "/logistics", // Logistics 视图的路径
    name: "Logistics",
    component: Logistics, // Logistics 视图的组件
  },
  {
    path: "/cart", // 购物车视图的路径
    name: "Cart",
    component: Cart, // 购物车视图的组件
  },
  // 其他路由...
];

// 创建路由实例
const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

// 导出路由实例，以便在 main.js 中使用
export default router;
