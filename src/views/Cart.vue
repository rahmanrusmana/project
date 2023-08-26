<template>
    <div class="bg-gray-100 h-screen py-8">
    <div class="container mx-auto px-4">
        <h1 class="text-2xl font-semibold mb-4">Shopping Cart</h1>
        <div class="flex flex-col md:flex-row gap-4">
            <div class="md:w-3/4" >
                <div class="bg-white rounded-lg shadow-md p-6 mb-4">
                    <table class="w-full">
                        <thead>
                            <tr>
                                <th class="text-left font-semibold">Product</th>
                                <th class="text-left font-semibold">Price</th>
                                <th class="text-left font-semibold">Quantity</th>
                                <th class="text-left font-semibold">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="cart in getCart" :key="cart.cart_id">
                                <td class="py-4">
                                    <div class="flex items-center">
                                        <img class="h-16 w-16 mr-4" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fb9c1fae-d0e0-4ca2-8210-2135df98bba2/alphafly-2-road-racing-shoes-DcWrKF.png" alt="Product image">
                                        <span class="font-semibold">{{ cart.name }}</span>
                                    </div>
                                </td>
                                <td class="py-4">{{ cart.regular_price }}</td>
                                <td class="py-4">
                                    <div class="flex items-center">
                                        <button type="button" @click="changeQty({cartId: cart.cart_id, typeQty: 'minus'} )" class="border rounded-md py-2 px-4 mr-2">-</button>
                                        <span class="text-center w-8">{{ cart.qty }}</span>
                                        <button type="button"  @click="changeQty({cartId: cart.cart_id, typeQty: 'plus'} )" class="border rounded-md py-2 px-4 ml-2">+</button>
                                    </div>
                                </td>
                                <td class="py-4">{{ totalHarga() }}</td>
                                <td>
                                    <button type="button" @click="removeItem(cart.cart_id)">
                                        X
                                    </button>
                                </td>
                            </tr>
                            <!-- More product rows -->
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="md:w-1/4">
                <div class="bg-white rounded-lg shadow-md p-6">
                    <h2 class="text-lg font-semibold mb-4">Summary</h2>
                    <div class="flex justify-between mb-2">
                        <span>Subtotal</span>
                        <span>Rp.{{ totalHarga() }}</span>
                    </div>
                    <div class="flex justify-between mb-2">
                        <span>Taxes</span>
                        <span>Rp.50000</span>
                    </div>
                    <div class="flex justify-between mb-2">
                        <span>Shipping</span>
                        <span>Rp.50000</span>
                    </div>
                    <hr class="my-2">
                    <div class="flex justify-between mb-2">
                        <span class="font-semibold">Total</span>
                        <span class="font-semibold">{{ totalHarga()}}</span>
                    </div>
                    <router-link to="/checkout">
                        <button class="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">Checkout</button>
                    </router-link>
                    
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    computed: {
        ...mapGetters('cart', ['getCart']),
    },
    methods: {
        ...mapActions('cart', ['fetchCart']),
        ...mapActions('product', ['fetchProduct']),

        totalHarga() {
          this.total = this.getCart.reduce((acc, product) => {
            return acc + parseFloat(product.regular_price * product.qty);
          }, 0);
          return this.total.toFixed(0);
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