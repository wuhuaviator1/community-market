<template>
  <Navbar />
  <div id="wrap">
      <div class="container">
        <div class="row">
            <div class="col-sm-12 col-md-10 col-md-offset-1">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th><p class="remove">Product</p></th>
                            <th></th>
                            <th class="text-center"></th>
                            <th class="text-center"><p class="remove">Total</p></th>
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="col-sm-8 col-md-6">
                            <div class="media">
                                <a class="thumbnail pull-left" href="#"> <img class="media-object remove" src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" style="width: 7rem; height: 9rem;"> </a>
                                <div class="media-body">
                                    <h6 class="media-heading"><a href="#" class="remove">FJALLRAVEN - FOLDSACK NO. 1 BACKPACK, FITS 15 LAPTOPS</a></h6>
                                </div>
                            </div></td>
                            <td class="col-sm-1 col-md-1" style="text-align: center">
                            
                            </td>
                            
                            <td class="col-sm-1 col-md-1 text-center"><strong class="remove">$59.95</strong></td>
                            <td class="col-sm-1 col-md-1">
                              <button type="button" class="btn btn-danger remove" @click="removeFromCart()">
                                <span class="glyphicon glyphicon-remove"></span> Remove
                              </button>
                          </td>
                          <td></td>
                          
                          
                        </tr>
                        
                        <tr>
                            <td>   </td>
                            <td>   </td>
                            <td>   </td>
                            <td><h5 class="remove">Subtotal</h5></td>
                            <td class="text-right"><h5 class="remove"><strong >$59.95</strong></h5></td>
                        </tr>
                        <tr>
                            <td>   </td>
                            <td>   </td>
                            <td>   </td>
                            <td><h5 class="remove">Tax</h5></td>
                            <td class="text-right"><h5 class="remove"><strong>$1.05</strong></h5></td>
                        </tr>
                        <tr>
                            <td>   </td>
                            <td>   </td>
                            <td>   </td>
                            <td><h3 class="remove">Total</h3></td>
                            <td class="text-right"><h3 class="remove"><strong>$61</strong></h3></td>
                        </tr>
                        <tr>
                            <td>   </td>
                            <td>   </td>
                            <td>   </td>
                            <td>
                            </td>
                            <td>
                            <button type="button" class="btn btn-success remove">
                              <router-link :to="'/checkout' " class="checkout-button">
                                Check Out
                              </router-link>
                            </button>
                          </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
      </div>
    </div>
  <Footer />
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Cart",
  components: {
    Navbar,
    Footer
  },
    data() {
    return {
      showRemovedItems: true
    };
  },

  // computed: {
  //   cartItems() {
  //     console.log("Cart items:", this.$store.getters.cartItems);
  //     return this.$store.getters.cartItems;
  //   }
  // },
  methods: {
    removeFromCart() {
    // 获取所有带有 "remove" 类的元素并隐藏它们
    let elementsToRemove = document.querySelectorAll('.remove');
    elementsToRemove.forEach(element => {
      element.style.display = 'none';
    });
  },
    CheckOut(){

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

.container{
  background-color: black;
}



#wrap{
  background-color: black;
  height: 65rem;
}

.cart-container h1 {
  text-align: center;
}

h3, h5, th, td{
  color: white;
  background-color: black !important;
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

.media a{
  padding-right: 1rem;
}

.checkout-button{
  color:white;
  text-decoration: none;
}
</style>
