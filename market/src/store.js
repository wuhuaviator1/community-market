import { createStore } from 'vuex';

export default createStore({
  state: {
    cart: []
  },
  mutations: {
    ADD_TO_CART(state, product) {
      console.log("Mutating to add to cart:", product);
      let found = state.cart.find(item => item.id === product.id);
      if (found) {
        found.quantity++;
      } else {
        state.cart.push(product);
      }
      console.log("Cart after adding:", state.cart);
    },
    REMOVE_FROM_CART(state, productId) {
      let index = state.cart.findIndex(item => item.id === productId);
      if (index > -1) {
        state.cart.splice(index, 1);
      }
    }
  },
  actions: {
    addToCart({ commit }, product) {
      commit('ADD_TO_CART', product);
    },
    removeFromCart({ commit }, productId) {
      commit('REMOVE_FROM_CART', productId);
    }
  },
  getters: {
    cartItems: state => state.cart
  }
});
