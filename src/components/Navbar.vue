<template>
  <div class="flex flex-wrap">
    <section class="relative mx-auto">
        <!-- navbar -->
      <nav class="flex justify-between bg-gray-900 text-white w-screen">
        <div class="px-5 xl:px-12 py-6 flex w-full items-center">

          <div class="hs-dropdown relative inline-flex [--placement:bottom-right]">
  <button id="hs-dropdown" type="button" class="hs-dropdown-toggle py-3 px-3 inline-flex justify-center items-center gap-2 rounded-md font-medium bg-gray-900 shadow-sm align-middle hover:bg-gray-800">
    <svg class="h-8 w-8 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <line x1="21" y1="10" x2="3" y2="10" />  <line x1="21" y1="6" x2="3" y2="6" />  <line x1="21" y1="14" x2="3" y2="14" />  <line x1="21" y1="18" x2="3" y2="18" /></svg>
  </button>

  <div class="hs-dropdown-menu w-72 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden z-10 bg-gray-800 shadow-md rounded-lg p-2 dark:bg-gray-100 dark:border dark:border-gray-700 dark:divide-gray-100" aria-labelledby="hs-dropdown">
    <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-100 hover:bg-gray-900 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="/">
      Home
    </a>
    <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-100 hover:bg-gray-900 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="/product">
      Product
    </a>
    <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-100 hover:bg-gray-900 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="brand">
      Brand
    </a>
    <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-100 hover:bg-gray-900 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="kategori">
      Kategori
    </a>
    <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-100 hover:bg-gray-900 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="contact">
      Contact Us
    </a>
    <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-100 hover:bg-gray-900 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="/profile">
      Profile
    </a>
    <div v-if="isAuthenticated" class="" >

<button @click="logout" type="button"
    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    Logout
</button>
</div>
<div v-else class="">

<router-link to="/login" type="button"
    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    Login
</router-link>
</div>

  </div>
</div>

         
          <!-- Nav Links -->
          <ul class="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
            <a class="text-3xl font-bold font-heading" href="/profile">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Rockstar_Games_Logo.svg/512px-Rockstar_Games_Logo.svg.png" width="50" alt="logo">
          </a>
          </ul>
          <!-- Header Icons -->
          <div class="hidden xl:flex items-center space-x-5 items-center">
  
            <!-- Sign In / Register      -->
            <a class="flex items-center hover:text-gray-200" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </a>
            
          </div>
        </div>
        <!-- Responsive navbar -->
        <CartBadgeComponent/>

        

      </nav>
    </section>
  </div>
  


  </template>
  
  <script>
  
  import { mapActions, mapGetters } from 'vuex';
  import CartBadgeComponent from './CartBadgeComponent.vue';
  
  export default {
    computed: {
      ...mapGetters('auth', ['isAuthenticated'],)
    },
    methods: {
      ...mapActions('auth', ['logout']),
    },
    components: {
      CartBadgeComponent
    }
  };
  </script>
  