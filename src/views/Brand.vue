<template>
    <h1 class="mb-8 text-center font-sans text-5xl font-bold mt-5 tracking-tight">BRAND</h1>
        <div class="grid grid-cols-4 gap-4">
            <div class=" flex flex-container" v-for="brand in getBrand.data.slice(0, 12)" :key="brand.id">
                <div className="card w-96 bg-base-100 shadow-xl ">
                    <figure><img :src="brand.logo" alt="Shoes" /></figure>
                <div className="card-body">
                <h2 className="card-title">{{ brand.slug }}</h2>
                <p>{{ brand.name }}</p>
                <div className="card-actions justify-end">
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
  ...mapGetters('brand', ['getBrand']),
  },
  methods: {
  ...mapActions('brand', ['fetchBrand']),
  },
  created() {
  this.fetchBrand();
  },
  }
  </script>
  