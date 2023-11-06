<!-- <template>
  <div class="product-display">
    <h1>{{ product.name }}</h1>
    <p>{{ product.description }}</p>
    <p class="price">Price: {{ product.price }}</p>
    <button @click="addToCart">Add to shopping cart</button>
  </div>
</template>

<script>
export default {
  name: "ProductDisplay",
  data() {
    return {
      product: {
        id: "1",
        name: "Used bike",
        description: "This is a well maintained used bike.",
        price: "$50.00",
      },
    };
  },
  methods: {
    addToCart() {
      alert("Add to cart");
    },
  },
};
</script>

<style scoped>
.product-display {
  text-align: center;
  margin-top: 50px;
}

.price {
  color: green;
  font-weight: bold;
}
</style> -->

<template>
  <div class="marketplace">
    <div class="search-results">
      <div v-for="item in items" :key="item.id" class="product-card">
        <img :src="item.image" :alt="item.title" class="product-image" />
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
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
  {
    id: 1,
    title: "Lamborghini EV Car for Kids",
    description: "Remote Control, Black",
    price: "$15 / month",
    location: "San Bruno, CA",
    rating: 5,
    image: "path-to-lamborghini-image.jpg",
  },
]);
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
