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

        <p class="mb-4 text-center">
          Don't have an account yet?
          <a href="/register" class="cursor-pointer text-blue-500 no-underline hover:text-blue-500"> Create Account </a>
        </p>
      </div>
    </div>
    </div>
    

<div class="h-screen md:flex">
	<div
		class="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-black to-gray-900 i justify-around items-center hidden">
        <img src="https://app.svgator.com/assets/svgator.webapp/log-in-girl.svg" alt="">
		
	</div>
	<div class="flex md:w-1/2 justify-center py-10 items-center bg-white">
		<form class="bg-white"  @submit.prevent="performRegister">
			<h1 class="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
			<p class="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>
      <!-- nama -->
			<div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
				<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
				<input class="pl-2 outline-none border-none" v-model="name" type="text" name="name" id="name" placeholder="Name" />
      </div>
      <!-- email -->
				<div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
					<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
					<input class="pl-2 outline-none border-none" v-model="email" type="email" name="email" id="email" placeholder="Email" />
      </div>
      <!-- password -->
					<div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
						<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/></svg>
						<input class="pl-2 outline-none border-none" v-model="password" type="password" name="password" id="password" placeholder="Password" />
      </div>
      <!-- Confirm_Password -->
      <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/></svg>
						<input class="pl-2 outline-none border-none" v-model="confirm_password" type="password" name="confrim_password" id="confrim_password" placeholder="Password" />
      </div>
      <!-- phone -->
						<div class="flex items-center border-2 py-2 px-3 rounded-2xl">
							<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
							<input class="pl-2 outline-none border-none" v-model="phone" type="text" name="phone" id="phone" placeholder="Phone" />
      </div>
							<button type="submit" class="block w-full bg-gray-800 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Resgister</button>
		</form>
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
                   this.$router.push('/login');
               } else {
                   alert("Register Failed!")
               }
           },
       },
   };
</script>