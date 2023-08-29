<template>

<div class="flex min-h-screen w-screen w-full items-center justify-center text-gray-600 bg-gray-50">
  <div class="relative">
    
<div class="hidden sm:block h-56 w-56 text-black-600 absolute a-z-10 -left-20 -top-20">
   <svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='40' height='40' patternTransform='scale(0.6) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='none'/><path d='M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5'  stroke-width='1' stroke='none' fill='currentColor'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(#a)'/></svg>
  </div>
<div class="hidden sm:block h-28 w-28 text-black-600 absolute a-z-10 -right-20 -bottom-20">
   <svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='b' patternUnits='userSpaceOnUse' width='40' height='40' patternTransform='scale(0.5) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='none'/><path d='M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5'  stroke-width='1' stroke='none' fill='currentColor'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(#b)'/></svg>
  </div>
    <!-- Register -->
    
    <div class="relative flex flex-col rounded-lg border-gray-400 bg-white shadow-lg px-4">
      <div class="flex-auto p-6">
        <div class="text-center py-10">
          <p class="text-2xl font-black tracking-tight">YOUR ACCOUNT FOR</p>
          <p class="text-2xl font-black tracking-tight">EVERYTHING NIKE</p>
        </div>
        
        <form id="" class="mb-4" action="#" method="POST" @submit.prevent="performLogin">
          <div class="mb-4">
            <input type="email" class="block w-full cursor-text appearance-none  border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-black-500 focus:bg-white focus:text-gray-600 focus:shadow" id="email" name="email-username" placeholder="Email address" autofocus="" v-model="email" required />
          </div>
          <div class="mb-4">
            <div class="relative flex w-full flex-wrap items-stretch">
              <input type="password" id="password" class="relative block flex-auto cursor-text appearance-none border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-blue-500 focus:bg-white focus:text-gray-600 focus:shadow" name="password" placeholder="Password" v-model="password" required/>
            </div>
          </div>
          <div class="mb-4">
            <div class="block">
              <input type="checkbox" checked="checked" class="checkbox" />
              <label class="inline-block" for="remember-me">Ingatkan Saya</label>
            </div>
          </div>
          <div class="mb-4">
            <button class="grid w-full cursor-pointer select-none border border-black-500 bg-gray-900 py-2 px-5 text-center align-middle text-sm text-white shadow " type="submit">Sig In</button>
          </div>
        </form>

        <p class="mb-4 text-center">
          Don't have an account yet?
          <a href="/register" class="cursor-pointer text-blue-500 no-underline hover:text-blue-500"> Create Account </a>
        </p>
      </div>
    </div>
    <!-- /Register -->
  </div>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    data() {
        return {
            email: '',
            password: '',
        };
    },
    computed: {
      ...mapGetters('auth', ['loginError','isAuthenticated'])
    },
    methods: {
        ...mapActions('auth', ['login',]),
        async performLogin() {
            const credentials = {
                email: this.email,
                password: this.password,
            };
            const success = await this.login(credentials);
            if (success && this.isAuthenticated) {
                // Redirect to the desired route on successful login
                this.$router.push('/');
            } else {
              //Handle login error
                if (this.loginError){
                  alert(this.loginError)
                } else {
                  alert("Login Failed");
                }
            }
        },
    },
};
</script>

<style>
</style>