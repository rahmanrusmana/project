<template>
  <div class="flex flex-wrap">
    <section class="relative mx-auto">
        <!-- navbar -->
      <nav class="flex justify-between bg-gray-900 text-white w-screen">
        <div class="px-5 xl:px-12 py-6 flex w-full items-center">
          <a class="text-3xl font-bold font-heading" href="/profile">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Rockstar_Games_Logo.svg/512px-Rockstar_Games_Logo.svg.png" width="50" alt="logo">
          </a>
          <!-- Nav Links -->
          <ul class="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
            <li><a class="hover:text-gray-200" href="/">Home</a></li>
            <li><a class="hover:text-gray-200" href="/product">Product</a></li>
            <li><a class="hover:text-gray-200" href="/brand">Brand</a></li>
            <li><a class="hover:text-gray-200" href="/kategori">Kategori</a></li>
            <li><a class="hover:text-gray-200" href="/contact">Contact Us</a></li>
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
        <a class="xl:hidden flex mr-6 items-center" href="/cart">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span class="flex absolute -mt-5 ml-4">
            <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
            </span>
          </span>
        </a>

        <a class="relative inline-block text-lg group self-center mr-12 xl:hidden" href="#">
          <div v-if="isAuthenticated">
          <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-white transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-black">
          <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-900"></span>
          <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-white group-hover:-rotate-180 ease"></span>
        <button @click="logout" class="relative">Logout</button>
        </span>
      </div>
      <div v-else>
        <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-black transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
          <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
          <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
          <router-link to="/login" class="relative">Login</router-link>
        </span>
      </div>
        </a>
      </nav>
    </section>
  </div>
  <!-- Does this resource worth a follow? -->


  </template>
  
  <script>
  import { mapActions, mapGetters } from 'vuex';
  
  export default {
    computed: {
      ...mapGetters('auth', ['isAuthenticated'],)
    },
    methods: {
      ...mapActions('auth', ['logout']),
    },
  };
  </script>
  