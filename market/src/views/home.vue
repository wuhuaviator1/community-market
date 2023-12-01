<template>
  <div class="home">
    <Navbar />
    <header class="home-header">
      <h1>Welcome to Our Community Marketplace</h1>
      <p>Discover amazing products and deals!</p>
      <!-- 添加一个输入框和显示消息的段落 -->
      <div id="searchbox">
        <input id="subbox" v-model="userMessage" placeholder="What are you looking for?" @keyup="handleKeyUp">
        <button id="searchButton" @keyup="handleKeyUp">
          <svg id="searchlogo" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
          </svg>
        </button>
      </div>
      
      
    </header>

    <section id="carousel-wrapper">
      <button @click="moveCarousel(-1)" id="previous">&larr;</button>
      <button @click="moveCarousel(1)" id="next">&rarr;</button>
        
      <p id="favorate">Our Favorate:</p>
      <section id="carousel" :class="{ loading: imgsLoaded < 5 }" :style="carouselTransform">
        <img v-for="index in 5" :key="index" :src="`https://placekitten.com/300/300?image=${index}`" @load="onImageLoad">
      </section>
    </section>

    <div class="movedownBI"></div>
    <div class="movedownBI"></div>
    <!-- <div class="movedownBI"></div>
    <div class="movedownBI"></div> -->
    <!-- <div class="movedownBI"></div>
    <div class="movedownBI"></div>
    <div class="movedownBI"></div> -->
    
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      imgsLoaded: 0,
      buttonPresses: 0
    };
  },
  methods: {
    onImageLoad() {
      this.imgsLoaded += 1;
    },
    moveCarousel(direction) {
      this.buttonPresses = Math.max(0, Math.min(this.buttonPresses + direction, 3));
    }
  },
  computed: {
    carouselTransform() {
      return {
        transform: `translateX(${this.buttonPresses * -200}px)`
      };
    }
  },
  handleKeyUp(event) {
    // 这里编写处理输入值的逻辑
    console.log("Key pressed: " + event.key);
    console.log("Current input value: " + this.userMessage);
    // 例如，你可以根据按键执行不同的操作
    // if (event.key === 'Enter') {
    //   // 当按下回车键时执行某些操作
    // }
  }
}
</script>

<style scoped>


#favorate{
  padding:1rem;
  margin-left:2rem;
  font-size: 1.6rem;
  color:#a0d09a;
}
.home-header {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 50px;
  background: black;
}

.home-header h1{
  color: white;
}

.home-header p{
  color: white;
}

.home{
  background-color: black;
  background-image: url('../assets/Logo.png'); /* 替换为你的图片路径 */
  background-size: cover; /* 背景图片覆盖整个元素 */
  background-repeat: no-repeat; /* 不重复图片 */
  background-position: center center;
  min-height: 80vh;
  
}



/* 为输入框添加一些基本样式 */
input {
  margin-top: 20px;
  padding: 10px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
}

#searchbox {
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

/* Carousel */
body * {
    margin: auto;
    text-align: center;
  }
  
  #carousel-wrapper {
  width: 80%; /* 调整为填满容器宽度 */
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
}

#carousel-wrapper button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #007bff; /* 现代化按钮颜色 */
  color: white;
  border: none;
  border-radius: 50%;
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 999;
  opacity: 0.7;
  transition: opacity 0.3s ease;
}

#carousel-wrapper button:hover {
  opacity: 1;
}

#previous {
  left: 10px;
}

.movedownBI{
  height: 10rem;
}

#next {
  right: 10px;
}

#carousel {
  display: flex;
  width: 100%;
  padding-bottom: 5rem;
  transition: transform 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
}

#carousel img {
  margin: 0 10px;
  width: 40rem;
  height: 20rem;
  object-fit: cover;
  border: 2px solid #fff; /* 添加边框 */
  box-shadow: 0 4px 8px rgba(0,0,0,0.1); /* 添加阴影 */
}

/* 响应式设计：在小屏幕上调整图片大小 */
@media (max-width: 768px) {
  #carousel img {
    width: 150px;
    height: 150px;
  }
}


</style>
