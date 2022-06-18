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
      <Container>
        <div class="section-header">
          <h1 class="section-title | text-3xl font-semibold mb-3">Featured Projects</h1>
          <p class="section-desc text-base text-gray-500">Projects that people loved</p>
        </div>
        <div class="section-body">
          <div  class="flex flex-wrap flex-row row">
            <collective-card v-for="i in 7" class="w-1/4"></collective-card>

            <div class="w-1/4 flex items-center flex-col justify-center">
              <h3 class="text-3xl text-center font-semibold">Discover More Fundraiser</h3>
              <router-link :to="`/collectives/id`" class="bg-gradient-primary text-white block text-center py-3 px-5 mt-4 rounded-md text-lg">Find More </router-link>

            </div>
          </div>
        </div>
      </Container>
    </section>


    <!-- Section: Different -->
    <section class="different my-32">
      <Container>
        <div class="flex">
          <div class="different__left | w-1/2">
            <div class="w-2/3 mt-10 bg-slate-300 aspect-square mx-auto relative">
              <div class="small-square | bg-gray-700 w-20 aspect-square right--8 top--8 shadow-lg absolute"></div>
              <div class="small-square | bg-gray-700 w-20 aspect-square left--8 bottom--8 shadow-lg absolute"></div>
            </div>
          </div>
          <div class="different__right | w-1/2">
            <h1 class="text-4xl text-right font-bold text-black">What Makes Us Different From Others</h1>

            <Collapse :open="true">
              <template #title>
                <div class="flex text-xl">
                  <h3 class="mr-5 text-xl font-bold">01</h3>
                  <h3>Manage Expenses</h3>
                </div>
              </template>
              <template #content>
                <p class="ml-10 text-gray-500"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                <router-link to="/" class="text-link ml-10 my-5 inline-block flex gap-2 items-center">Learn More <div i="carbon-arrow-right"></div></router-link>
              </template>
            </Collapse>

            <Collapse :open="false">
              <template #title>
                <div class="flex text-xl">
                  <h3 class="mr-5 text-xl font-bold">02</h3>
                  <h3>Secure and Trust</h3>
                </div>
              </template>
              <template #content>
                <p class="ml-10 text-gray-500"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                <router-link to="/" class="text-link ml-10 my-5 inline-block flex gap-2 items-center">Learn More <div i="carbon-arrow-right"></div></router-link>
              </template>
            </Collapse>

            <Collapse :open="false">
              <template #title>
                <div class="flex text-xl">
                  <h3 class="mr-5 text-xl font-bold">03</h3>
                  <h3>Open is Better</h3>
                </div>
              </template>
              <template #content>
                <p class="ml-10 text-gray-500"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                <router-link to="/" class="text-link ml-10 my-5 inline-block flex gap-2 items-center">Learn More <div i="carbon-arrow-right"></div></router-link>
              </template>
            </Collapse>

            <Collapse :open="false">
              <template #title>
                <div class="flex text-xl">
                  <h3 class="mr-5 text-xl font-bold">04</h3>
                  <h3>Receive Contributions</h3>
                </div>
              </template>
              <template #content>
                <p class="ml-10 text-gray-500"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                <router-link to="/" class="text-link ml-10 my-5 inline-block flex gap-2 items-center">Learn More <div i="carbon-arrow-right"></div></router-link>
              </template>
            </Collapse>
          </div>
        </div>
      </Container>
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
