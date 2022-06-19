<script setup lang="ts">
import NavigationBar from '~/components/NavigationBar.vue'
const user = useUserStore()
const name = $ref(user.savedName)

const router = useRouter()
const go = () => {
  if (name)
    router.push(`/hi/${encodeURIComponent(name)}`)
}
const store = useMainStore()
const featuredProjects = store.projects.slice(0,7)
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
        <h1 class="text-4xl">Collect Your Funding Project <br>With <span class="text-primary-gradient">Kolektiva</span>
        </h1>
        <p class="hero__text-desc | font-medium text-gray-600 mt-6">Kolektiva is a crowdfunding website where individuals can donate and raise funds for their organizations, events, or projects.
        </p>
      </div>
      <div class="hero__button | mt-12 z-2 relative">
        <router-link to="/auth/register"
          class="btn btn-outline border border-2 text-primary-gradient font-semibold border-indigo-600">Start Funding
        </router-link>
        <router-link to="/auth/sign-in" class="btn btn-gradient ml-5">Donate Now</router-link>
      </div>
    </section>


    <!-- Section: Featured Projects -->
    <section class="featured-projects text-left" id="featured">
      <Container>
        <div class="section-header">
          <h1 class="section-title | text-3xl font-semibold mb-3">Featured Projects</h1>
          <p class="section-desc text-base text-gray-500">Projects that people loved</p>
        </div>
        <div class="section-body">
          <div class="flex flex-wrap flex-row row">
            <collective-card v-for="project in featuredProjects" :avatar="project.avatar"
              :background="project.background" :name="project.name" :tags="project.tags" :bio="project.bio"
              :totalDonation="project.totalDonation" :targetDonation="project.targetDonation" class="w-full md:w-1/4">
            </collective-card>

            <div class="w-full md:w-1/4 flex items-center flex-col justify-center py-12">
              <h3 class="text-3xl text-center font-semibold">Discover More Fundraiser</h3>
              <router-link :to="`/discover`"
                class="bg-gradient-primary text-white block text-center py-3 px-5 mt-4 rounded-md text-lg">Find More
              </router-link>
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
              <img class="h-full object-cover" src="/images/person3.png" alt="">
              <div
                class="small-square | flex justify-center items-center bg-white w-28 aspect-square right--16 top--8 shadow-lg absolute rounded-lg">
                <svg width="82" height="72" viewBox="0 0 82 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M68.5469 0.988576C69.7512 -0.329502 71.6987 -0.329502 72.7878 0.988436L80.9878 9.98717C81.6797 10.62 82 11.4792 82 12.3736C82 13.2694 81.6797 14.1328 80.9878 14.639L72.7878 23.639C71.6987 25.0734 69.7512 25.0734 68.5469 23.639C67.3553 22.4437 67.3553 20.3062 68.5469 18.9844L71.5066 15.6234H49.2C47.4959 15.6234 46.125 14.2312 46.125 12.3736C46.125 10.5103 47.4959 8.99858 49.2 8.99858L71.5066 8.87342L68.5469 5.76139C67.3553 4.44373 67.3553 2.30623 68.5469 0.988576V0.988576ZM13.3378 52.889L10.4986 56.25L32.6847 56.1234C34.5041 56.1234 35.7597 57.7547 35.7597 59.4984C35.7597 61.4812 34.5041 62.8734 32.6847 62.8734L10.4998 63L13.3378 66.2344C14.6447 67.5562 14.6447 69.6937 13.3378 70.889C12.2487 72.3234 10.3012 72.3234 9.10072 70.889L0.900591 61.889C0.3239 61.3828 -0.000128087 60.525 3.79823e-08 59.4984C3.79823e-08 58.725 0.324028 57.8672 0.900719 57.2344L9.10072 48.2344C10.3012 46.9265 12.2487 46.9265 13.3378 48.2344C14.6447 49.5562 14.6447 51.6937 13.3378 52.889V52.889ZM12.1847 8.99998H43.2934C42.8066 10.0097 42.5375 11.1572 42.5375 12.2484C42.5375 16.4109 45.5228 19.5609 49.2 19.5609H61.6409C62.0637 22.1484 63.4091 24.2578 65.2669 25.5797C65.4847 25.9172 65.7409 26.2406 66.01 26.55C68.6109 29.4047 72.8391 29.4047 75.44 26.55L77.9 23.8359V54C77.9 58.964 74.2228 63 69.7 63H38.7066C39.1934 61.9875 39.3472 60.8484 39.3472 59.4984C39.3472 55.589 36.4772 52.1859 32.6847 52.1859L20.3591 52.3125C19.9234 49.8515 18.5909 47.7422 16.7331 46.4203C16.5153 46.0828 16.2591 45.7594 15.99 45.45C13.3891 42.5953 9.16606 42.5953 6.56384 45.45L3.98469 48.164V18C3.98469 13.0289 7.77078 8.99998 12.1847 8.99998ZM12.1847 27C16.8228 27 20.3847 22.964 20.3847 18H12.1847V27ZM69.7 54V45C65.1772 45 61.5 49.0359 61.5 54H69.7ZM40.8847 49.5C47.7906 49.5 53.3 43.4531 53.3 36C53.3 28.4203 47.7906 22.5 40.8847 22.5C34.0941 22.5 28.5847 28.4203 28.5847 36C28.5847 43.4531 34.0941 49.5 40.8847 49.5Z"
                    fill="url(#paint0_linear_118_2431)" />
                  <defs>
                    <linearGradient id="paint0_linear_118_2431" x1="-3.86876" y1="35.9824" x2="90.538" y2="35.9824"
                      gradientUnits="userSpaceOnUse">
                      <stop stop-color="#942BFD" />
                      <stop offset="1" stop-color="#4457FD" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div
                class="small-square | flex justify-center items-center bg-white w-28 aspect-square left--16 top-24 shadow-lg absolute rounded-lg">
                <svg width="70" height="66" viewBox="0 0 70 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.66683 65.7502H40.5352C42.5068 65.7512 44.4554 65.3251 46.2466 64.5012C48.0379 63.6772 49.6294 62.4749 50.9116 60.9771L68.3434 40.6411C68.7084 40.216 68.9633 39.7077 69.0856 39.1609C69.2079 38.6141 69.1938 38.0456 69.0446 37.5055C68.8954 36.9654 68.6156 36.4703 68.23 36.0638C67.8444 35.6573 67.3647 35.3519 66.8332 35.1744L60.1093 32.9331C58.4841 32.4049 56.7538 32.2853 55.0715 32.5851C53.3892 32.8849 51.8067 33.5947 50.464 34.6517L39.5819 43.3539L37.4738 39.1344C36.3445 36.8598 34.6008 34.947 32.4402 33.6124C30.2796 32.2779 27.7885 31.5751 25.249 31.5835H7.66683C3.89825 31.5835 0.833496 34.6483 0.833496 38.4169V58.9169C0.833496 62.6854 3.89825 65.7502 7.66683 65.7502ZM7.66683 38.4169H25.249C27.8559 38.4169 30.1963 39.8621 31.3614 42.1923L32.8887 45.2502H17.9168V52.0835H38.4647C38.9903 52.0766 39.5072 51.9479 39.9748 51.7077L39.9851 51.7043L39.9987 51.6974H40.009L40.0158 51.694H40.0295L40.0329 51.6906C40.0637 51.7009 40.0432 51.6872 40.0432 51.6872C40.0773 51.6872 40.05 51.6838 40.05 51.6838H40.0534L40.0602 51.6804L40.0705 51.6769L40.0773 51.6735L40.0842 51.6701L40.0944 51.6667L40.1012 51.6633C40.1115 51.6633 40.1047 51.6599 40.1081 51.6599L40.1183 51.653L40.1252 51.6496L40.132 51.6462L40.1422 51.6428L40.1491 51.6394H40.1525L40.1593 51.6359H40.1627L40.1696 51.6325L40.1764 51.6291C40.2072 51.6257 40.1867 51.6257 40.1867 51.6257L40.1935 51.6223C40.3252 51.5428 40.4508 51.4537 40.5693 51.3558L54.7348 40.0227C55.63 39.312 56.8634 39.0899 57.9465 39.4521L59.8496 40.0876L45.7285 56.5662C45.0789 57.3038 44.28 57.8948 43.3846 58.3C42.4893 58.7053 41.518 58.9156 40.5352 58.9169H7.66683V38.4169V38.4169ZM48.6668 0.833528H48.6087C48.0518 0.840362 45.1716 0.966778 41.8335 3.24228C38.5842 1.02828 35.7723 0.850611 35.1095 0.836945L35.007 0.833528H34.9933C32.2566 0.833528 29.6804 1.90295 27.7534 3.83336C25.8196 5.77061 24.7502 8.34336 24.7502 11.0835C24.7502 13.8237 25.8196 16.3964 27.6919 18.2722L39.3564 30.5244C39.6773 30.8575 40.0622 31.1225 40.488 31.3033C40.9137 31.4842 41.3716 31.5773 41.8342 31.5769C42.2968 31.5766 42.7546 31.4829 43.1801 31.3015C43.6056 31.12 43.9901 30.8545 44.3106 30.5209L55.9136 18.3303C57.8508 16.3964 58.9168 13.8237 58.9168 11.0835C58.9168 8.34336 57.8474 5.77061 55.917 3.83678C54.9683 2.88197 53.8396 2.12489 52.5963 1.60937C51.3529 1.09385 50.0196 0.830146 48.6737 0.833528H48.6668ZM52.0835 11.0835C52.0835 11.9958 51.7282 12.8534 51.0209 13.5606L41.8335 23.2127L32.5846 13.4991C31.9388 12.8534 31.5835 11.9958 31.5835 11.0835C31.5835 10.1713 31.9388 9.31369 32.588 8.66453C33.2058 8.03605 34.0472 7.67742 34.9284 7.66686C35.0138 7.67028 36.6436 7.7762 38.574 9.32395C38.8507 9.54603 39.1309 9.79886 39.4179 10.0824L41.8335 12.498L44.2491 10.0824C44.5361 9.79886 44.8162 9.54603 45.093 9.32395C46.9004 7.87186 48.4277 7.69078 48.6873 7.67028C49.1327 7.6702 49.5736 7.75832 49.9847 7.92955C50.3957 8.10079 50.7688 8.35175 51.0824 8.66795C51.7282 9.3137 52.0835 10.1713 52.0835 11.0835Z"
                    fill="url(#paint0_linear_118_2437)" />
                  <defs>
                    <linearGradient id="paint0_linear_118_2437" x1="-2.39053" y1="33.2919" x2="76.283" y2="33.2919"
                      gradientUnits="userSpaceOnUse">
                      <stop stop-color="#942BFD" />
                      <stop offset="1" stop-color="#4457FD" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div
                class="small-square | flex justify-center items-center bg-white w-28 aspect-square right--16 top-64 shadow-lg absolute rounded-lg">
                <svg width="62" height="70" viewBox="0 0 62 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M22.4041 30.7001C22.9743 30.1287 23.6518 29.6755 24.3976 29.3666C25.1434 29.0578 25.9429 28.8993 26.7501 28.9002H47.2501C48.8812 28.9002 50.4454 29.5481 51.5988 30.7015C52.7521 31.8548 53.4001 33.4191 53.4001 35.0502V51.4502C53.4001 53.0813 52.7521 54.6456 51.5988 55.7989C50.4454 56.9523 48.8812 57.6002 47.2501 57.6002H33.3962L31.1002 55.3042C32.2883 52.8211 32.9034 50.1029 32.9001 47.3502V53.5002H47.2501C47.7938 53.5002 48.3152 53.2842 48.6997 52.8998C49.0841 52.5153 49.3001 51.9939 49.3001 51.4502V45.3002H32.9001V47.3502C32.907 43.1276 31.4591 39.0315 28.8001 35.7513V33.0002H26.7501C26.5488 32.9995 26.3485 33.0286 26.1556 33.0863C25.0058 32.1427 23.7462 31.3415 22.4041 30.7001ZM49.3001 35.0502C49.3001 34.5065 49.0841 33.9851 48.6997 33.6006C48.3152 33.2162 47.7938 33.0002 47.2501 33.0002H32.9001V41.2002H49.3001V35.0502ZM16.5001 29.0109C15.1376 28.8603 13.7626 28.8603 12.4001 29.0109V8.4002C12.4001 6.22542 13.264 4.13972 14.8018 2.60192C16.3396 1.06412 18.4253 0.200195 20.6001 0.200195H39.4027C41.0332 0.201631 42.5965 0.850517 43.7487 2.0042L59.8002 18.0516C60.9524 19.2045 61.5997 20.7677 61.6001 22.3976V57.6002C61.6001 59.775 60.7362 61.8607 59.1984 63.3985C57.6606 64.9363 55.5749 65.8002 53.4001 65.8002H40.7516C40.4456 64.936 39.9496 64.1514 39.3002 63.5042L37.4962 61.7002H53.4001C54.4875 61.7002 55.5303 61.2682 56.2992 60.4993C57.0681 59.7304 57.5001 58.6876 57.5001 57.6002V24.8002H43.1501C41.519 24.8002 39.9547 24.1523 38.8014 22.9989C37.648 21.8456 37.0001 20.2813 37.0001 18.6502V4.3002H20.6001C19.5127 4.3002 18.4699 4.73216 17.701 5.50106C16.9321 6.26996 16.5001 7.31281 16.5001 8.4002V29.0109ZM43.1501 20.7002H56.6514L41.1001 5.1489V18.6502C41.1001 19.1939 41.3161 19.7153 41.7005 20.0998C42.085 20.4842 42.6064 20.7002 43.1501 20.7002ZM25.9424 55.9438C28.115 53.0383 29.1065 49.4177 28.7173 45.8106C28.328 42.2036 26.587 38.8778 23.8445 36.5027C21.102 34.1276 17.5617 32.8795 13.936 33.0094C10.3104 33.1394 6.8685 34.6378 4.30312 37.2032C1.73774 39.7686 0.239285 43.2105 0.109317 46.8361C-0.0206515 50.4618 1.22752 54.0021 3.60263 56.7446C5.97774 59.4871 9.30348 61.2281 12.9105 61.6174C16.5176 62.0066 20.1382 61.0151 23.0437 58.8425L33.4987 69.2975C33.689 69.4881 33.915 69.6394 34.1638 69.7426C34.4126 69.8459 34.6793 69.8991 34.9486 69.8993C35.218 69.8995 35.4848 69.8466 35.7337 69.7437C35.9826 69.6408 36.2088 69.4899 36.3994 69.2996C36.59 69.1092 36.7413 68.8832 36.8445 68.6344C36.9478 68.3856 37.001 68.119 37.0012 67.8496C37.0014 67.5802 36.9486 67.3135 36.8457 67.0646C36.7427 66.8156 36.5918 66.5894 36.4015 66.3988L25.9465 55.9438H25.9424ZM24.7001 47.3502C24.7001 50.0687 23.6202 52.6758 21.6979 54.598C19.7757 56.5203 17.1686 57.6002 14.4501 57.6002C11.7316 57.6002 9.1245 56.5203 7.20225 54.598C5.28 52.6758 4.2001 50.0687 4.2001 47.3502C4.2001 44.6317 5.28 42.0246 7.20225 40.1024C9.1245 38.1801 11.7316 37.1002 14.4501 37.1002C17.1686 37.1002 19.7757 38.1801 21.6979 40.1024C23.6202 42.0246 24.7001 44.6317 24.7001 47.3502Z"
                    fill="url(#paint0_linear_118_2434)" />
                  <defs>
                    <linearGradient id="paint0_linear_118_2434" x1="-2.80147" y1="35.0498" x2="68.0036" y2="35.0498"
                      gradientUnits="userSpaceOnUse">
                      <stop stop-color="#942BFD" />
                      <stop offset="1" stop-color="#4457FD" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div
                class="small-square | flex justify-center items-center bg-white w-28 aspect-square left--16 bottom--8 shadow-lg absolute rounded-lg">
                <svg width="64" height="76" viewBox="0 0 64 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M62.1808 13.8554C57.0192 12.4778 51.9767 10.6878 47.1019 8.50261C42.3059 6.42213 37.6761 3.97777 33.253 1.19095L32.0002 0.416504L30.7702 1.21373C26.3471 4.00055 21.7173 6.4449 16.9213 8.52539C12.0384 10.704 6.98827 12.4864 1.81966 13.8554L0.111328 14.2882V33.2848C0.111328 63.7843 30.9297 75.1959 31.2258 75.3098L32.0002 75.5832L32.7747 75.3098C33.0936 75.3098 63.8891 63.8071 63.8891 33.2848V14.2882L62.1808 13.8554ZM51.7713 29.0026L26.3286 53.7165L11.933 39.2982C11.3289 38.6941 10.9895 37.8747 10.9895 37.0204C10.9895 36.1661 11.3289 35.3467 11.933 34.7426C12.5371 34.1385 13.3564 33.7991 14.2108 33.7991C15.0651 33.7991 15.8844 34.1385 16.4886 34.7426L26.3969 44.8332L47.3297 24.3332C47.6288 24.034 47.9839 23.7968 48.3747 23.6349C48.7655 23.473 49.1844 23.3897 49.6074 23.3897C50.0305 23.3897 50.4493 23.473 50.8402 23.6349C51.231 23.7968 51.5861 24.034 51.8852 24.3332C52.1843 24.6323 52.4216 24.9874 52.5835 25.3782C52.7454 25.769 52.8287 26.1879 52.8287 26.6109C52.8287 27.034 52.7454 27.4528 52.5835 27.8437C52.4216 28.2345 52.1843 28.5896 51.8852 28.8887L51.7713 29.0026Z"
                    fill="url(#paint0_linear_118_2427)" />
                  <defs>
                    <linearGradient id="paint0_linear_118_2427" x1="-2.89771" y1="37.9998" x2="70.5297" y2="37.9998"
                      gradientUnits="userSpaceOnUse">
                      <stop stop-color="#942BFD" />
                      <stop offset="1" stop-color="#4457FD" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
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
                <p class="ml-10 text-gray-500"> Refers to the systems deployed by a business to process, pay, and audit employee-initiated expenses. Expense management includes the policies and procedures.</p>
                <router-link to="/" class="text-link ml-10 my-5 inline-block flex gap-2 items-center">Learn More <div
                    i="carbon-arrow-right"></div>
                </router-link>
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
                <p class="ml-10 text-gray-500"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                <router-link to="/" class="text-link ml-10 my-5 inline-block flex gap-2 items-center">Learn More <div
                    i="carbon-arrow-right"></div>
                </router-link>
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
                <p class="ml-10 text-gray-500"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                <router-link to="/" class="text-link ml-10 my-5 inline-block flex gap-2 items-center">Learn More <div
                    i="carbon-arrow-right"></div>
                </router-link>
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
                <p class="ml-10 text-gray-500"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                <router-link to="/" class="text-link ml-10 my-5 inline-block flex gap-2 items-center">Learn More <div
                    i="carbon-arrow-right"></div>
                </router-link>
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
            <p class="mt-10 w-60%">Kolektiva is a crowdfunding website where individuals can donate and raise funds for their organizations, events, or projects.</p>
            <router-link to="/"
              class="bg-gradient-primary px-5 inline-block py-2 text-lg mt-12 rounded-lg text-white font-bold">
              Learn More</router-link>

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
              <svg id="Livello_1" class="mx-auto" width="50" height="50" data-name="Livello 1"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 240 240">
                <defs>
                  <linearGradient id="linear-gradient" x1="120" y1="240" x2="120" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stop-color="#363636" />
                    <stop offset="1" stop-color="#363636" />
                  </linearGradient>
                </defs>
                <title>Telegram_logo</title>
                <circle cx="120" cy="120" r="120" fill="url(#linear-gradient)" />
                <path
                  d="M81.229,128.772l14.237,39.406s1.78,3.687,3.686,3.687,30.255-29.492,30.255-29.492l31.525-60.89L81.737,118.6Z"
                  fill="#c8daea" />
                <path d="M100.106,138.878l-2.733,29.046s-1.144,8.9,7.754,0,17.415-15.763,17.415-15.763"
                  fill="#a9c6d8" />
                <path
                  d="M81.486,130.178,52.2,120.636s-3.5-1.42-2.373-4.64c.232-.664.7-1.229,2.1-2.2,6.489-4.523,120.106-45.36,120.106-45.36s3.208-1.081,5.1-.362a2.766,2.766,0,0,1,1.885,2.055,9.357,9.357,0,0,1,.254,2.585c-.009.752-.1,1.449-.169,2.542-.692,11.165-21.4,94.493-21.4,94.493s-1.239,4.876-5.678,5.043A8.13,8.13,0,0,1,146.1,172.5c-8.711-7.493-38.819-27.727-45.472-32.177a1.27,1.27,0,0,1-.546-.9c-.093-.469.417-1.05.417-1.05s52.426-46.6,53.821-51.492c.108-.379-.3-.566-.848-.4-3.482,1.281-63.844,39.4-70.506,43.607A3.21,3.21,0,0,1,81.486,130.178Z"
                  fill="#fff" />
              </svg>
              <span>Telegram</span>
            </a>
          </li>
          <li>
            <a href="/" class="flex flex-col justify-center text-2xl font-medium gap-6">
              <svg width="60" height="50" class="mx-auto" viewBox="0 0 50 34" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M48.9583 5.55625C48.6752 4.54631 48.1237 3.63197 47.3625 2.91041C46.5798 2.16667 45.6204 1.63465 44.575 1.36458C40.6625 0.333329 24.9875 0.333329 24.9875 0.333329C18.4528 0.25898 11.9196 0.585984 5.425 1.3125C4.37956 1.60252 3.42201 2.14643 2.6375 2.89583C1.86667 3.6375 1.30833 4.55208 1.01667 5.55416C0.316027 9.32863 -0.0243916 13.1611 6.93102e-09 17C-0.025 20.8354 0.314583 24.6667 1.01667 28.4458C1.30208 29.4437 1.85833 30.3542 2.63125 31.0896C3.40417 31.825 4.36667 32.3562 5.425 32.6375C9.38958 33.6667 24.9875 33.6667 24.9875 33.6667C31.5305 33.7411 38.072 33.4141 44.575 32.6875C45.6204 32.4174 46.5798 31.8854 47.3625 31.1417C48.1235 30.4203 48.6743 29.5058 48.9563 28.4958C49.6752 24.7228 50.0248 20.8887 50 17.0479C50.0541 13.1908 49.705 9.33867 48.9583 5.55416V5.55625ZM20.0042 24.1333V9.86875L33.0458 17.0021L20.0042 24.1333Z"
                  fill="#363636" />
              </svg>
              <span>Youtube</span>
            </a>
          </li>
          <li>
            <a href="/" class="flex flex-col justify-center text-2xl font-medium gap-6">
              <svg width="60" height="50" viewBox="0 0 50 38" class="mx-auto" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M42.3271 3.35836C39.1396 1.92086 35.7229 0.85836 32.15 0.254193C32.1182 0.248085 32.0852 0.252021 32.0557 0.265458C32.0263 0.278896 32.0017 0.301169 31.9854 0.329193C31.5479 1.09794 31.0604 2.10003 30.7187 2.89169C26.9294 2.32552 23.0769 2.32552 19.2875 2.89169C18.9069 2.01432 18.4778 1.15883 18.0021 0.329193C17.986 0.300824 17.9616 0.278047 17.9322 0.263902C17.9027 0.249757 17.8697 0.244916 17.8375 0.250026C14.2667 0.854193 10.85 1.91669 7.66041 3.35628C7.63297 3.36779 7.60971 3.38741 7.59374 3.41253C1.11041 12.9438 -0.666672 22.2396 0.206244 31.4188C0.208673 31.4413 0.215652 31.463 0.226754 31.4827C0.237857 31.5024 0.252853 31.5196 0.270828 31.5334C4.05498 34.2884 8.2757 36.3871 12.7562 37.7417C12.7875 37.7513 12.8209 37.7513 12.8521 37.7416C12.8833 37.732 12.9109 37.7131 12.9312 37.6875C13.8954 36.3981 14.7498 35.0301 15.4854 33.5979C15.4956 33.5784 15.5015 33.5568 15.5027 33.5348C15.5038 33.5127 15.5002 33.4907 15.4921 33.4701C15.484 33.4496 15.4716 33.431 15.4557 33.4157C15.4398 33.4004 15.4208 33.3886 15.4 33.3813C14.0542 32.8745 12.7502 32.2629 11.5 31.5521C11.4775 31.5393 11.4586 31.5211 11.4449 31.4991C11.4312 31.4772 11.4232 31.4522 11.4215 31.4264C11.4199 31.4006 11.4247 31.3748 11.4354 31.3512C11.4462 31.3277 11.4627 31.3073 11.4833 31.2917C11.7458 31.0979 12.0083 30.8959 12.2583 30.6938C12.2808 30.6756 12.3079 30.664 12.3366 30.6604C12.3653 30.6567 12.3945 30.661 12.4208 30.6729C20.6021 34.3479 29.4625 34.3479 37.5479 30.6729C37.5743 30.6603 37.6038 30.6554 37.6329 30.6587C37.662 30.662 37.6896 30.6735 37.7125 30.6917C37.9625 30.8959 38.2229 31.0979 38.4875 31.2917C38.5083 31.3069 38.5251 31.3271 38.5362 31.3504C38.5473 31.3738 38.5525 31.3995 38.5513 31.4253C38.55 31.4511 38.5424 31.4762 38.5291 31.4983C38.5158 31.5204 38.4972 31.5389 38.475 31.5521C37.2292 32.2688 35.9333 32.875 34.5729 33.3792C34.552 33.3868 34.533 33.3987 34.5171 33.4143C34.5012 33.4298 34.4888 33.4485 34.4807 33.4692C34.4726 33.4899 34.469 33.5121 34.4702 33.5343C34.4714 33.5565 34.4773 33.5782 34.4875 33.5979C35.2375 35.0292 36.0958 36.3917 37.0396 37.6854C37.0592 37.712 37.0865 37.7318 37.1179 37.7423C37.1492 37.7527 37.183 37.7532 37.2146 37.7438C41.7028 36.393 45.9304 34.2933 49.7187 31.5334C49.7372 31.5204 49.7527 31.5037 49.7642 31.4843C49.7757 31.4649 49.7829 31.4433 49.7854 31.4209C50.8271 20.8084 48.0396 11.5875 42.3917 3.41669C42.3778 3.39014 42.3549 3.36944 42.3271 3.35836ZM16.7083 25.8292C14.2458 25.8292 12.2146 23.6021 12.2146 20.8709C12.2146 18.1375 14.2062 15.9125 16.7083 15.9125C19.2292 15.9125 21.2417 18.1563 21.2021 20.8709C21.2021 23.6042 19.2104 25.8292 16.7083 25.8292V25.8292ZM33.3229 25.8292C30.8583 25.8292 28.8292 23.6021 28.8292 20.8709C28.8292 18.1375 30.8187 15.9125 33.3229 15.9125C35.8437 15.9125 37.8562 18.1563 37.8167 20.8709C37.8167 23.6042 35.8458 25.8292 33.3229 25.8292V25.8292Z"
                  fill="#363636" />
              </svg>
              <span>Discord</span>
            </a>
          </li>
          <li>
            <a href="/" class="flex flex-col justify-center text-2xl font-medium gap-6">
              <svg width="50" height="50" class="mx-auto" viewBox="0 0 40 40" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20 13.4912C16.416 13.4912 13.4912 16.416 13.4912 20C13.4912 23.584 16.416 26.5088 20 26.5088C23.584 26.5088 26.5088 23.584 26.5088 20C26.5088 16.416 23.584 13.4912 20 13.4912ZM39.5215 20C39.5215 17.3047 39.5459 14.6338 39.3945 11.9433C39.2432 8.81835 38.5303 6.04491 36.2451 3.75975C33.9551 1.46971 31.1865 0.761706 28.0615 0.610339C25.3662 0.458972 22.6953 0.483386 20.0049 0.483386C17.3096 0.483386 14.6387 0.458972 11.9482 0.610339C8.82323 0.761706 6.04979 1.4746 3.76464 3.75975C1.4746 6.04979 0.766589 8.81835 0.615222 11.9433C0.463855 14.6387 0.488269 17.3096 0.488269 20C0.488269 22.6904 0.463855 25.3662 0.615222 28.0566C0.766589 31.1816 1.47948 33.9551 3.76464 36.2402C6.05468 38.5303 8.82323 39.2383 11.9482 39.3896C14.6435 39.541 17.3144 39.5166 20.0049 39.5166C22.7002 39.5166 25.3711 39.541 28.0615 39.3896C31.1865 39.2383 33.9599 38.5254 36.2451 36.2402C38.5351 33.9502 39.2432 31.1816 39.3945 28.0566C39.5508 25.3662 39.5215 22.6953 39.5215 20V20ZM20 30.0146C14.458 30.0146 9.98534 25.542 9.98534 20C9.98534 14.458 14.458 9.98534 20 9.98534C25.542 9.98534 30.0146 14.458 30.0146 20C30.0146 25.542 25.542 30.0146 20 30.0146ZM30.4248 11.914C29.1308 11.914 28.0859 10.8691 28.0859 9.57518C28.0859 8.28124 29.1308 7.23632 30.4248 7.23632C31.7187 7.23632 32.7637 8.28124 32.7637 9.57518C32.764 9.88244 32.7038 10.1867 32.5864 10.4707C32.469 10.7546 32.2967 11.0126 32.0795 11.2299C31.8622 11.4471 31.6042 11.6194 31.3203 11.7368C31.0364 11.8542 30.732 11.9144 30.4248 11.914V11.914Z"
                  fill="#363636" />
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
