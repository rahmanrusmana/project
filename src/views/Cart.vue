<template>
    <div class="bg-gray-100 h-screen py-8">
    <div class="container mx-auto px-4">
        <h1 class="text-2xl font-semibold mb-4">Shopping Cart</h1>
        <div class="flex flex-col md:flex-row gap-4">
            <div class="md:w-3/4" >
                <div class="bg-white rounded-lg shadow-md p-6 mb-4">
                    <div class="flex justify-between ">
        </div>
        <div class="flex mt-5 mb-5" >
          <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/6">Product Details</h3>
          <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/6 text-center">Price</h3>
          <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/6 text-center">Quantity</h3>
          <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/6 text-center">Total</h3>
          <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/6 text-center"></h3>
        </div>
        <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5"  v-for="cart in getCart" :key="cart.cart_id">
          <div class="flex w-2/5" > <!-- product -->
            <div class="w-20">
              <img class="h-24" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fb9c1fae-d0e0-4ca2-8210-2135df98bba2/alphafly-2-road-racing-shoes-DcWrKF.png" alt="">
            </div>
            <div class="flex flex-col justify-between ml-4 flex-grow" >
                <p></p>
              <span class="font-bold text-sm">{{ cart.name }}</span>
              <p></p>
              
              
            </div>
          </div>
          <span class="text-center w-1/5 font-semibold text-sm">Rp.{{ cart.regular_price}}</span>
          <div class="flex justify-center items-center w-1/5">
            <span @click="changeQty({cartId: cart.cart_id, typeQty: 'minus'} )"
                                  class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-black hover:text-yellow-50">
                                  - </span>
                              <span class="mr-3 ml-3" >
                                  {{ cart.qty }}
                              </span>
                              <span @click="changeQty({cartId: cart.cart_id, typeQty: 'plus'})"
                                  class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-black hover:text-yellow-50">
                                  + </span>
          </div>
          <span class="text-center w-1/5 font-semibold text-sm">Rp.{{  cart.regular_price * cart.qty  }}</span>
          <div class="w-1/5">
            <a type="button" href="#"  @click="removeItem(cart.cart_id)" class="ml-10">
                <svg class="h-8 w-8 text-black"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="4" y1="7" x2="20" y2="7" />  <line x1="10" y1="11" x2="10" y2="17" />  <line x1="14" y1="11" x2="14" y2="17" />  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
            </a>
          </div>
        </div>
                </div>
            </div>
            <div class="md:w-1/4">
                <div class="bg-white rounded-lg shadow-md p-6">
                    <div >
                    <h2 class="text-lg font-semibold mb-4">Summary</h2>
                    <div class="flex justify-between mb-2">
                        <span>Subtotal</span>
                        <span>Rp.{{ totalHarga() }}</span>
                    </div>
                    <div class="flex justify-between mb-2">
                        <span>Shipping</span>
                        <span>{{ ongkir }}</span>
                    </div>
                    <hr class="my-2">
                    <div class="flex justify-between mb-2">
                        <span class="font-semibold">Total</span>
                        <span class="font-semibold">{{ parseInt(totalHarga()) + parseInt(ongkir) }}</span>
                    </div>
                    <router-link to="/checkout">
                        <a href="#_" class=" mt-5 w-full text-center inline-block px-5 py-2 mx-auto text-white bg-gray-900 rounded-full hover:bg-gray-700 md:mx-0">Checkout</a>
                    </router-link>
                </div>
            </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    data() {
        return {
            ongkir: 50000,
        }
    },
    computed: {
        ...mapGetters('cart', ['getCart']),
    },
    methods: {
        ...mapActions('cart', ['fetchCart']),
        ...mapActions('product', ['fetchProduct']),

        totalHarga() {
          this.total = this.getCart.reduce((acc, product) => {
            return acc + parseFloat(product.regular_price * product.qty );
          }, 0);
          return this.total.toFixed(2);
        },

        changeQty(cartId, typeQty){
            this.$store.dispatch('cart/changeQuantityCart', cartId,typeQty)
        },

        removeItem(cartId){
            this.$store.dispatch('cart/removeFromCart', cartId)
        },

    },
    beforeMount() {
      this.fetchProduct();
    },
    mounted() {
        this.fetchCart();
    }
}
</script>