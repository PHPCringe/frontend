<script lang="ts" setup>
</script>

<template>
    <div class="navbar | h-24 w-full">
        <div class="navbar-container | mx-auto flex justify-between py-8">
            <div class="navbar__logo">
                <img src="/images/Logo.png" alt="" srcset="">
            </div>
            <ul class="navbar__menu | flex items-center">
                <li class='navbar__menu-item'>
                    <router-link class="navbar__link" to="discover">Discover</router-link>
                </li>
                <li class='navbar__menu-item'>
                    <router-link class="navbar__link" to="how-it-works">How it Works</router-link>
                </li>
                <li class='navbar__menu-item'>
                    <router-link class="navbar__link" to="about">About</router-link>
                </li>
            </ul>
            <div class="navbar__menu | flex items-center gap-6">
                <div class="input-with-icon | relative">
                    <div i-carbon-search inline-block color="gray-400" class="absolute left-3 top-3"></div>
                    <input type="text" class="navbar__search | rounded-full border border-indigo-500 px-5 py-2 pl-10 text-gray-700" placeholder="Search funding name..">
                </div>

                <router-link to="/sign-up" class="btn btn-outline border border-indigo-600">Sign in</router-link>
                <router-link to="/login" class="btn btn-gradient">Register</router-link>
            </div>
        </div>
    </div>
</template>
<style>
.navbar-container {
    width: min(1800px, 95%);
}
.navbar__menu-item {
    @apply mx-5 p-2;
}

.navbar__link {
    @apply text-stone-600;
}
</style>