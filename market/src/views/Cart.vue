<template>
  <div class="cart-container">
    <h1>购物车</h1>
    <div v-if="cartItems.length > 0">
      <ul>
        <li v-for="item in cartItems" :key="item.id">
          {{ item.name }} - 数量：{{ item.quantity }} - 单价：{{ item.price }}元
          <button @click="removeFromCart(item.id)">移除</button>
        </li>
      </ul>
      <div class="total">
        总计：{{ totalPrice }}元
      </div>
    </div>
    <div v-else>
      <p>您的购物车是空的。</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  data() {
    return {
      cartItems: [
        { id: 1, name: '商品A', quantity: 2, price: 100 },
        { id: 2, name: '商品B', quantity: 1, price: 200 }
      ]
    }
  },
  computed: {
    totalPrice() {
      return this.cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
    }
  },
  methods: {
    removeFromCart(id) {
      this.cartItems = this.cartItems.filter(item => item.id !== id);
    }
  }
};
</script>

<style scoped>
.cart-container {
  /* 添加一些基本样式 */
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.cart-container h1 {
  text-align: center;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

.total {
  margin-top: 20px;
  font-weight: bold;
  text-align: right;
}
</style>
