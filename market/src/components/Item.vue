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
