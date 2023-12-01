<template>
  <div class="product-card">
    <router-link :to="'/productDetails/' + item.id">
      <img :src="item.image" :alt="item.title" class="product-image" />
      <h3>{{ item.title }}</h3>
    </router-link>

    <div class="product-details">
      <p class="info">{{ item.description }}</p>
      <div class="product-price">{{ item.price }}</div>
      <div class="product-location">{{ item.location }}</div>
      <div class="product-rating">
        <span v-for="star in 5" :key="star" class="star">
          <!-- SVGs for stars -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            class="star"
            style="color: gold"
          >
            <path
              fill="currentColor"
              d="M288 25.6l70.1 142.8 157.1 22.9c17.2 2.5 24.1 24.1 11.5 36.5l-113.7 110.8 26.8 156.1c3 17.5-15.3 31.1-31.9 23.4L288 422.4l-140.9 74.2c-16.6 7.7-34.9-5.9-31.9-23.4l26.8-156.1L47.3 227.8c-12.6-12.3-5.7-34 11.5-36.5l157.1-22.9L288 25.6z"
            ></path>
          </svg>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  item: Object,
});

import { ref, computed } from "vue";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import Item from "@/components/Item.vue";

const showChat = ref(false);
const sellerId = ref(""); // 卖家的用户ID

const items = ref([]); // 定义 items

const searchQuery = ref(""); // 搜索框的输入

const filteredItems = computed(() => {
  if (!searchQuery.value) {
    return items.value; // 如果没有输入，返回所有商品
  }

  return items.value.filter((item) => {
    const lowerCaseQuery = searchQuery.value.toLowerCase();
    return (
      item.title.toLowerCase().includes(lowerCaseQuery) ||
      item.price.toLowerCase().includes(lowerCaseQuery)
    );
  });
});

const searchItems = async () => {
  if (searchQuery.value.trim()) {
    try {
      const response = await fetch(
        `http://localhost:3001/api/getGoodBy/name/${searchQuery.value}`
      );

      if (response.ok) {
        items.value = await response.json();
        console.log(items.value);
      } else {
        // 处理错误
        console.error("无法获取商品");
      }
    } catch (error) {
      console.error("请求错误", error);
    }
  }
};

// 直接返回一个对象，而不是使用 export default
// return {
//   items,
//   searchQuery,
//   searchItems,
//   filteredItems,
// };
</script>

<style scoped>
/* .product-card {
  width: 20rem;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
} */

.product-card {
  width: 20rem;
  min-height: 50rem; /* 设置最小高度 */
  max-height: 50rem; /* 设置最大高度 */
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
}

.product-image {
  width: 100%;
  height: auto;
}

.product-details {
  padding: 8px;
  /* min-height: 70px; */
  /* max-height: 50px; */
}

.product-price {
  color: green;
}

.product-location {
  color: white;
  font-size: 0.8em;
}

.product-rating {
  display: flex;
}

.star {
  color: gold;
}

.info {
  color: white;
}
</style>
