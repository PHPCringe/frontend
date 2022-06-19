<script lang="ts" setup>
const navbarShow = ref(false)
if (window.innerWidth >= 1024)
  navbarShow.value = true

const user = useUserStore()

const search = ref('')

const router = useRouter()
const searchCollectives = () => {
    router.push('/discover?search='+search.value)
}

</script>

<template>
  <div class="navbar |  w-full relative">
    <div class="navbar-container | mx-auto flex justify-between py-8 px-8">
      <div class="navbar__logo">
        <router-link to="/">
          <img src="/images/Logo.png" alt="Kolektiva Logo" class="w-[90px]">
        </router-link>
      </div>
      <div v-show="navbarShow" class="navbar-right | flex justify-between gap-10 left-0 px-8 md:px-12 shadow-xl w-full lg:shadow-none xl:gap-0 lg:gap-0 py-5 lg:py-0 flex-col lg:flex-row absolute lg:static top-100% bg-white lg:bg-transparent z-3">
        <ul class="navbar__menu | flex flex-grow items-center flex-col lg:flex-row text-left">
          <li class="navbar__menu-item w-full lg:w-auto">
            <router-link class="navbar__link block hover:text-indigo-600" to="/discover">
              Discover
            </router-link>
          </li>
          <li class="navbar__menu-item w-full lg:w-auto">
            <router-link class="navbar__link block hover:text-indigo-600" to="how-it-works">
              How it Works
            </router-link>
          </li>
          <li class="navbar__menu-item w-full lg:w-auto">
            <router-link class="navbar__link block hover:text-indigo-600" to="about">
              About
            </router-link>
          </li>
          <li class="navbar__menu-item w-full block lg:hidden" v-if="!user.isLoggedIn">
            <router-link class="navbar__link block hover:text-indigo-600" to="how-it-works">
              Sign In
            </router-link>
          </li>
          <li class="navbar__menu-item w-full block lg:hidden" v-if="!user.isLoggedIn">
            <router-link class="navbar__link block hover:text-indigo-600" to="about">
              Register
            </router-link>
          </li>
        </ul>
        <div class="navbar__menu | flex items-center justify-end gap-6 flex-row lg:flex-row text-left">
          <form @submit.prevent="searchCollectives()">
            <div class="input-with-icon | relative w-[240px]">
              <div i-carbon-search inline-block color="gray-400" class="absolute left-3 top-3" />
              <input type="text" v-model="search" class="navbar__search | rounded-full border w-full border-indigo-500 px-5 py-2 pl-10 text-gray-700" placeholder="Search funding name..">
            </div>
          </form>

          <router-link to="/auth/sign-in"  v-if="!user.isLoggedIn" class="btn btn-outline border break-normal border-indigo-600 hidden lg:block">
            Sign in
          </router-link>
          <router-link to="/auth/register"  v-if="!user.isLoggedIn" class="btn btn-gradient hidden lg:block">
            Register
          </router-link>

          <a href="#" class="has-sub flex items-center relative gap-2" v-else>
            <img :src="user.currentUser!.avatar" class="w-12 h-12 rounded-full object-cover">
            <p class="text-xl font-semibold">Ahmad Saugi</p>

            <ul class="submenu | flex flex-col rounded-lg shadow-xl absolute top-100% right-0 w-64 text-right p-5 bg-white z-3 flex">
              <li>
                <router-link class="block p-3" to="/">Profile</router-link>
              </li>
              <li>
                <a href="#" @click="user.logout" class="block p-3" to="/">Logout</a>
              </li>
            </ul>
          </a>
        </div>
      </div>
      <button class="block lg:hidden" @click="navbarShow = !navbarShow">
        <div i-carbon-menu />
      </button>
    </div>
  </div>
</template>

<style lang="scss">
.navbar-container {
    width: min(1800px, 95%);
}
.navbar__menu-item {
    @apply mx-5 p-2;
}

.navbar__link {
    @apply text-stone-600;
}
.submenu {
  visibility: hidden;
  transition: all .2s;
  transform: translateY(10px);
  opacity: 0;
}
.has-sub:hover {
  .submenu {
    visibility: visible;
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
