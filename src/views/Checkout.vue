<template>
  <div class="relative mx-auto w-full bg-gray-100">
<div class="grid min-h-screen grid-cols-10">
  <div class="col-span-full py-6 px-4 sm:py-12 lg:col-span-6 ">
    <div class="px-4 pt-8">
  <p class="text-xl font-medium">Order Summary</p>
  <p class="text-gray-400">Check your items. And select a suitable shipping method.</p>
  <div class="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6" v-for="cart in getCart" :key="cart.cart_id">

    <div class="flex flex-col rounded-lg bg-white sm:flex-row">
      <img class="m-2 h-24 w-28 rounded-md border object-cover object-center" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fb9c1fae-d0e0-4ca2-8210-2135df98bba2/alphafly-2-road-racing-shoes-DcWrKF.png" alt="" />
      <div class="flex w-full flex-col px-4 py-4">
        <span class="font-semibold">{{ cart.name }}</span>
        <span class="float-right text-gray-400">Jumlah {{ cart.qty }}</span>
        <p class="text-lg font-bold">Rp {{ cart.regular_price * cart.qty }}</p>
      </div>
    </div>
  </div>
  
  <!-- =================================================== -->
  <p class="mt-8 text-lg font-medium">Delivery Option</p>
      <form class="mt-3 grid gap-6">
        <div class="flex flex-row m3">
          <div class="basis-1/2 m-1">
            <div class="relative">
              <input class="peer hidden" id="radio_2" type="radio" name="radio" value="express" v-model="deliveryType"
                checked />
              <span
                class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
              <label
                class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                for="radio_2">
                <div class="ml-5">
                  <span class="mt-2 font-semibold">Express</span>
                  <p class="text-slate-500 text-sm leading-6">Delivery: 1-2 Days</p>
                </div>
              </label>
            </div>
          </div>
          <div class="basis-1/2 m-1">
            <div class="relative">
              <div class="relative">
                <input class="peer hidden" id="radio_1" type="radio" value="standard" v-model="deliveryType" />
                <span
                  class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                <label
                  class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                  for="radio_1">
                  <div class="ml-5">
                    <span class="mt-2 font-semibold"> Standard</span>
                    <p class="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </form>



<!-- ========================================================= -->
<p class="mt-8 text-lg font-medium">Shipping Methods</p>
<form class="mt-5 grid gap-6">
    <div class="relative bg-white">
        <input class="peer hidden" id="radio_3" type="radio" value="cash_on_delivery" v-model="paymentType" />
        <span
            class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
        <label
            class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
            for="radio_3">
            <img class="w-14 object-contain"
                src="data:image/png;base64,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"
                alt="" />
            <div class="ml-5 mt-4">
                <span class="mt-2 font-semibold">Cash Or Duel</span>
                <!-- <p class="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p> -->
            </div>
        </label>
    </div>
    
