<template>
    <div class="relative mx-auto w-full bg-white">
  <div class="grid min-h-screen grid-cols-10">
    <div class="col-span-full py-6 px-4 sm:py-12 lg:col-span-6 ">
      <div class="px-4 pt-8">
    <p class="text-xl font-medium">Order Summary</p>
    <p class="text-gray-400">Check your items. And select a suitable shipping method.</p>
    <div class="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6" v-for="cart in getCart" :key="cart.cart_id">

      <div class="flex flex-col rounded-lg bg-white sm:flex-row">
        <img class="m-2 h-24 w-28 rounded-md border object-cover object-center" src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        <div class="flex w-full flex-col px-4 py-4">
          <span class="font-semibold">{{ cart.name }}</span>
          <span class="float-right text-gray-400">Jumlah {{ cart.qty }}</span>
          <p class="text-lg font-bold">Rp {{ cart.regular_price * cart.qty }}</p>
        </div>
      </div>

    </div>
    
    <p class="mt-8 text-lg font-medium">Shipping Methods</p>
    <form class="mt-5 grid gap-6">
      <div class="relative">
        <input class="peer hidden" id="radio_1" type="radio" name="radio" checked />
        <span class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
        <label class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-900 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" for="radio_1">
          <img class="w-14 object-contain" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/FedEx_Express.svg/800px-FedEx_Express.svg.png" alt="" />
          <div class="ml-5">
            <span class="mt-2 font-semibold">Fedex Delivery</span>
            <p class="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p>
          </div>
        </label>
      </div>
      <div class="relative">
        <input class="peer hidden" id="radio_2" type="radio" name="radio" checked />
        <span class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
        <label class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-900 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" for="radio_2">
          <img class="w-14 object-contain" src="https://o.remove.bg/downloads/61c70315-63b8-4e54-b78f-c30742da51bc/sap-removebg-preview.png" alt="" />
          <div class="ml-5">
            <span class="mt-2 font-semibold">SAP Delivery</span>
            <p class="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p>
          </div>
        </label>
      </div>
    </form>

    <p class="mt-8 text-lg font-medium">PayMents Methods</p>
    <div class="relative mt-5">
        <input class="peer hidden" id="radio" type="radio" name="radio" checked />
        <span class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
        <label class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-900 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" for="radio">
          <img class="w-14 object-contain" src="https://o.remove.bg/downloads/61c70315-63b8-4e54-b78f-c30742da51bc/sap-removebg-preview.png" alt="" />
          <div class="ml-5">
            <span class="mt-2 font-semibold">SAP Delivery</span>
            <p class="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p>
          </div>
        </label>
      </div>
      <div class="relative">
        <input class="peer hidden" id="radi" type="radio" name="radio" checked />
        
      </div>
    
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
          <p class="flex justify-between text-sm font-medium text-white"><span>Shiping :</span><span>Rp 55.000</span></p>
        </div>

        <div class="my-5 h-0.5 w-full bg-white bg-opacity-30"></div>
        <p class="flex justify-between text-lg font-bold text-white"><span>Total :</span><span>{{ totalHarga() }}</span></p>
        <button type="submit" class="mt-2 inline-flex w-full items-center justify-center rounded bg-gray-900 py-2.5 px-4 text-base font-semibold tracking-wide text-white text-opacity-80 outline-none ring-offset-2 transition hover:text-opacity-100 focus:ring-2 focus:ring-teal-500 sm:text-lg">Place Order</button>
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