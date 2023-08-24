<template>
  <h1 class="mb-8 text-center font-sans text-5xl font-bold mt-5">Produck</h1>
        <div class="grid grid-cols-4 gap-4 m-5">
            <div class="" v-for="product in getProduct.slice(0, 12)" :key="product.slug">
                <!-- component -->
                <div class="relative flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-gray-100 shadow-md">
  <a class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
    <img class="object-cover" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fb9c1fae-d0e0-4ca2-8210-2135df98bba2/alphafly-2-road-racing-shoes-DcWrKF.png" alt="product image" />
    <span class="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">39% OFF</span>
  </a>
  <div class="mt-4 px-5 pb-5">
    <a href="#">
      <h5 class="text-xl tracking-tight text-slate-900">{{ product.name }}</h5>
    </a>
    <div class="mt-2 mb-5 flex items-center justify-between">
      <p>
        <span class="text-3xl font-bold text-slate-900">Rp {{ product.base_price }}</span>
      </p>
    </div>
    <router-link :to="{name: 'SingleProduct', params: {slug: product.slug}}">
      <div href="#" class="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
      Buy</div>
    </router-link>

  </div>
</div>

            </div>
        </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
computed: {
...mapGetters('product', ['getProduct']),
},
methods: {
...mapActions('product', ['fetchProduct']),

},
created() {
this.fetchProduct();
},
}
</script>
