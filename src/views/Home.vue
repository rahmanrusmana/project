
<template>
  <div class="bg-white">
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
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">Easy Everyday Essentials</h2>
  
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
                <p class="mt-1 text-sm text-gray-500">{{ product.color }}</p>
              </div>
              <p class="text-sm font-medium text-gray-900">{{ product.price }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
const products = [
    {
      id: 1,
      name: 'KOTT',
      href: '#',
      imageSrc: 'https://www.maternaldisaster.com/wp-content/uploads/2023/07/kott-1.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: 'Rp 199.000',
      color: 'SKELETAL HOUS',
    },
    {
      id: 2,
      name: 'FINESTRA',
      href: '#',
      imageSrc: 'https://www.maternaldisaster.com/wp-content/uploads/2023/07/finestra-1-1200x1200.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: 'Rp 429.000',
      color: 'SKELETAL HOUSE',
    },
    {
      id: 3,
      name: 'LATH',
      href: '#',
      imageSrc: 'https://www.maternaldisaster.com/wp-content/uploads/2023/08/lath-1-1200x1200.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: 'Rp 189.000',
      color: 'SKELETAL HOUSE',
    },
    {
      id: 4,
      name: 'BRAKEN',
      href: '#',
      imageSrc: 'https://www.maternaldisaster.com/wp-content/uploads/2022/04/braken-1-1200x1200.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: 'RP 389.000',
      color: 'TRAGICA MYSTERIA',
    },
    
    // More products...
  ]
</script>


