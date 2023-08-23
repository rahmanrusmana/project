<template class="">
<div class="h-screen md:flex">
    <div class="flex md:w-1/2 justify-center py-10 items-center bg-gray-100">
		<form class="bg-white">
            <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 bg-gray-900 text-gray-100">
	<img src="https://source.unsplash.com/150x150/?portrait?3" alt="" className="w-32 h-32 mx-auto rounded-full bg-gray-500 aspect-square" />
	<div className="space-y-4 text-center divide-y divide-gray-700">
		<div className="my-2 space-y-1">
			<h2 className="text-xl font-semibold sm:text-2xl">{{ getUser.name}}</h2>
			<p className="px-5 text-xs sm:text-base text-gray-400">{{ getUser.email }}</p>
		</div>
		<div className="flex justify-center pt-2 space-x-4 align-center">
			<a rel="noopener noreferrer" href="#" aria-label="GitHub" className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400">
				<svg class="h-8 w-8 text-white"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21" /></svg>
			</a>
			<a rel="noopener noreferrer" href="#" aria-label="Dribble" className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400">
				<svg class="h-8 w-8 text-white"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="9" />  <line x1="3.6" y1="9" x2="20.4" y2="9" />  <line x1="3.6" y1="15" x2="20.4" y2="15" />  <path d="M11.5 3a17 17 0 0 0 0 18" />  <path d="M12.5 3a17 17 0 0 1 0 18" /></svg>
			</a>
			<a rel="noopener noreferrer" href="#" aria-label="Twitter" className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400">
				<svg class="h-8 w-8 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>
			</a>
			<a rel="noopener noreferrer" href="#" aria-label="Email" className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400">
				<svg class="h-8 w-8 text-white"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
			</a>
		</div>
	</div>
</div> 
        </form>
	</div>
	<div
		class="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-black to-gray-900 i justify-around items-center hidden">
        <div class="w-full bg-cover bg-center" style="height:32rem; background-image: url(https://app.svgator.com/assets/svgator.webapp/log-in-girl.svg);">
            <div class="flex justify-rigt h-full w-full">
                <p class="text-white text-2xl font-extrabold uppercase md:text-3xl ml-10 mt-14">Your Profile</p>
            </div>
        </div>
        
		<div class="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div class="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div class="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div class="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
	</div>
	
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    computed: {
        ... mapGetters('user', ['getUser']),
    },
    methods: {
        ...mapActions('user', ["fetchUser"]),
    },
    created() {
        this.fetchUser();
    },
}
</script>