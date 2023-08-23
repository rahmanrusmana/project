<template>
  <h1 class="mb-8 text-center font-sans text-5xl font-bold mt-5">Produck</h1>
        <div class="grid grid-cols-4 gap-2">
            <div class=" flex flex-container" v-for="product in getProduct.slice(0, 12)" :key="product.slug">
                <!-- component -->
              

<div class=" flex flex-wrap items-center justify-center">
    <div class="flex-shrink-0 m-6 relative overflow-hidden bg-black rounded-lg max-w-xs shadow-lg">
      <svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style="transform: scale(1.5); opacity: 0.1;">
        <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white"/>
        <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white"/>
      </svg>
      <div class="relative pt-10 px-10 flex items-center justify-center">
        <div class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3" style="background: radial-gradient(black, transparent 60%); transform: rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1); opacity: 0.2;"></div>
        <img class="relative w-40" src="https://o.remove.bg/downloads/4ad740a1-efba-43ce-8d46-9b82e634dd81/nb-removebg-preview.png" alt="">
      </div>
      <div class="relative text-white px-6 pb-6 mt-6">
        <span class="block opacity-75 -mb-1">{{ product.slug }}</span>
        <div class="flex justify-between">
          <span class="block font-semibold text-xl">{{ product.name }}</span>
          <router-link :to="{name: 'SingleProduct', params: {slug: product.slug}}">
            <span class="block bg-white rounded-full text-black text-xs font-bold px-3 py-2 leading-none flex items-center">{{ product.base_price }}</span>
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
