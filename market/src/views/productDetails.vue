<template>
    <Navbar />
        <!-- <div class="product-details-page">
        <h1>{{ productDetails.title }}</h1>
        <div class="carousel-container">
            <vue-carousel :items="productImages">
            <img v-for="image in productImages" :src="image" :key="image" :alt="productDetails.title">
            </vue-carousel>
        </div>
        <p>{{ productDetails.description }}</p>
        <div class="price">Price: {{ productDetails.price }}</div>
        
        </div> -->
    <Footer />
  </template>
  
  <script>
    import Navbar from '@/components/Navbar.vue';
    import Footer from '@/components/Footer.vue';
    export default {
        name: "ProductDetails",
        data() {
        return {
            productDetails: {},
            productImages: [], // 假设每个产品有多张图片
        };
        },
        created() {
        const productId = this.$route.params.productId;
        // 根据 productId 加载商品详细信息和图片
        // 假设有一个函数 fetchProductDetails 来获取数据
        this.productDetails = fetchProductDetails(productId);
        this.productImages = this.productDetails.images;
        },
    };
  </script>
  
  <style scoped>
  .product-details-page {
    /* 样式 */
  }
  
  .carousel-container img {
    width: 100%;
    height: auto;
  }
  </style>
  