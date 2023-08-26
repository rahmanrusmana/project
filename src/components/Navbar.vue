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
        <CartBadgeComponent/>

        <div v-if="isAuthenticated" class="mt-6 mr" >

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
  