<script setup lang="ts">
import NavigationBar from '~/components/NavigationBar.vue'
const user = useUserStore()
const name = $ref(user.savedName)

const router = useRouter()
const go = () => {
  if (name)
    router.push(`/hi/${encodeURIComponent(name)}`)
}

</script>

<template>
  <div>
    <navigation-bar/>


    <!-- Section Hero -->
    <section id="hero" class="py-32 xl:py-48 text-center">
      <div class="hero__text | mx-auto font-semibold tracking-wide">
        <h1 class="text-4xl">Collect Your Funding Project <br>With <span class="text-primary-gradient">Kolektiva</span></h1>
        <p class="hero__text-desc | font-normal text-gray-600 mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
      </div>
      <div class="hero__button | mt-12">
        <router-link to="/sign-up" class="btn btn-outline border border-2 text-primary-gradient font-semibold border-indigo-600">Start Funding</router-link>
        <router-link to="/login" class="btn btn-gradient ml-5">Donate Now</router-link>
      </div>
    </section>


    <!-- Section: Featured Projects -->
    <section class="featured-projects text-left">
      <div class="container mx-auto px-5">
        <div class="section-header">
          <h1 class="section-title | text-3xl font-semibold mb-3">Featured Projects</h1>
          <p class="section-desc text-base text-gray-500">Projects that people loved</p>
        </div>
        <div class="section-body">
          <div  class="flex flex-wrap flex-row row">
            <collective-card v-for="i in 7" class="w-1/4"></collective-card>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>

<style>

.hero__text {
  width: min(700px, 100%);
}
.hero__text h1 {
    line-height: 3rem !important;
}
.text-primary-gradient {
  background: linear-gradient(-45deg, #4b27cf, #4457FD);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
