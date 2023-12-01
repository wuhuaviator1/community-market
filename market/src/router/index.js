import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home.vue";
import UserProfile from "../views/UserProfile.vue";
import Goods from "../views/goods.vue";
import productDetails from "../views/productDetails.vue";
import Sellitem from "../views/Sellitem.vue";
import Logistics from "../views/Logistics.vue"; // 引入 Logistics 视图
import Cart from "../views/Cart.vue"; // 引入 Cart 视图
import UserInformation from "../views/UserInformation.vue";
import CheckOut from "../views/CheckOut.vue";

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
    path: "/sell-items",
    name: "Sell",
    component: Sellitem,
  },
  {
    path: "/productDetails/:productId",
    name: "productDetails",
    component: productDetails,
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
  {
    path: "/user-information",
    name: "UserInformation",
    component: UserInformation,
  },
  {
    path: "/checkout", // 购物车视图的路径
    name: "CheckOut",
    component: CheckOut, // 购物车视图的组件
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
