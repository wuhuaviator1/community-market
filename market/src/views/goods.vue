<template>
  <Navbar />
  <div class="marketplace">
    <div id="searchbox">
      <!-- <input
        id="subbox"
        v-model="userMessage"
        placeholder="What are you looking for?"
        @keyup="handleKeyUp"
      /> -->
      <input
        id="subbox"
        v-model="searchQuery"
        placeholder="What are you looking for?"
        @keyup.enter="searchItems"
      />
      <button id="searchButton" @keyup="handleKeyUp" @click="searchItems">
        <svg
          id="searchlogo"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-search"
          viewBox="0 0 16 16"
        >
          <path
            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"
          />
        </svg>
      </button>
    </div>

    <!-- Items -->
    <div class="goods">
      <Item v-for="item in filteredItems" :key="item.id" :item="item" />
    </div>
  </div>

  <Footer />
</template>

<!-- <script setup>
import { ref, computed } from "vue";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import Item from "@/components/Item.vue";

const showChat = ref(false);
const sellerId = ref(""); // 卖家的用户ID

// const items = ref([
//   {
//     id: "1",
//     title: "Lamborghini EV Car for Kids",
//     description: "Remote Control, Black",
//     price: "$50",
//     location: "San Bruno, CA",
//     rating: 5,
//     image: "/Lamborghini EV Car for Kids.webp",
//     sellerId: "seller-user-id-1",
//   },
//   {
//     id: "2",
//     title: "cat",
//     description: "cute cat",
//     price: "$100",
//     location: "San Francisco, CA",
//     rating: 4,
//     image: "/cat.jpg",
//     sellerId: "seller-user-id-2",
//   },
//   {
//     id: "3",
//     title: "desk",
//     description: "a wooden desk",
//     price: "$200",
//     location: "San Francisco, CA",
//     rating: 3,
//     image: "/desk.jpg",
//     sellerId: "seller-user-id-3",
//   },
// ]);

export default {
  setup() {
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

    return {
      items,
      searchQuery,
      searchItems,
      filteredItems,
    };
  },
};
</script> -->

<script setup>
import { ref, computed } from "vue";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import Item from "@/components/Item.vue";

const showChat = ref(false);
const sellerId = ref(""); // 卖家的用户ID

// const items = ref([]); // 定义 items

const searchQuery = ref(""); // 搜索框的输入

const items = ref([
  {
    id: "1",
    title: "Lamborghini EV Car for Kids",
    description: "Remote Control, Black",
    price: "$50",
    location: "San Bruno, CA",
    rating: 5,
    image: "/Lamborghini EV Car for Kids.webp",
    sellerId: "seller-user-id-1",
  },
  {
    id: "2",
    title: "FJALLRAVEN - FOLDSACK NO. 1 BACKPACK, FITS 15 LAPTOPS",
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    price: "$59.95",
    location: "San Francisco, CA",
    rating: 4,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    sellerId: "seller-user-id-2",
  },
  {
    id: "3",
    title: "desk",
    description: "a wooden desk",
    price: "$200",
    location: "San Francisco, CA",
    rating: 3,
    image: "/desk.jpg",
    sellerId: "seller-user-id-3",
  },
  {
    id: "4",
    title: "Elegant Watch",
    description:
      "A sophisticated and elegant wristwatch perfect for formal occasions.",
    price: "$150",
    location: "San Francisco, CA",
    rating: 3,
    image:
      "https://ae01.alicdn.com/kf/HTB1dBC5LpXXXXb3XXXXq6xXFXXXD/Fashion-New-Lady-Watches-Women-Elegant-Quartz-Watch-Crystal-Rhinestone-Golden-Color-Wristwatch-Metal-Mesh-Band.jpg  ",
    sellerId: "seller-user-id-4",
  },
  {
    id: "5",
    title: "Running Sneakers",
    description:
      "Comfortable and durable running sneakers for everyday athletes.",
    price: "$100",
    location: "San Francisco, CA",
    rating: 3,
    image:
      "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1545163738-1544814212-765dfd69-66c6-4362-b548-815b9bbfe43e-1545163708.jpg?crop=1xw:1xh;center,top",
    sellerId: "seller-user-id-5",
  },
  {
    id: 6,
    title: "Solid Gold Petite Micropave ",

    description:
      "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    price: "$168",
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    sellerId: "seller-user-id-6",
  },
  // {
  //   id: 7,
  //   title: "White Gold Plated Princess",

  //   description:
  //     "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
  //   price: "$99.99",
  //   image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
  //   sellerId: "seller-user-id-7",
  // },
  // {
  //   id: 8,
  //   title: "Pierced Owl Rose Gold Plated Stainless Steel Double",

  //   description:
  //     "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
  //   price: 10.99,
  //   image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
  //   sellerId: "seller-user-id-8",
  // },
]);

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
.marketplace {
  min-height: 80vh;
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

#searchlogo {
  height: 2.5rem;
  width: 2.5rem;
  padding: 8px;
  border-radius: 50%;
  background-color: #8fc888;
  color: black;
}

#searchButton {
  background-color: white;
  border-style: hidden;
  border-radius: 2rem;
}

#searchButton:hover #searchlogo {
  transform: scale(1.2); /* 放大图片 */
  transition: transform 0.3s ease; /* 平滑过渡效果 */
}

#subbox {
  border-style: hidden !important;
  border-radius: 20px;
}

p {
  color: white;
}

.goods {
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
