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

  <div class="hs-dropdown-menu w-60 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden z-10 bg-gray-800 shadow-md rounded-lg p-2 dark:bg-gray-100 dark:border dark:border-gray-700 dark:divide-gray-100" aria-labelledby="hs-dropdown">
    <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-100 hover:bg-gray-900 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="/">
      <svg class="h-8 w-8 text-white"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="5 12 3 12 12 3 21 12 19 12" />  <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />  <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" /></svg>Home
    </a>
    <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-100 hover:bg-gray-900 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="/product">
      <svg class="h-8 w-8 text-white"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
      </svg>
    Product
    </a>
    <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-100 hover:bg-gray-900 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="brand">
      <svg class="h-8 w-8 text-white"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3" />  <path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3" />  <circle cx="15" cy="9" r="1"  /></svg>Brand
    </a>
    <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-100 hover:bg-gray-900 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="kategori">
      <svg class="h-8 w-8 text-white"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M17.905 13.057c2.208 1.756 3.436 3.308 3.012 4.035-.67 1.146-5.204-.204-10.129-3.016-4.924-2.812-8.374-6.022-7.705-7.168.418-.716 2.347-.458 4.936.524" />  <circle cx="12" cy="12" r="6" /></svg>Kategori
    </a>
    <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-100 hover:bg-gray-900 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="contact">
      <svg class="h-8 w-8 text-white"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /></svg>Contact Us
    </a>
    <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-100 hover:bg-gray-900 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="/profile">
      <svg class="h-8 w-8 text-white"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>Profile
    </a>

    <div v-if="isAuthenticated" class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-100 hover:bg-gray-900 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">
      <svg class="h-8 w-8 text-white"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />  <path d="M7 12h14l-3 -3m0 6l3 -3" /></svg>
      <p @click="logout" class="">Log Out</p>
  </div>

<div v-else class="">

<router-link to="/login" type="button" class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-100 hover:bg-gray-900 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">
  <svg class="h-8 w-8 text-white"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"/>
</svg>
    Login
</router-link>
</div>

  </div>
</div>

         
          <!-- Tengah -->
          <ul class="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
            <a class="text-3xl font-bold font-heading" href="/profile">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Rockstar_Games_Logo.svg/512px-Rockstar_Games_Logo.svg.png" width="50" alt="logo">
          </a>
          </ul>
         
          <div class="hidden xl:flex items-center space-x-5 items-center">
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
  