<script lang="ts" setup>

const props = defineProps({
    avatar: {
        type: String,
        default: "/images/avatar.png",
    },
    background: {
        type: String,
        default: "/background.png",
    },
    name: {
        type: String,
        default: "Github",
    },
    tags: {
        type: Array,
        default: ["Open Source", "Coding"],
    },
    is: {
        type: String,
        default: "collective"
    },
    bio: {
        type: String,
        default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ",
    },
    totalDonation: {
        type: Number,
        default: 100000000,
    },
    targetDonation: {
        type: Number,
        default: 250000000,
    },
    currency: {
        type: String,
        default: "Rp"
    },
    contributors: {
        type: Array,
        default: [
            {
                name: "Andi",
                avatar_url: "/images/avatar.png"
            },
            {
                name: "Andi",
                avatar_url: "/images/avatar.png"
            },
            {
                name: "Andi",
                avatar_url: "/images/avatar.png"
            },
        ]
    }
})

const numberFormat = (num: number) => {
    return new Intl.NumberFormat('id-ID',{style: 'currency', currency: 'IDR',maximumSignificantDigits: 1}).format(num)
}
</script>

<template>
<div class="card rounded-lg">
    <div class="card-bg | relative bg-slate-700 h-20 xl:h-32 rounded-t-lg">
        <img :src="avatar" :alt="`Image for ${name}`" class="avatar-img absolute w-16 h-16 p-1 bg-white rounded-full">
    </div>
    <div class="card-content | pt-8 px-5">
        <h3 class="text-2xl font-semibold">{{name}}</h3>

        <!-- Tags -->
        <ul class="flex gap-1 my-3 flex-wrap">
            <li v-for="tag in tags" >
                <router-link :to="`/tags/${tag}`" class="tag p-1 sm:px-2 px-1 bg-slate-200 rounded-full text-xs">{{tag}}</router-link>
            </li>
        </ul>

        <!-- About -->
        <h5 class="text-lg font-semibold text-gray-700 my-2">About</h5>
        <p class="text-xs">{{bio}}</p>

        <template v-if="is == 'collective'">
            <!-- Donation -->
            <p class="text-xs mt-3">
                <span class="font-bold">{{numberFormat(totalDonation)}}</span> 
                <span class="text-gray-400"> of Rp 1 million Goals</span>
            </p>
    
            <!-- Progress bar -->
            <progress-bar class="my-4"></progress-bar>
        </template>
        <template v-else>
            <slot name="belowAbout"></slot>
        </template>


        <!-- Avatars -->
        <div class="avatars | flex">
            <div class="avatar ">
                <img src="/images/person1.jpg" alt="Github has donated" class="w-9 h-9 p-1 bg-white rounded-full object-cover" >
            </div>
            <div class="avatar ml--3">
                <img src="/images/person2.jpg" alt="Github has donated" class="w-9 h-9 p-1 bg-white rounded-full object-cover" >
            </div>
            <div class="ml-2 text-xs">
                <p>10+</p>
                <p class="text-slate-500">Contributors</p>

            </div>
        </div>

        <!-- Donate link -->
        <router-link :to="`/collectives/id`" class="bg-gradient-primary text-white block text-center p-2 text-sm mt-4 rounded-md">Donate Now</router-link>
    </div>
</div>
</template>
<style>
.card .avatar-img {
    bottom: -20px;
    left: 15px;
}
</style>