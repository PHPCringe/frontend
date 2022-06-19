<script setup lang="ts">

const contributionTypes = reactive([
    {
        avatar:  "/images/collectives/tiers/av-gold.png",
        background:  "/images/collectives/tiers/gold.png",
        name: "Gold",
        tags: "Recurring Contribution",
        bio: "Join us for Rp10.000,00 per month and support us",
        price: 10000,
        active: true,
    },
    {
        avatar:  "/images/collectives/tiers/av-plat.png",
        background:  "/images/collectives/tiers/plat.png",
        name: "Platinum",
        tags: "Recurring Contribution",
        active: false,
        bio: "Join us for Rp100.000,00 per month and support us",
        price: 20000
    },
    {
        avatar:  "/images/collectives/tiers/av-diamond.png",
        background:  "/images/collectives/tiers/diamond.png",
        name: "Diamond",
        tags: "Recurring Contribution",
        active: false,
        bio: "Join us for Rp500.000,00 per month and support us",
        price: 500000
    }
])
const setActive = (c) => {
    contributionTypes.forEach(con => {
        con.active = false
    })
    chooseMonthlyContribution.value = c.price
    c.active = true;
}

const chooseOneTime = ref('')
const chooseMonthlyContribution = ref('')
const choosedPaymentMethod = ref('')
const paymentMethods = reactive([
    {
        name: 'Dana',
        image: '/images/payments/dana.png'
    },
    {
        name: 'BCA',
        image: '/images/payments/bca.png'
    },
    {
        name: 'OVO',
        image: '/images/payments/ovo.png'
    },
    {
        name: 'Gopay',
        image: '/images/payments/gopay.png'
    },
])
</script>
<template>
<div class="payment">
    <div class="payment-card | w-full md:w-1/2 lg:w-[500px] mx-auto my-20">
        <Tabs 
          :tabs="{
            monthly: 'Monthly',
            onetime: 'One Time',
          }">
            <template #monthly>
                <div class="monthly-form | p-6 bg-white">
                    
                
                    <div class="types flex gap-5 overflow-x-auto mb-10">
                        <div class="balance-cards | flex gap-5  justify-center md:justify-start rounded-xl mb-5 ">
                            <div :class="`balance-card p-6 rounded-xl cursor-pointer bg-gray-100 min-w-[150px] ${contributionType.active ? 'active' : ''}`" v-for="contributionType in contributionTypes" @click="setActive(contributionType)">
                                <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M26 0.625C11.9871 0.625 0.625 11.9871 0.625 26C0.625 40.0129 11.9871 51.375 26 51.375C40.0129 51.375 51.375 40.0129 51.375 26C51.375 11.9871 40.0129 0.625 26 0.625ZM27.2631 38.3023L27.2744 40.0979C27.2744 40.3471 27.0705 40.5566 26.8213 40.5566H25.2127C24.9635 40.5566 24.7596 40.3527 24.7596 40.1035V38.325C19.7299 37.9512 17.3623 35.0852 17.1074 31.9699C17.0848 31.7037 17.2943 31.4771 17.5605 31.4771H20.1773C20.3982 31.4771 20.5908 31.6357 20.6248 31.851C20.9137 33.6465 22.3127 34.9889 24.8219 35.323V27.2404L23.4229 26.8836C20.4605 26.1756 17.6398 24.3291 17.6398 20.5002C17.6398 16.3711 20.7777 14.1508 24.7879 13.76V11.8908C24.7879 11.6416 24.9918 11.4377 25.241 11.4377H26.8326C27.0818 11.4377 27.2857 11.6416 27.2857 11.8908V13.743C31.1656 14.1338 34.077 16.3994 34.4168 19.9281C34.4451 20.1943 34.2355 20.4266 33.9637 20.4266H31.4205C31.1939 20.4266 31.0014 20.2566 30.973 20.0357C30.7465 18.3818 29.4211 17.0338 27.2631 16.7393V24.3461L28.7018 24.6803C32.3721 25.5865 34.8699 27.3424 34.8699 31.2732C34.8699 35.5383 31.698 37.9172 27.2631 38.3023ZM21.1629 20.2396C21.1629 21.6783 22.0521 22.7941 23.9666 23.4852C24.2328 23.5928 24.499 23.6777 24.8162 23.7684V16.7449C22.7262 17.0111 21.1629 18.1836 21.1629 20.2396ZM27.7615 27.8975C27.6029 27.8635 27.4443 27.8238 27.2631 27.7729V35.3457C29.676 35.1305 31.3412 33.8051 31.3412 31.5848C31.3412 29.8459 30.4406 28.7131 27.7615 27.8975Z" fill="currentColor"/>
                                </svg>

                                <h4 class="text-black font-semibold mt-3 text-xl">{{contributionType.name}}</h4>

                                <div class="balance__amount | mt-8 font-semibold">
                                    <h5 class="text-gray-500">Rp</h5>
                                    <h5>{{contributionType.price.toLocaleString('id-ID')}}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <form @submit.prevent>
                        <form-input label="Or Custom Your Monthly Contribution" prefix="Rp" v-model="chooseMonthlyContribution"></form-input>
                    </form>

                    <form-button type="link" :block="true" :to="{name: 'success-payment', query: {type:'monthly', amount: chooseMonthlyContribution}}">Proceed</form-button>
                </div>
            </template>
            <template #onetime>
                <div class="onetime-form | p-6 bg-white">
                    <div class="grid grid-cols-2 md:grid-cols-3 gap-5 mb-10">
                        <a @click.prevent="chooseOneTime=price.toString()" :class="`rounded-full block border border-gray-400 text-center p-2 hover:bg-gray-100 ${chooseOneTime == price.toString() ? 'bg-gradient-primary2 text-white' : ''}`" v-for="price in [100000,200000,300000,500000,750000,1000000]" href="#" >Rp{{price.toLocaleString('id-ID')}}</a>
                    </div>

                    <form-input label="Or Custom Your One Time Contribution" prefix="Rp" type="number" v-model="chooseOneTime"></form-input>


                    <!-- Payment methods -->
                    <div class="payment-methods | grid grid-cols-2 gap-5 text-center">
                        <div :class="`payment-method | p-5 bg-white rounded-md cursor-pointer hover:bg-gray-100 ${choosedPaymentMethod == paymentMethod.name ? 'bg-gradient-primary2 text-white' : ''}`" @click="choosedPaymentMethod = paymentMethod.name" v-for="paymentMethod in paymentMethods">
                            <img :src="paymentMethod.image" :alt="paymentMethod.name" class="mx-auto mb-3">
                            <h5 class="text-lg font-semibold">{{paymentMethod.name}}</h5>
                        </div>
                    </div>


                    <form-button type="link" :block="true" :to="{name: 'success-payment', query: {type:'onetime', amount: chooseOneTime, method: choosedPaymentMethod}}">Proceed</form-button>

                </div>
            </template>
        </Tabs>
    </div>
</div>
</template>
<style lang="scss">
.balance-card.active {
    background: var(--bg-gradient-primary2);

    color: white;
    h4, h5 {
        @apply text-white;
    }
}
</style>