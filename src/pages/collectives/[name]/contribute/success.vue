<script setup lang="ts">
const props = defineProps({
    name: String,
    type: Number,
    method: String,
})

const route = useRoute()
const amount = route.query.amount || 0
const type = route.query.type || "onetime"
const method = route.query.method || "Gopay"
</script>
<template>
<div class="card bg-white w-full md:w-[350px] rounded-lg mx-auto p-5 my-32">
    <div class="success-indicator | text-center">
        <div class="check bg-green-500 w-12 h-12 rounded-full p-3 mx-auto">
            <svg width="26" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.81836 12.9996L12.4547 23.636L30.182 2.36328" stroke="white" stroke-width="3.54545" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
        <h4 class="text-2xl my-4 font-semibold">Donate Success</h4>
        <table class="w-full">
            <tr>
                <td>Method:</td>
                <td>{{method}}</td>
            </tr>
            <tr>
                <td>To:</td>
                <td>{{name}}</td>
            </tr>
            <tr>
                <td>Total:</td>
                <td>Rp{{amount.toLocaleString('id-ID')}}</td>
            </tr>
        </table>
    </div>
</div>
</template>
<style>
table tr td {
    padding: .3rem;
}
table tr td:nth-child(1) {
    text-align: left;
}
table tr td:nth-child(2) {
    text-align: right;
}
</style>
<route lang="yaml">
name: success-payment
</route>