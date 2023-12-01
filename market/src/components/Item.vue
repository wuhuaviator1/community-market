<template>
    <div class="product-card">
      <router-link :to="'/productDetails/' + item.id">
        <img :src="item.image" :alt="item.title" class="product-image" />
        <h3>{{ item.title }}</h3>
      </router-link>
  
      <div class="product-details">
        <p>{{ item.description }}</p>
        <div class="product-price">{{ item.price }}</div>
        <div class="product-location">{{ item.location }}</div>
        <div class="product-rating">
          <span v-for="star in 5" :key="star" class="star">
            <!-- SVGs for stars -->
          </span>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    item: Object,
  });
  </script>
  

<style scoped>

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


</style>