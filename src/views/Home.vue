<template>
  <div class="bg-gray-100">
    <div class="w-full bg-cover bg-center" style="height:32rem; background-image: url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80);">
        <div class="flex items-center justify-left h-full w-full bg-gray-900 bg-opacity-50">
            <div class="">
                <h1 class="text-white text-2xl font-extrabold uppercase md:text-3xl ml-10">INDEPENDENCE DAY<br>EXTRA 17% OFF</h1>
                <p class="text-white text-base font-semibold uppercase md:text-base ml-10">Deals not to be missed! Get moving before your favorites are gone</p>

                <a href="/product" class="ml-10 mt-3 relative inline-flex items-center px-12 py-2 overflow-hidden text-lg font-medium text-white border-2 border-white-600 rounded-full hover:text-black group hover:bg-gray-50">
                  <span class="absolute left-0 block w-full h-0 transition-all bg-white opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                  <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </span>
                  <span class="relative">Start Shopping</span>
                </a>
            </div>
        </div>
    </div>

    <div class="">
      <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">RUNNING SHOES Men's & Women's</h2>
  
        <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <div v-for="product in products" :key="product.id" class="group relative">
            <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-100">
              <img :src="product.imageSrc" :alt="product.imageAlt" class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
            </div>
            <div class="mt-4 flex justify-between">
              <div>
                <h3 class="text-base text-bold text-gray-700">
                  <a :href="product.href">
                    <span aria-hidden="true" class="absolute inset-0" />
                    {{ product.name }}
                  </a>
                </h3>
                <p class="mt-1 text-sm text-gray-500">{{ product.imageAlt }}</p>
                <p class="mt-1 text-sm text-gray-500">{{ product.color }}</p>
                <p class="text-base font-medium text-bold">{{ product.price }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <h2 class="m-10 text-2xl font-bold tracking-tight text-gray-900">The Essentials</h2>
    <div class="grid grid-cols-3 gap-4 m-10">
      <div class="pb-10" style="height:32rem; background-image: url(https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_540,c_limit/d94bfa7e-9357-406a-a124-1940712dfa0b/nike-just-do-it.png);">
        <div class=" flex items-end justify-left h-full w-full h-full w-full">
                <a href="/product" class="ml-10 mt-3 relative inline-flex items-center px-12 py-2 overflow-hidden text-lg font-medium text-white border-2 border-white-600 rounded-full hover:text-black group hover:bg-gray-50">
                  <span class="absolute left-0 block w-full h-0 transition-all bg-white opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                  <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                  </span>
                  <span class="relative">Men's</span>
                </a>
        </div>
        
      </div>
      <div class="pb-10" style="height:32rem; background-image: url(https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_540,c_limit/dc62b322-5c3f-4508-b21c-950683ed460f/nike-just-do-it.png);">
        <div class=" flex items-end justify-left h-full w-full h-full w-full">
                <a href="/product" class="ml-10 mt-3 relative inline-flex items-center px-12 py-2 overflow-hidden text-lg font-medium text-white border-2 border-white-600 rounded-full hover:text-black group hover:bg-gray-50">
                  <span class="absolute left-0 block w-full h-0 transition-all bg-white opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                  <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                  </span>
                  <span class="relative">Women's</span>
                </a>
        </div>
      </div>
      <div class="pb-10" style="height:32rem; background-image: url(https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_540,c_limit/58359474-a0de-4329-959c-55d1652d0912/nike-just-do-it.png);">
        <div class=" flex items-end justify-left h-full w-full h-full w-full">
                <a href="/product" class="ml-10 mt-3 relative inline-flex items-center px-12 py-2 overflow-hidden text-lg font-medium text-white border-2 border-white-600 rounded-full hover:text-black group hover:bg-gray-50">
                  <span class="absolute left-0 block w-full h-0 transition-all bg-white opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                  <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                  </span>
                  <span class="relative">Kid's</span>
                </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const products = [
    {
      id: 1,
      name: 'Nike Alphafly 2',
      href: '#',
      imageSrc: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fb9c1fae-d0e0-4ca2-8210-2135df98bba2/alphafly-2-road-racing-shoes-DcWrKF.png',
      imageAlt: "Women's Road Racing Shoes",
      price: 'Rp 4,499,000',
      color: '1 Colour',
    },
    {
      id: 2,
      name: 'Nike Vaporfly 3',
      href: '#',
      imageSrc: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6a588034-2960-4631-b425-c94c665175d5/vaporfly-3-road-racing-shoes-xsDgvM.png',
      imageAlt: "Men's Road Racing Shoes",
      price: 'Rp 3,399,000',
      color: '3 Colour',
    },
    {
      id: 3,
      name: 'Nike Zoom Fly 5',
      href: '#',
      imageSrc: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/81e00284-dc73-4e94-a4b7-06f85fa90b4c/zoom-fly-5-road-running-shoes-lkx7Zp.png',
      imageAlt: "Men's Road Racing Shoes",
      price: 'Rp 2,489,000',
      color: '4 Colour',
    },
    {
      id: 4,
      name: 'Nike Free RN NN',
      href: '#',
      imageSrc: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3e7202f0-9737-4398-872d-a7d3f526d9d0/free-rn-nn-road-running-shoes-jt4vDT.png',
      imageAlt: "Women's Road Racing Shoes",
      price: 'RP 1,549,000',
      color: '3 Colour',
    },
    
    // More products...
  ]
</script>


