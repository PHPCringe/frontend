
<script setup lang="ts">
import axios from 'axios'

const route = useRoute();

const validateUrl = route.query.url



const user = useUserStore()
const token = user.token
console.log('token',token)
axios.get(validateUrl,{headers: {
    'Authorization': `Bearer ${token}`
}}).then(res => {

    })

</script>
<template>

<div class="py-32 text-center">
    <h1 class="text-3xl font-semibold">Verify Email</h1>

    <h4 class="text-red-600" v-if="!validateUrl">Invalid URL</h4>
    <div v-else class="text-green-600">
        Success Validate!
    </div>
</div>

</template>

<route lang="yaml">
meta:
  layout: home
</route>
