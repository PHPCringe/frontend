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


    <!-- Section Hero -->
    <section id="hero" class="py-32 xl:py-48 text-center relative navbar-container mx-auto">
      <div class="hero-bg-icons hidden lg:block">
        <img class="hero-bg-icon" src="/images/icons/icon.png">
        <img class="hero-bg-icon" src="/images/icons/icon2.png">
        <img class="hero-bg-icon" src="/images/icons/icon3.png">
        <img class="hero-bg-icon" src="/images/icons/icon4.png">
        <img class="hero-bg-icon" src="/images/icons/icon5.png">
        <img class="hero-bg-icon" src="/images/icons/icon6.png">
        <img class="hero-bg-icon" src="/images/icons/icon7.png">
        <img class="hero-bg-icon" src="/images/icons/icon8.png">
      </div>
      <div class="hero__text | mx-auto font-semibold tracking-wide z-2 relative">
        <h1 class="text-4xl">Collect Your Funding Project <br>With <span class="text-primary-gradient">Kolektiva</span></h1>
        <p class="hero__text-desc | font-normal text-gray-600 mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
      </div>
      <div class="hero__button | mt-12 z-2 relative">
        <router-link to="/auth/sign-up" class="btn btn-outline border border-2 text-primary-gradient font-semibold border-indigo-600">Start Funding</router-link>
        <router-link to="/auth/login" class="btn btn-gradient ml-5">Donate Now</router-link>
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
            <collective-card v-for="i in 7" class="w-full md:w-1/4"></collective-card>

            <div class="w-full md:w-1/4 flex items-center flex-col justify-center py-12">
              <h3 class="text-3xl text-center font-semibold">Discover More Fundraiser</h3>
              <router-link :to="`/collectives/id`" class="bg-gradient-primary text-white block text-center py-3 px-5 mt-4 rounded-md text-lg">Find More </router-link>
            </div>
          </div>
        </div>
      </Container>
    </section>


    <!-- Section: Different -->
    <section class="different my-32 md:my-48">
      <Container>
        <div class="flex flex-wrap">
          <div class="different__left | w-full md:w-1/2">
            <div class="w-2/3 mt-10 bg-slate-300 aspect-square mx-auto relative">
              <div class="small-square | bg-gray-700 w-20 aspect-square right--8 top--8 shadow-lg absolute"></div>
              <div class="small-square | bg-gray-700 w-20 aspect-square left--8 bottom--8 shadow-lg absolute"></div>
            </div>
          </div>
          <div class="different__right | w-full md:w-1/2 pt-32 md:pt-0">
            <h1 class="text-4xl text-right font-semibold text-black mb-10">What Makes Us Different From Others</h1>

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


    <!-- Section: Get to know us better -->
    <section class="different text-left my-48">
      <Container>
        <div class="flex flex-wrap">
          <div class="left | w-full md:w-2/3 order-1 md:order-0">
            <h1 class="text-4xl  font-semibold text-black">Get to Know Us Better</h1>
            <p class="mt-10 w-60%">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
            <router-link to="/" class="px-5 inline-block py-2 text-lg mt-12 rounded-lg hover:bg-blue-500 bg-blue-600 text-white font-bold">Learn More</router-link>

            <!-- Grid stats -->
            <div class="grid grid-cols-2 lg:grid-cols-4 mt-16 gap-8">
              <div>
                <h3 class="font-bold text-3xl mb-3">5</h3>
                <p>Years Experience</p>
              </div>
              <div>
                <h3 class="font-bold text-3xl mb-3">10</h3>
                <p>Start Up Go Public</p>
              </div>
              <div>
                <h3 class="font-bold text-3xl mb-3">1200+</h3>
                <p>Project Funded</p>
              </div>
              <div>
                <h3 class="font-bold text-3xl mb-3">Rp50 mil</h3>
                <p>In Funding</p>
              </div>
            </div>
          </div>
          <div class="right | w-full md:w-1/3 order-0 md:order-1">
            <img src="/images/peopleLaptop.png" alt="Our services" class="hidden md:block">
          </div>
        </div>
      </Container>
    </section>


    <!-- Section Join Our Community -->
    <section class="join-community | my-32 text-center">
      <Container>
        <h1 class="section-title text-4xl font-semibold mb-16">Join Our Community</h1>
        <ul class="flex w-full lg:w-[50%] gap-15 mx-auto justify-center">
          <li>
            <a href="/" class="flex flex-col justify-center text-2xl font-medium gap-6">
              <svg id="Livello_1" class="mx-auto" width="50" height="50" data-name="Livello 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 240 240"><defs><linearGradient id="linear-gradient" x1="120" y1="240" x2="120" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#363636"/><stop offset="1" stop-color="#363636"/></linearGradient></defs><title>Telegram_logo</title><circle cx="120" cy="120" r="120" fill="url(#linear-gradient)"/><path d="M81.229,128.772l14.237,39.406s1.78,3.687,3.686,3.687,30.255-29.492,30.255-29.492l31.525-60.89L81.737,118.6Z" fill="#c8daea"/><path d="M100.106,138.878l-2.733,29.046s-1.144,8.9,7.754,0,17.415-15.763,17.415-15.763" fill="#a9c6d8"/><path d="M81.486,130.178,52.2,120.636s-3.5-1.42-2.373-4.64c.232-.664.7-1.229,2.1-2.2,6.489-4.523,120.106-45.36,120.106-45.36s3.208-1.081,5.1-.362a2.766,2.766,0,0,1,1.885,2.055,9.357,9.357,0,0,1,.254,2.585c-.009.752-.1,1.449-.169,2.542-.692,11.165-21.4,94.493-21.4,94.493s-1.239,4.876-5.678,5.043A8.13,8.13,0,0,1,146.1,172.5c-8.711-7.493-38.819-27.727-45.472-32.177a1.27,1.27,0,0,1-.546-.9c-.093-.469.417-1.05.417-1.05s52.426-46.6,53.821-51.492c.108-.379-.3-.566-.848-.4-3.482,1.281-63.844,39.4-70.506,43.607A3.21,3.21,0,0,1,81.486,130.178Z" fill="#fff"/></svg>
              <span>Telegram</span>
            </a>
          </li>
          <li>
            <a href="/" class="flex flex-col justify-center text-2xl font-medium gap-6">
              <svg width="60" height="50" class="mx-auto" viewBox="0 0 50 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M48.9583 5.55625C48.6752 4.54631 48.1237 3.63197 47.3625 2.91041C46.5798 2.16667 45.6204 1.63465 44.575 1.36458C40.6625 0.333329 24.9875 0.333329 24.9875 0.333329C18.4528 0.25898 11.9196 0.585984 5.425 1.3125C4.37956 1.60252 3.42201 2.14643 2.6375 2.89583C1.86667 3.6375 1.30833 4.55208 1.01667 5.55416C0.316027 9.32863 -0.0243916 13.1611 6.93102e-09 17C-0.025 20.8354 0.314583 24.6667 1.01667 28.4458C1.30208 29.4437 1.85833 30.3542 2.63125 31.0896C3.40417 31.825 4.36667 32.3562 5.425 32.6375C9.38958 33.6667 24.9875 33.6667 24.9875 33.6667C31.5305 33.7411 38.072 33.4141 44.575 32.6875C45.6204 32.4174 46.5798 31.8854 47.3625 31.1417C48.1235 30.4203 48.6743 29.5058 48.9563 28.4958C49.6752 24.7228 50.0248 20.8887 50 17.0479C50.0541 13.1908 49.705 9.33867 48.9583 5.55416V5.55625ZM20.0042 24.1333V9.86875L33.0458 17.0021L20.0042 24.1333Z" fill="#363636"/>
              </svg>
              <span>Youtube</span>
            </a>
          </li>
          <li>
            <a href="/" class="flex flex-col justify-center text-2xl font-medium gap-6">
              <svg width="60" height="50" viewBox="0 0 50 38" class="mx-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M42.3271 3.35836C39.1396 1.92086 35.7229 0.85836 32.15 0.254193C32.1182 0.248085 32.0852 0.252021 32.0557 0.265458C32.0263 0.278896 32.0017 0.301169 31.9854 0.329193C31.5479 1.09794 31.0604 2.10003 30.7187 2.89169C26.9294 2.32552 23.0769 2.32552 19.2875 2.89169C18.9069 2.01432 18.4778 1.15883 18.0021 0.329193C17.986 0.300824 17.9616 0.278047 17.9322 0.263902C17.9027 0.249757 17.8697 0.244916 17.8375 0.250026C14.2667 0.854193 10.85 1.91669 7.66041 3.35628C7.63297 3.36779 7.60971 3.38741 7.59374 3.41253C1.11041 12.9438 -0.666672 22.2396 0.206244 31.4188C0.208673 31.4413 0.215652 31.463 0.226754 31.4827C0.237857 31.5024 0.252853 31.5196 0.270828 31.5334C4.05498 34.2884 8.2757 36.3871 12.7562 37.7417C12.7875 37.7513 12.8209 37.7513 12.8521 37.7416C12.8833 37.732 12.9109 37.7131 12.9312 37.6875C13.8954 36.3981 14.7498 35.0301 15.4854 33.5979C15.4956 33.5784 15.5015 33.5568 15.5027 33.5348C15.5038 33.5127 15.5002 33.4907 15.4921 33.4701C15.484 33.4496 15.4716 33.431 15.4557 33.4157C15.4398 33.4004 15.4208 33.3886 15.4 33.3813C14.0542 32.8745 12.7502 32.2629 11.5 31.5521C11.4775 31.5393 11.4586 31.5211 11.4449 31.4991C11.4312 31.4772 11.4232 31.4522 11.4215 31.4264C11.4199 31.4006 11.4247 31.3748 11.4354 31.3512C11.4462 31.3277 11.4627 31.3073 11.4833 31.2917C11.7458 31.0979 12.0083 30.8959 12.2583 30.6938C12.2808 30.6756 12.3079 30.664 12.3366 30.6604C12.3653 30.6567 12.3945 30.661 12.4208 30.6729C20.6021 34.3479 29.4625 34.3479 37.5479 30.6729C37.5743 30.6603 37.6038 30.6554 37.6329 30.6587C37.662 30.662 37.6896 30.6735 37.7125 30.6917C37.9625 30.8959 38.2229 31.0979 38.4875 31.2917C38.5083 31.3069 38.5251 31.3271 38.5362 31.3504C38.5473 31.3738 38.5525 31.3995 38.5513 31.4253C38.55 31.4511 38.5424 31.4762 38.5291 31.4983C38.5158 31.5204 38.4972 31.5389 38.475 31.5521C37.2292 32.2688 35.9333 32.875 34.5729 33.3792C34.552 33.3868 34.533 33.3987 34.5171 33.4143C34.5012 33.4298 34.4888 33.4485 34.4807 33.4692C34.4726 33.4899 34.469 33.5121 34.4702 33.5343C34.4714 33.5565 34.4773 33.5782 34.4875 33.5979C35.2375 35.0292 36.0958 36.3917 37.0396 37.6854C37.0592 37.712 37.0865 37.7318 37.1179 37.7423C37.1492 37.7527 37.183 37.7532 37.2146 37.7438C41.7028 36.393 45.9304 34.2933 49.7187 31.5334C49.7372 31.5204 49.7527 31.5037 49.7642 31.4843C49.7757 31.4649 49.7829 31.4433 49.7854 31.4209C50.8271 20.8084 48.0396 11.5875 42.3917 3.41669C42.3778 3.39014 42.3549 3.36944 42.3271 3.35836ZM16.7083 25.8292C14.2458 25.8292 12.2146 23.6021 12.2146 20.8709C12.2146 18.1375 14.2062 15.9125 16.7083 15.9125C19.2292 15.9125 21.2417 18.1563 21.2021 20.8709C21.2021 23.6042 19.2104 25.8292 16.7083 25.8292V25.8292ZM33.3229 25.8292C30.8583 25.8292 28.8292 23.6021 28.8292 20.8709C28.8292 18.1375 30.8187 15.9125 33.3229 15.9125C35.8437 15.9125 37.8562 18.1563 37.8167 20.8709C37.8167 23.6042 35.8458 25.8292 33.3229 25.8292V25.8292Z" fill="#363636"/>
              </svg>
              <span>Discord</span>
            </a>
          </li>
          <li>
            <a href="/" class="flex flex-col justify-center text-2xl font-medium gap-6">
              <svg width="50" height="50" class="mx-auto" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 13.4912C16.416 13.4912 13.4912 16.416 13.4912 20C13.4912 23.584 16.416 26.5088 20 26.5088C23.584 26.5088 26.5088 23.584 26.5088 20C26.5088 16.416 23.584 13.4912 20 13.4912ZM39.5215 20C39.5215 17.3047 39.5459 14.6338 39.3945 11.9433C39.2432 8.81835 38.5303 6.04491 36.2451 3.75975C33.9551 1.46971 31.1865 0.761706 28.0615 0.610339C25.3662 0.458972 22.6953 0.483386 20.0049 0.483386C17.3096 0.483386 14.6387 0.458972 11.9482 0.610339C8.82323 0.761706 6.04979 1.4746 3.76464 3.75975C1.4746 6.04979 0.766589 8.81835 0.615222 11.9433C0.463855 14.6387 0.488269 17.3096 0.488269 20C0.488269 22.6904 0.463855 25.3662 0.615222 28.0566C0.766589 31.1816 1.47948 33.9551 3.76464 36.2402C6.05468 38.5303 8.82323 39.2383 11.9482 39.3896C14.6435 39.541 17.3144 39.5166 20.0049 39.5166C22.7002 39.5166 25.3711 39.541 28.0615 39.3896C31.1865 39.2383 33.9599 38.5254 36.2451 36.2402C38.5351 33.9502 39.2432 31.1816 39.3945 28.0566C39.5508 25.3662 39.5215 22.6953 39.5215 20V20ZM20 30.0146C14.458 30.0146 9.98534 25.542 9.98534 20C9.98534 14.458 14.458 9.98534 20 9.98534C25.542 9.98534 30.0146 14.458 30.0146 20C30.0146 25.542 25.542 30.0146 20 30.0146ZM30.4248 11.914C29.1308 11.914 28.0859 10.8691 28.0859 9.57518C28.0859 8.28124 29.1308 7.23632 30.4248 7.23632C31.7187 7.23632 32.7637 8.28124 32.7637 9.57518C32.764 9.88244 32.7038 10.1867 32.5864 10.4707C32.469 10.7546 32.2967 11.0126 32.0795 11.2299C31.8622 11.4471 31.6042 11.6194 31.3203 11.7368C31.0364 11.8542 30.732 11.9144 30.4248 11.914V11.914Z" fill="#363636"/>
              </svg>
              <span>Instagram</span>
            </a>
          </li>
        </ul>
      </Container>
    </section>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>

<style lang="scss">
.hero__text {
  width: min(700px, 100%);
}
.hero__text h1 {
  line-height: 3rem !important;
}
.hero-bg-icon {
  @apply absolute z-0;

  @for $i from 1 through 8 {
    &:nth-child(#{$i}) {
      animation: flying 2s cubic-bezier(0.45, 0, 0.55, 1) infinite alternate;
      animation-delay: calc(.5s * #{$i});
    }
  }

  &:nth-child(1) {
    left: 18%;
    top: 220px;
    width: 50px;
  }
  &:nth-child(2) {
    left: 10%;
    top: 100px;
  }
  &:nth-child(3) {
    left: 19%;
    top: 380px;
  }
  &:nth-child(4) {
    left: 5%;
    top: 320px;
  }
  &:nth-child(5) {
    right: 9%;
    top: 420px;
  }
  &:nth-child(6) {
    right: 5%;
    top: 220px;
  }
  &:nth-child(7) {
    right: 20%;
    top: 300px;
  }
  &:nth-child(8) {
    right: 15%;
    top: 100px;
  }
}
.text-primary-gradient {
  background: linear-gradient(-45deg, #4b27cf, #4457FD);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