</form>
  
  
</div>
  </div>


  <div class="relative col-span-full flex flex-col py-6 pl-8 pr-4 sm:py-12 lg:col-span-4 lg:py-24 mr-2">
    <div>
      <img src="https://images.unsplash.com/photo-1581318694548-0fb6e47fe59b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" class="absolute inset-0 h-full w-full object-cover" />
      <div class="absolute inset-0 h-full w-full bg-gradient-to-t from-gray-900 to-gray-900 opacity-95"></div>
    </div>
    <div class="relative">
      <div class="mx-auto w-full max-w-lg">
      <h1 class="relative text-2xl font-medium text-white sm:text-3xl">Secure Checkout<span class="mt-2 block h-1 w-10 bg-gray-100 sm:w-20"></span></h1>
      <form action="" class="mt-10 flex flex-col space-y-4">
        <div><label for="email" class="text-xs font-semibold text-white">Email</label><input type="email" id="email" name="email" placeholder="john.capler@fang.com" class="mt-1 block w-full rounded border-gray-300 bg-gray-900 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500" /></div>

        <div class="relative"><label for="card-number" class="text-xs font-semibold text-white">Card number</label><input type="text" id="card-number" name="card-number" placeholder="1234-5678-XXXX-XXXX" class="block w-full rounded border-gray-300 bg-gray-900 py-3 px-4 pr-10 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500" /><img src="/images/uQUFIfCYVYcLK0qVJF5Yw.png" alt="" class="absolute bottom-3 right-3 max-h-4" /></div>
        <div>
          <p class="text-xs font-semibold text-white">Expiration date</p>
          <div class="mr-6 flex flex-wrap">
            <div class="my-1">
              <label for="month" class="sr-only">Select expiration month</label
              ><select name="month" id="month" class="cursor-pointer rounded border-gray-300 bg-gray-900 py-3 px-2 text-sm shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500">
                <option value="">Month</option>
              </select>
            </div>
            <div class="my-1 ml-3 mr-6">
              <label for="year" class="sr-only">Select expiration year</label
              ><select name="year" id="year" class="cursor-pointer rounded border-gray-300 bg-gray-900 py-3 px-2 text-sm shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500">
                <option value="">Year</option>
              </select>
            </div>
            <div class="relative my-1"><label for="security-code" class="sr-only">Security code</label><input type="text" id="security-code" name="security-code" placeholder="Security code" class="block w-36 rounded border-gray-300 bg-gray-900 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500" /></div>
          </div>
        </div>
        <div><label for="card-name" class="sr-only">Card name</label><input type="text" id="card-name" name="card-name" placeholder="Name on the card" class="mt-1 block w-full rounded border-gray-300 bg-gray-900 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500" /></div>
      </form>

      <div class="my-5 h-0.5 w-full bg-white bg-opacity-30"></div>
      <div class="space-y-2">
        <p class="flex justify-between text-lg font-bold text-white"><span>Subtotal :</span><span>{{ totalHarga() }}</span></p>
        <p class="flex justify-between text-sm font-medium text-white"><span>Shiping :</span><span>Rp {{ ongkir }}</span></p>
      </div>

      <div class="my-5 h-0.5 w-full bg-white bg-opacity-30"></div>
      <p class="flex justify-between text-lg font-bold text-white"><span>Total :</span><span>{{ parseInt(totalHarga()) + parseInt(ongkir) }}</span></p>
      
      <button @click="performCheckout" type="submit" class="mt-2 inline-flex w-full items-center justify-center rounded bg-gray-900 py-2.5 px-4 text-base font-semibold tracking-wide text-white text-opacity-80 outline-none ring-offset-2 transition hover:text-opacity-100 focus:ring-2 focus:ring-teal-500 sm:text-lg">Place Order</button>
    </div>
    </div>
    
  </div>
</div>
</div>

</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data(){
    return {
            paymentType: '',
            deliveryType: '',
            ongkir: 50000,
        };
  },
    computed: {
        ...mapGetters('cart', ['getCart']),
        ...mapGetters('cart', ['getCheckout']),
    },
    methods: {
        ...mapActions('cart', ['fetchCart']),
        ...mapActions('product', ['fetchProduct']),
        ...mapActions('product', ['fetchProduct']),
        ...mapActions('auth', ['getUserAddress']),

        totalHarga() {
          this.total = this.getCart.reduce((acc, product) => {
            return acc + parseFloat(product.regular_price * product.qty);
          }, 0);
          return this.total.toFixed(0);
        },
        async performCheckout() {
            // Collect the product IDs to be checked out
            const cartItemIds = this.getCart.map(product => product.cart_id);
            // Get user address
            const userAddressResponse = await this.$store.dispatch('auth/getUserAddress');
            const userAddressId = userAddressResponse.data[0].id;

            const checkoutPayload = {
                shippingAddress: userAddressId,
                billingAddress: userAddressId,
                paymentType: this.paymentType,
                deliveryType: this.deliveryType,
                cart_item_ids: cartItemIds
            };
            
            // Call the checkout action with the collected IDs and user address
            await this.$store
              .dispatch('cart/checkoutCart', checkoutPayload)
              .then(() => {
              this.$router.push(`/order/${this.getCheckout.order_code}`);
            });
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