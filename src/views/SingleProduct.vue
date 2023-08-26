<template>
  <section class="">
        <div class="container mx-auto px-4">
            <div v-if="product">
                <div class="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
                    <div class="lg:col-span-3 lg:row-end-1">
                        <div class="lg:flex lg:items-start">
                            <div class="lg:order-2 lg:ml-5">
                                <div class="max-w-xl overflow-hidden rounded-lg">
                                    <a class="relative flex h-full overflow-hidden rounded-lg" href="#">
                                        <img class="object-cover" src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e0b55a0c-0619-4a43-8790-1d97318ad30b/alphafly-2-road-racing-shoes-DcWrKF.png" alt="product image" />
                                        <div class="flex flex-row mt-5 absolute top-0 left-0 m-5 rounded-full bg-white px-2 text-center text-sm ">
                                            <div class="">
                                                <svg height="20px" width="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-2.69 -2.69 59.25 59.25" xml:space="preserve" fill="#000000" transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)" stroke="#000000" stroke-width="0.00053867"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.861872"></g><g id="SVGRepo_iconCarrier"> <polygon style="fill:#000000;" points="26.934,1.318 35.256,18.182 53.867,20.887 40.4,34.013 43.579,52.549 26.934,43.798 10.288,52.549 13.467,34.013 0,20.887 18.611,18.182 "></polygon> </g></svg>
                                            </div>
                                            <div class="font-medium text-black font-medium ml-2">Highly Rated</div>
                                        </div>
                                    </a>

                                </div>
                            </div>
  
                            <div class="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0 ml-5">
                                <div class="flex flex-row items-start lg:flex-col">
                                    <button type="button"
                                        class="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center">
                                        <img class="h-full w-full object-cover" src="https://static.nike.com/a/images/t_default/fb9c1fae-d0e0-4ca2-8210-2135df98bba2/alphafly-2-road-racing-shoes-DcWrKF.png" alt="" />
                                    </button>
                                    <button type="button"
                                        class="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center">
                                        <img class="h-full w-full object-cover" src="https://static.nike.com/a/images/t_default/0a88b9af-877f-453c-ae4f-4f441a7026de/alphafly-2-road-racing-shoes-DcWrKF.png" alt="" />
                                    </button>
                                    <button type="button"
                                        class="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center">
                                        <img class="h-full w-full object-cover" src="https://static.nike.com/a/images/t_default/f214553b-c657-42c9-914a-4513f905cbeb/alphafly-2-road-racing-shoes-DcWrKF.png" alt="" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
  
                    <div class="lg:col-span-2 lg:row-span-2 lg:row-end-2">
                        <h1 class="sm: text-2xl font-semibold text-gray-900 sm:text-3xl"> {{ product.name }}</h1>
                        <h1 class="sm: text-base font-bold text-gray-900 sm:text-basefont-bold text-gray-900 sm:text-base"> {{ product.slug }}</h1>
  
                        <h2 class="mt-5 text-base font-bold text-gray-900 sm:text-base">Rp {{ product.base_price }}</h2>
                        <div class="mt-10">
                            <button type="button" class="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded mr-2 border-transparent border-1">
                                <img class="h-full w-full object-cover" src="https://static.nike.com/a/images/t_default/aef85fd7-18ea-457e-9278-babc7d8a0271/alphafly-2-road-racing-shoes-DcWrKF.png" alt="" />
                            </button>

                            <button type="button" class="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-gray-800">
                                <img class="h-full w-full object-cover" src="https://static.nike.com/a/images/t_default/fb9c1fae-d0e0-4ca2-8210-2135df98bba2/alphafly-2-road-racing-shoes-DcWrKF.png" alt="" />
                            </button>
                        </div>
 
                        <div class="flex flex-row mt-5">
                            <div class="basis-1/2 sm: text-base font-semibold sm:text-basefont-medium sm:text-base">Select Size</div>
                            <div class="basis-1/2 text-gray-500 text-end sm: text-base font-semibold sm:text-basefont-medium sm:text-base">Size Guide</div>
                        </div>
                        <div class="grid grid-cols-3 gap-2 text-center mt-2">
                            <div class="bg-gray-300 text-gray-600 font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed">EU 36</div>
                            <div class="bg-gray-300 text-gray-600 font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed">EU 36.5</div>
                            <div class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">EU 37.5</div>
                            <div class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">EU 38</div>
                            <div class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">EU 38.5</div>
                            <div class="bg-gray-300 text-gray-600 font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed">EU 39</div>
                            <div class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">EU 40</div>
                            <div class="bg-gray-300 text-gray-600 font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed">EU 41</div>
                            <div class="bg-gray-300 text-gray-600 font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed">EU 41.5</div>
                        </div>
        
                        <div class="mt-10 flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
                            <div v-if="token">
                                <button @click="addToCart(product.id)" type="button" class="inline-flex items-center justify-center rounded-full border-2 border-transparent bg-gray-900 bg-none w-full px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="shrink-0 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                    </svg>
                                    Add to cart
                                </button>
                            </div>

                            <div v-else>
                            <router-link to="/login">
                                <button type="button" class="inline-flex items-center justify-center rounded-full border-2 border-transparent bg-gray-900 bg-none w-full px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="shrink-0 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                    </svg>
                                    Add to cart
                                </button>
                            </router-link>
                        </div>
                        </div>
                        <div class="text-lg font-medium text-gray-900 dark:text-white mt-5">Once you take a few strides in the Nike Alphafly 2, you'll never look at your favourite pair of old racing shoes the same way again. These rocket ships are made to help shave precious time off your personal records without surrendering the foundation you need to go the full distance. A thick, lightweight support system marries the 2 worlds of comfort and speed in holy running matrimony. Enjoy the greatest energy return of all our racing shoes while you chase your personal bests and leave the competition in the dust.</div>
  
                        <ul class="mt-8 space-y-2">
                            <li class="flex items-center text-left text-sm font-medium text-gray-600">
                                <svg class="mr-2 block h-5 w-5 align-middle text-gray-500"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        class=""></path>
                                </svg>
                                Free shipping worldwide
                            </li>
  
                            <li class="flex items-center text-left text-sm font-medium text-gray-600">
                                <svg class="mr-2 block h-5 w-5 align-middle text-gray-500"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                                        class=""></path>
                                </svg>
                                Cancel Anytime
                            </li>
                        </ul>
                    </div>
  
                    <div class="lg:col-span-3">
                        <div class="border-b border-gray-300">
                            <nav class="flex gap-4">
                                <a href="#" title=""
                                    class="border-b-2 border-gray-900 py-4 text-sm font-medium text-gray-900 hover:border-gray-400 hover:text-gray-800">
                                    Description </a>
  
                                <a href="#" title=""
                                    class="inline-flex items-center border-b-2 border-transparent py-4 text-sm font-medium text-gray-600">
                                    Reviews
                                    <span
                                        class="ml-2 block rounded-full bg-gray-500 px-2 py-px text-xs font-bold text-gray-100">
                                        1,209 </span>
                                </a>
                            </nav>
                        </div>
  
                        <div class="mt-8 flow-root sm:mt-12">
                            <h1 class="text-3xl font-bold">Race Ahead</h1>
                            <p class="mt-4">The lightweight carbon-fibre plate combined with a ZoomX foam midsole is designed for speed.</p>

                            <h1 class="mt-8 text-3xl font-bold">Support For Long Distance</h1>
                            <p class="mt-4">Designed for long-distance road racing, the Nike Alphafly 2 has been updated with a slightly wider heel for stability when rounding corners in pursuit of your next finishing line.</p>

                            <h1 class="mt-8 text-3xl font-bold">Speed Sensation</h1>
                            <p class="mt-4">Forefront Zoom Air pods are optimised to absorb more impact ensuring better heel-to-toe transitions.</p>
                            <br>
                            <br>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else>
                Product not found.
            </div>
        </div>
    </section>
</template>

<script>
import { mapGetters, mapActions} from "vuex";

export default {
    data() {
        return {
            token: null,
            cek: 1
        }
    },

computed: {
    ...mapGetters("product", ["getProductBySlug"]),
    product() {
        return this.getProductBySlug(this.$route.params.slug);
    }
},
methods: {
    ...mapActions("product", ["fetchSingleProduct","fetchProduct"]),
    ...mapActions("cart", ["fetchCart"]),

    // cart
    ...mapActions('cart', ['fetchCart']),


    // add to cart
    ...mapActions('product', ['addToCart']),

    async addToCart(productId) {
        try {
            await this.$store.dispatch('product/addToCart', productId);
            this.fetchCart();
        } catch (error) {
            console.error(error);
        }
    },
    
    tambah() {
        this.cek++
    },
    kurang() {
        if (this.cek > 1) {
            this.cek--
        }
    }
},

beforeMount(){
  this.fetchProduct()
  this.fetchCart()
},

mounted(){
  const productSlug = this.$route.params.slug;
  console.log("ProductSlug:", productSlug);
  this.fetchSingleProduct(productSlug);

  const cektoken = localStorage.getItem('token');
  this.token = cektoken
}


};
</script>