<script setup lang="ts">
import FormRadio from '~/components/forms/FormRadio.vue'
const isNextStep = ref(false)
const gotoNextStep = () => isNextStep.value = true
const router = useRouter()
const userStore = useUserStore()
const register = userStore.useRegister()
</script>

<template>
  <div flex items-center justify-center my-28>
    <Tabs
      :tabs="{
        personal: 'Create Personal Account',
        organization: 'Create Organizational Account',
      }"
    >
      <template #personal>
        <div class="card-login | w-full lg:w-150 rounded-sm p-10 bg-white">
          <h1 class="text-3xl mb-5 font-semibold text-black">
            Join Our Community
          </h1>
          <p class="text-sm mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
          <alert v-if="register.successMessage.value.length" :message="register.successMessage.value" />
          <alert v-if="register.errorMessage.value.length" :message="register.errorMessage.value"  type="danger"/>
          <form class="my-5" @submit.prevent="register.submitRegister('personal')">
            <form-input v-model="register.name.value" label="Display Name" placeholder="Input your display name here" />
            <form-input v-model="register.email.value" label="Email" placeholder="" />
            <form-input v-model="register.password.value" type="password" label="Password" placeholder="" />
            <form-input v-model="register.confirmPassword.value" type="password" label="Confirm Password" placeholder="" />
            <form-button :block="true" type="submit">
              Sign Up
            </form-button>
          </form>

          <p class="text-center mt-10">
            Already have an account? <router-link to="/auth/sign-in" class="text-link text-link-gradient">
              Sign in
            </router-link>
          </p>
        </div>
      </template>
      <template #organization>
        <div class="card-login | w-full lg:w-150 rounded-sm p-10 bg-white">
          <div v-if="!isNextStep">
            <h1 class="text-3xl mb-5 font-semibold text-black">
              Create an Organization
            </h1>
            <p class="text-sm mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>

            <form class="my-5">
              <form-input label="Display Name" placeholder="Input your display name here" />
              <form-input label="Email" placeholder="" />
              <form-input type="password" label="Password" placeholder="" />
              <form-input type="password" label="Confirm Password" placeholder="" />
              <form-button type="button" :block="true" @click="gotoNextStep()">
                Next Step
              </form-button>

              <p class="text-center mt-10">
                Already have an account? <router-link to="/auth/sign-in" class="text-link text-link-gradient">
                  Sign in
                </router-link>
              </p>
            </form>
          </div>
          <div v-else>
            <h1 class="text-3xl mb-5 font-semibold text-black">
              Fill Out Your Organization Data
            </h1>
            <p class="text-sm mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>

            <form class="my-5" @submit.prevent="submitRegister">
              <div class="form-group | mb-5">
                <label for="orgtype" class="block font-bold text-black mb-3">Organization </label>
                <form-radio id="profit" name="orgtype" label="Profit" value="profit" class="mr-3" />
                <form-radio id="nonprofit" name="orgtype" label="Non-profit" value="nonprofit" class="mr-3" />
              </div>
              <form-textarea label="Bio" :rows="3" />
              <form-input type="number" step="1000" label="Donation Goal" placeholder="100.000" prefix="Rp" />
              <form-input label="Website" placeholder="yourwebsite.com" />
              <form-input label="Twitter" placeholder="Your twitter username" prefix="@" />
              <form-textarea label="Description" :rows="6" placeholder="Description about your project" />

              <form-button type="submit" :block="true">
                Sign Up
              </form-button>

              <p class="text-center mt-10">
                Already have an account? <router-link to="/auth/sign-in" class="text-link text-link-gradient">
                  Sign in
                </router-link>
              </p>
            </form>
          </div>
        </div>
      </template>
    </Tabs>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
