<template>
<div class="pt-20 py-20 bg-white">
    <div class="container mx-auto px-4">
      <div class="bg-gray-100 ">
      <div class="bg-gray-100 p-6  md:mx-auto">
        <svg viewBox="0 0 24 24" class="text-green-600 w-16 h-16 mx-auto my-6">
            <path fill="currentColor"
                d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z">
            </path>
        </svg>
        <div class="text-center">
            <h3 class="md:text-2xl text-base text-gray-900 font-semibold text-center">Payment Done!</h3>
            <p class="text-3xl font-bold ">Thank You For Your Order</p>
            <p>Order Code : {{ getOrder.code }}</p>
            <div class="py-10 text-center">
                <a href="#" class="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3">
                    GO BACK 
               </a>
            </div>
        </div>
        
<div class="w-full mb-12 px-4 relative ">
  <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded 
  bg-gray-900 text-white">
    <div class="rounded-t mb-0 px-4 py-3 border-0 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-gray-800 text-gray-300 border-gray-700">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3 class="font-semibold text-lg text-white ">Order Sumary</h3>
        </div>
      </div>
    </div>
    <div class="block w-full overflow-x-auto ">
      <div class="grid grid-cols-4 gap-4 items-center bg-transparent border-collapse m-5">
        <div class="font-bold">Order Code</div>
        <div>: {{ getOrder.code }}</div>
        <div class="font-bold">Total Order Mount</div>
        <div>: {{ getOrder.orders[0].grand_total }}</div>

        <div class="font-bold">Name</div>
        <div>: {{ getOrder.user.name }}</div>
        <div class="font-bold">Payment Method</div>
        <div>: {{ getOrder.orders[0].payment_type }}</div>

        <div class="font-bold">Email</div>
        <div>: {{ getOrder.user.email }}</div>
        <div class="font-bold">Delivery Type</div>
        <div>: {{ getOrder.orders[0].delivery_type }}</div>

        <div class="font-bold">Shipping Address</div>
        <div>: {{ getOrder.shipping_address.address }} {{ getOrder.shipping_address.country }}</div>
        <div class="font-bold">Billing Address</div>
        <div>: {{ getOrder.shipping_address.address }} {{ getOrder.shipping_address.country }} {{ getOrder.shipping_address.country_id }}</div>
      </div>
    </div>
  </div>
</div>

<div class="w-full mb-12 px-4 relative ">
  <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded 
  bg-gray-900 text-white">
    <div class="rounded-t mb-0 px-4 py-3 border-0 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-gray-800 text-gray-300 border-gray-700">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3 class="font-semibold text-lg text-white ">Order Details</h3>
        </div>
      </div>
    </div>
    <div class="block w-full overflow-x-auto ">
      <div class="grid grid-cols-4 gap-4 items-center bg-transparent border-collapse m-5">
        <div class="font-bold">Order Code</div>
        <div>: {{ getOrder.code }}</div>
        <div class="font-bold">Total Order Mount</div>
        <div>: {{ getOrder.orders[0].grand_total }}</div>

        <div class="font-bold">Name</div>
        <div>: {{ getOrder.user.name }}</div>
        <div class="font-bold">Payment Method</div>
        <div>: {{ getOrder.orders[0].payment_type }}</div>

        <div class="font-bold">Email</div>
        <div>: {{ getOrder.user.email }}</div>
        <div class="font-bold">Delivery Type</div>
        <div>: {{ getOrder.orders[0].delivery_type }}</div>

        <div class="font-bold">Shipping Address</div>
        <div>: {{ getOrder.shipping_address.address }} {{ getOrder.shipping_address.country }}</div>
        <div class="font-bold">Billing Address</div>
        <div>: {{ getOrder.shipping_address.address }} {{ getOrder.shipping_address.country }} {{ getOrder.shipping_address.country_id }}</div>
      </div>
    </div>
  </div>
</div>
{{ getOrder.orders[0] }}
    </div>
  </div>
    </div>
  </div>
  
</template>

<script>
import { mapGetters, mapState } from 'vuex';
export default {
  props: ['orderCode'],
  computed: {
    ...mapGetters('order', ['getOrder']),
  },
  created() {
    this.$store.dispatch('order/fetchOrderData', this.orderCode);
  },
};
</script>