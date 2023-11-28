<template>
  <Navbar />
    <div class="marketplace">
      <!-- item 1 -->
      <!-- <div class="search-results"> -->
        <div v-for="item in items" :key="item.id" class="product-card">
          <router-link :to="'/productDetails/' + item.id">
            <img :src="item.image" :alt="item.title" class="product-image" />
            <h2>{{ item.title }}</h2>
          </router-link>
          <button @click="openChat">Chat with Seller</button>
          <chat-window v-if="showChat" :sellerId="sellerId"></chat-window>
          <div class="product-details">
            <h2>{{ item.title }}</h2>
            <p>{{ item.description }}</p>
            <div class="product-price">{{ item.price }}</div>
            <div class="product-location">{{ item.location }}</div>
            <div class="product-rating">
              <span v-for="star in 5" :key="star" class="star">
                <svg
                  v-if="star <= item.rating"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <!-- SVG for filled star -->
                </svg>
                <svg
                  v-else
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <!-- SVG for empty star -->
                </svg>
              </span>
            </div>
          </div>
        </div>

        <!-- item 2 -->
        <div v-for="item in items" :key="item.id" class="product-card">
          <router-link :to="'/productDetails/' + item.id">
            <img :src="item.image" :alt="item.title" class="product-image" />
            <h2>{{ item.title }}</h2>
          </router-link>
          <button @click="startChat(item.sellerId)">Chat with Seller</button>
          <div class="product-details">
            <h2>{{ item.title }}</h2>
            <p>{{ item.description }}</p>
            <div class="product-price">{{ item.price }}</div>
            <div class="product-location">{{ item.location }}</div>
            <div class="product-rating">
              <span v-for="star in 5" :key="star" class="star">
                <svg
                  v-if="star <= item.rating"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <!-- SVG for filled star -->
                </svg>
                <svg
                  v-else
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <!-- SVG for empty star -->
                </svg>
              </span>
            </div>
          </div>
        </div>

        <!-- item 3 -->
        <div v-for="item in items" :key="item.id" class="product-card">
          <router-link :to="'/productDetails/' + item.id">
            <img :src="item.image" :alt="item.title" class="product-image" />
            <h2>{{ item.title }}</h2>
          </router-link>
          <button @click="startChat(item.sellerId)">Chat with Seller</button>
          <div class="product-details">
            <h2>{{ item.title }}</h2>
            <p>{{ item.description }}</p>
            <div class="product-price">{{ item.price }}</div>
            <div class="product-location">{{ item.location }}</div>
            <div class="product-rating">
              <span v-for="star in 5" :key="star" class="star">
                <svg
                  v-if="star <= item.rating"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <!-- SVG for filled star -->
                </svg>
                <svg
                  v-else
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <!-- SVG for empty star -->
                </svg>
              </span>
            </div>
          </div>
        </div>
      <!-- </div> -->
    </div>
  <Footer />
</template>

<script setup>
  import { ref } from "vue";
  import Navbar from '@/components/Navbar.vue';
  import Footer from '@/components/Footer.vue';
  import ChatWindow from '@/components/ChatWindow.vue';

  const showChat = ref(false);
  const sellerId = ref(''); // 卖家的用户ID

  const items = ref([
    {
      id : "1",
      title: "Lamborghini EV Car for Kids",
      description: "Remote Control, Black",
      price: "$15 / month",
      location: "San Bruno, CA",
      rating: 5,
      image: "/Lamborghini EV Car for Kids.webp",
      sellerId: "seller-user-id-1"
    },
  ]);

  const openChat = () => {
    showChat.value = true;
  };

  const startChat = (sellerIdValue) => {
  sellerId.value = sellerIdValue; // 设置卖家的用户ID
  showChat.value = true; // 显示聊天窗口
};
</script>

<style scoped>
.marketplace {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.product-card {
  width: 200px;
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
}

.product-price {
  color: green;
}

.product-location {
  color: #777;
  font-size: 0.8em;
}

.product-rating {
  display: flex;
}

.star {
  color: gold;
}
</style>
