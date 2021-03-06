<script lang="ts" setup>
const emit = defineEmits(['click'])
const props = defineProps({
  avatar: {
    type: String,
    default: '/images/avatar.png',
  },
  background: {
    type: String,
    default: '/background.png',
  },
  name: {
    type: String,
    default: 'Github',
  },
  tags: {
    type: Array,
    default: () => ['Open Source', 'Coding'],
  },
  is: {
    type: String,
    default: 'collective',
  },
  bio: {
    type: String,
    default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ',
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
    default: 'Rp',
  },
  collectiveName: {
    type: String,
    default: ""
  },
  contributors: {
    type: Array,
    default: [
      {
        name: 'Andi',
        avatar_url: '/images/avatar.png',
      },
      {
        name: 'Andi',
        avatar_url: '/images/avatar.png',
      },
      {
        name: 'Andi',
        avatar_url: '/images/avatar.png',
      },
    ],
  },
})
function convertToSlug(Text: string) {
  return Text.toLowerCase()
             .replace(/ /g, '-')
             .replace(/[^\w-]+/g, '');
}

const url = props.is == "collective" ? `/collectives/${convertToSlug(props.name)}` : `/collectives/${convertToSlug(props.collectiveName)}/contribute/${convertToSlug(props.name)}`

const numberFormat = (num: number) => {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 1 }).format(num)
}
</script>

<template>
  <div class="card rounded-lg hover:shadow-2xl transition duration-200">
    <div class="card-bg | relative h-20 xl:h-32 rounded-t-lg bg-cover"
      :style="{ backgroundImage: `url(${background})` }">
      <img :src="avatar" :alt="`Image for ${name} `"
        class="avatar-img absolute w-16 h-16 p-1 bg-white rounded-full object-cover">
    </div>
    <div class="card-content | pt-8 px-5">
      <h3 class="text-2xl font-semibold">
        {{ name }}
      </h3>

      <!-- Tags -->
      <ul class="flex gap-0.5 my-3 flex-wrap">
        <li v-for="tag in tags">
          <router-link :to="`/ tags / ${tag} `" class="tag p-1 sm:px-2 px-1 bg-slate-200 rounded-full text-xs">
            {{ tag }}
          </router-link>
        </li>
      </ul>

      <!-- About -->
      <h5 class="text-lg font-semibold text-gray-700 my-2">
        About
      </h5>
      <p class="bio | overflow-hidden text-ellipsis text-xs">
        {{ bio }}
      </p>

      <template v-if="is == 'collective'">
        <!-- Donation -->
        <p class="text-xs mt-3">
          <span class="font-bold">{{ numberFormat(totalDonation) }}</span>
          <span class="text-gray-400"> of Rp 1 million Goals</span>
        </p>

        <!-- Progress bar -->
        <progress-bar class="my-4" />
      </template>
      <template v-else>
        <slot name="belowAbout" />
      </template>

      <!-- Avatars -->
      <div class="avatars | flex">
        <div class="avatar ">
          <img src="/images/person1.jpg" alt="Github has donated"
            class="w-9 h-9 p-1 bg-white rounded-full object-cover">
        </div>
        <div class="avatar ml--3">
          <img src="/images/person2.jpg" alt="Github has donated"
            class="w-9 h-9 p-1 bg-white rounded-full object-cover">
        </div>
        <div class="ml-2 text-xs">
          <p>10+</p>
          <p class="text-slate-500">
            Contributors
          </p>
        </div>
      </div>

      <!-- Donate link -->
      <router-link :to="url"
        class="bg-gradient-primary text-white block text-center p-2 text-sm mt-4 rounded-md" @click="emit('click')">
        Donate Now
      </router-link>
    </div>
  </div>
</template>

<style lang="scss">
.card {
  .avatar-img {
    bottom: -20px;
    left: 15px;
  }

  .bio {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}
</style>
