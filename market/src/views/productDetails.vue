<template>
    <Navbar />
    <div class="wrap">
      <div class="container">
          <div class="container-fliud">
            <div class="wrapper row">
              <div class="preview col-md-6">
                
                <div class="preview-pic tab-content movedown">
                  <div class="tab-pane active bag" id="pic-1">
                    <img :src="imageUrl" alt="Product Image" />
                  </div>
                  <!-- ...其他图片... -->
                </div>
                
              </div>

              <div class="details col-md-6">
                <h3 class="product-title">{{ product?.title }}</h3>
                <p class="product-description">{{ product?.description }}</p>
                <section id="priceCheckOut">
                  <h4 class="price">current price ($): <span>{{ product?.price - 50 }}</span></h4>
                  <button class="add-to-cart btn btn-default" @click="addToCart">add to cart</button>
                </section>
                <!-- ...其他详情... -->
              </div>
            </div>
          </div>
        
      </div>

    </div>
    <Footer />
  </template>
  
  <script>
  import Navbar from '@/components/Navbar.vue';
  import Footer from '@/components/Footer.vue';

  export default {
    name: "ProductDetails",
    components: {
      Navbar,
      Footer
    },
    data() {
      return {
        product: null, // 用于存储从 API 获取的商品信息
        imageUrl: null, // 新增的图片 URL
        userMessage: "",
      };
    },
    methods: {
      fetchProductData() {
        fetch('https://fakestoreapi.com/products/1')
          .then((response) => response.json())
          .then((data) => {
            this.product = data;
            this.imageUrl = data.image; // 更新图片 URL
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      },
    },
    created() {
      this.fetchProductData();
    },
    addToCart() {
      console.log("Adding to cart:", this.product, this.imageUrl);
      if (this.product && this.imageUrl) {
        this.$store.dispatch('addToCart', {
          id: this.product.id,
          title: this.product.title,
          image: this.imageUrl,
          price: this.product.price - 50,
          quantity: 1
        });
      } else {
        console.error("Product data is not loaded yet.");
      }
    }
};
</script>
  
<style scoped>
  body {
    font-family: 'open sans';
    overflow-x: hidden;
  }

img {
  max-width: 100%; 
}

.container{
  
  background-color: black;
}

h3, h4, h5, p{
  color: white;
}

#priceCheckOut{
  display: flex;
  align-items: center;
  gap:2rem;

}

#priceCheckOut button{
  width: 7rem;
  height: 5rem;
}

.tab-content img {
  max-width: 19rem; /* 设置最大宽度 */
  height: auto; /* 保持图片比例 */
  /* ...其他样式... */
}

.product-description{
  color:antiquewhite;
}

.wrap{
  background-color: black;
}

.movedown{
  padding-top: 2rem;
}

.review-no{
  color:white;
}


.preview {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
      -ms-flex-direction: column;
          flex-direction: column; }
  @media screen and (max-width: 996px) {
    .preview {
      margin-bottom: 20px; } }

.preview-pic {
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
      -ms-flex-positive: 1;
          flex-grow: 1; }

.preview-thumbnail.nav-tabs {
  border: none;
  margin-top: 15px; }
  .preview-thumbnail.nav-tabs li {
    width: 18%;
    margin-right: 2.5%; }
    .preview-thumbnail.nav-tabs li img {
      max-width: 100%;
      display: block; }
    .preview-thumbnail.nav-tabs li a {
      padding: 0;
      margin: 0; }
    .preview-thumbnail.nav-tabs li:last-of-type {
      margin-right: 0; }

.tab-content {
  overflow: hidden; }
  .tab-content img {
    width: 100%;
    -webkit-animation-name: opacity;
            animation-name: opacity;
    -webkit-animation-duration: .3s;
            animation-duration: .3s; }

.card {
  margin-top: 50px;
  background: #eee;
  padding: 3em;
  line-height: 1.5em; }

@media screen and (min-width: 997px) {
  .wrapper {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex; } }

.details {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
      -ms-flex-direction: column;
          flex-direction: column; }

.colors {
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
      -ms-flex-positive: 1;
          flex-grow: 1; }

.product-title, .price, .sizes, .colors {
  text-transform: UPPERCASE;
  font-weight: bold; }

.checked, .price span {
  color: #ff9f1a; }

.product-title, .rating, .product-description, .price, .vote, .sizes {
  margin-bottom: 15px; }

.product-title {
  margin-top: 0; 
  color:#d88819;
}

.size {
  margin-right: 10px; }
  .size:first-of-type {
    margin-left: 40px; }

.color {
  display: inline-block;
  vertical-align: middle;
  margin-right: 10px;
  height: 2em;
  width: 2em;
  border-radius: 2px; }
  .color:first-of-type {
    margin-left: 20px; }

.add-to-cart, .like {
  background: #ff9f1a;
  padding: 1.2em 1.5em;
  border: none;
  text-transform: UPPERCASE;
  font-weight: bold;
  color: #fff;
  -webkit-transition: background .3s ease;
          transition: background .3s ease; }
  .add-to-cart:hover, .like:hover {
    background: #b36800;
    color: #fff; }

.not-available {
  text-align: center;
  line-height: 2em; }
  .not-available:before {
    font-family: fontawesome;
    content: "\f00d";
    color: #fff; }

.orange {
  background: #ff9f1a; }

.green {
  background: #85ad00; }

.blue {
  background: #0076ad; }

.tooltip-inner {
  padding: 1.3em; }

@-webkit-keyframes opacity {
  0% {
    opacity: 0;
    -webkit-transform: scale(3);
            transform: scale(3); }
  100% {
    opacity: 1;
    -webkit-transform: scale(1);
            transform: scale(1); } }

@keyframes opacity {
  0% {
    opacity: 0;
    -webkit-transform: scale(3);
            transform: scale(3); }
  100% {
    opacity: 1;
    -webkit-transform: scale(1);
            transform: scale(1); } }

/*# sourceMappingURL=style.css.map */
</style>
  