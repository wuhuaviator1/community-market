<template>
  <Navbar />
    <div class="marketplace">
      <div id="searchbox">
        <input id="subbox" v-model="userMessage" placeholder="What are you looking for?" @keyup="handleKeyUp">
        <button id="searchButton" @keyup="handleKeyUp">
          <svg id="searchlogo" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
          </svg>
        </button>
      </div>
      <!-- item 1 -->
      <div class="goods">
          <div v-for="item in filteredItems" :key="item.id" class="product-card">
            <router-link :to="'/productDetails/' + item.id">
              <img :src="item.image" :alt="item.title" class="product-image" />
              <h3>{{ item.title }}</h3> 
            </router-link>
            
            
            <div class="product-details">
              <!-- <h2>{{ item.title }}</h2> -->
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
              <h3>{{ item.title }}</h3> 
            </router-link>
            <!-- <button @click="startChat(item.sellerId)">Chat with Seller</button> -->
            <div class="product-details">
              <!-- <h2>{{ item.title }}</h2> -->
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
              <h3>{{ item.title }}</h3> 
            </router-link>
            <!-- <button @click="startChat(item.sellerId)">Chat with Seller</button> -->
            <div class="product-details">
              <!-- <h2>{{ item.title }}</h2> -->
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

          <!-- item4 -->
          <div v-for="item in items" :key="item.id" class="product-card">
            <router-link :to="'/productDetails/' + item.id">
              <img :src="item.image" :alt="item.title" class="product-image" />
              <h3>{{ item.title }}</h3> 
            </router-link>
            <!-- <button @click="startChat(item.sellerId)">Chat with Seller</button> -->
            <div class="product-details">
              <!-- <h2>{{ item.title }}</h2> -->
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

          <!-- item 5 -->
          <div v-for="item in items" :key="item.id" class="product-card">
            <router-link :to="'/productDetails/' + item.id">
              <img :src="item.image" :alt="item.title" class="product-image" />
              <h3>{{ item.title }}</h3> 
            </router-link>
            <!-- <button @click="startChat(item.sellerId)">Chat with Seller</button> -->
            <div class="product-details">
              <!-- <h2>{{ item.title }}</h2> -->
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

        </div>
      </div>
  <Footer />
</template>

<script setup>
  import { ref, computed } from "vue";
  import Navbar from '@/components/Navbar.vue';
  import Footer from '@/components/Footer.vue';


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

  

const searchQuery = ref(''); // 搜索框的输入

const filteredItems = computed(() => {
  if (!searchQuery.value) {
    return items.value; // 如果没有输入，返回所有商品
  }

  return items.value.filter(item => {
    const lowerCaseQuery = searchQuery.value.toLowerCase();
    return item.title.toLowerCase().includes(lowerCaseQuery) ||
           item.price.toLowerCase().includes(lowerCaseQuery);
  });
});

</script>

<style scoped>

.marketplace {
  display: flex;
  flex-direction: column;
  background-color: #000;
  gap: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
}

/* searchbox style */
/* 为输入框添加一些基本样式 */
input {
  padding: 10px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
}

#searchbox {
  align-self: center;
  display: flex;
  width: 30%;
  background-color: white;
  border: 2px solid black;
  border-radius: 2rem;
  box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.2); /* 添加浅白色光晕 */
}


#searchlogo{
  height: 2.5rem;
  width: 2.5rem;
  padding:8px;
  border-radius: 50%;
  background-color: #8fc888;
  color:black;
}

#searchButton{
  background-color:white;
  border-style: hidden;
  border-radius: 2rem;
}

#searchButton:hover #searchlogo {
  transform: scale(1.2); /* 放大图片 */
  transition: transform 0.3s ease; /* 平滑过渡效果 */
}


#subbox{
  border-style: hidden !important;
  border-radius: 20px;
}

p{
  color:white;
}

.goods{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.product-card {
  width: 20rem;
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
  color: white;
  font-size: 0.8em;
}

.product-rating {
  display: flex;
}

.star {
  color: gold;
}

.search-bar {
    align-self: center;
    width: 40%;
    padding: 8px;
    margin-top: 1rem;
    margin-bottom: 1rem;
    border: 3px solid rgb(14, 83, 37);
    border-radius: 4px;
  }
</style>
