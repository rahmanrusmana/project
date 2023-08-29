<template>
    <Navbar/>
    <router-view />
    <Foter></Foter>
</template>

<script>
import Navbar from "./components/Navbar.vue"
import Foter from "./components/Foter.vue";


export default {
  components: {
    Foter,
    Navbar,
  },

};
</script>