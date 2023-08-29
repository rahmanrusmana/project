<template>
    <div class="flex min-h-screen w-screen w-full items-center justify-center text-gray-600 bg-gray-50">
        <div class="relative flex flex-col rounded-lg border-gray-400 bg-white shadow-lg px-4">
          
      <div class="flex-auto p-6">
        <div class="text-center py-10">
          <p class="text-2xl font-black tracking-tight">YOUR ACCOUNT FOR</p>
          <p class="text-2xl font-black tracking-tight">EVERYTHING NIKE</p>
        </div>
        
        <form id="" class="mb-4" action="#" method="POST"  @submit.prevent="performRegister">
          <div class="mb-4">
            <input type="text" class="block w-full cursor-text appearance-none  border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-black-500 focus:bg-white focus:text-gray-600 focus:shadow" id="email" name="text" placeholder="Name" autofocus="" v-model="name" required />
          </div>
          <div class="mb-4">
            <div class="relative flex w-full flex-wrap items-stretch">
              <input type="email" id="password" class="relative block flex-auto cursor-text appearance-none border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-blue-500 focus:bg-white focus:text-gray-600 focus:shadow" name="email" placeholder="Email" v-model="email" required/>
            </div>
          </div>

          <div class="mb-4">
            <div class="relative flex w-full flex-wrap items-stretch">
              <input type="password" id="password" class="relative block flex-auto cursor-text appearance-none border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-blue-500 focus:bg-white focus:text-gray-600 focus:shadow" name="password" placeholder="Password" v-model="password" required/>
            </div>
          </div>

          <div class="mb-4">
            <div class="relative flex w-full flex-wrap items-stretch">
              <input type="password" id="password" class="relative block flex-auto cursor-text appearance-none border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-blue-500 focus:bg-white focus:text-gray-600 focus:shadow" name="password" placeholder="Confirm Password" v-model="confirm_password" required/>
            </div>
          </div>

          <div class="mb-4">
            <div class="relative flex w-full flex-wrap items-stretch">
              <input type="number" id="password" class="relative block flex-auto cursor-text appearance-none border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-blue-500 focus:bg-white focus:text-gray-600 focus:shadow" name="text" placeholder="Phone" v-model="phone" required/>
            </div>
          </div>
          
          <div class="mb-4">
            <button class="grid w-full cursor-pointer select-none border border-black-500 bg-gray-900 py-2 px-5 text-center align-middle text-sm text-white shadow " type="submit">Sig In</button>
          </div>
        </form>
      </div>
    </div>
    </div>
    
</template>

<script>
  import { mapActions } from 'vuex';
   
   export default {
       auth() {
           return {
               name: '',
               email: '',
               phone: '',
               password: '',
               confirm_password:'',
           };
       },
       methods: {
           ...mapActions('auth', ['register']),
           async performRegister() {
               const credentials = {
              name : this.name,
                email: this.email,
                   phone: this.phone,
                   password: this.password,
                   confirm_password: this.confirm_password,
               };
               const success = await this.register(credentials);
               
               if(success) {
                   this.$router.push('/');
               } else {
                   alert("Register Failed!")
               }
           },
       },
   };
</script>