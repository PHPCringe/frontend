<script lang="ts" setup>
const userStore = useUserStore()
const login = userStore.useLogin()

const axios: any = inject('axios')
</script>

<template>
  <div flex items-center justify-center my-28>
    <div class="card-login | w-full lg:w-128 rounded-sm text-left p-6 bg-white">
      <h1 class="text-3xl mb-5 font-semibold text-black">
        Welcome Back
      </h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      <alert v-if="login.isSuccess.value !== null" :message="login.message.value" :type="login.isSuccess.value == true ? 'success' : 'danger'" />

      <form class="my-5 mb-10" @submit.prevent="login.login">
        <form-input v-model="login.email.value" label="Email" placeholder="john.doe@gmail.com" />
        <form-input v-model="login.password.value" label="Password" placeholder="********"  type="password"/>
        <FormButton :block="true" type="submit">
          Sign in
        </FormButton>
      </form>

      <p class="text-center">
        Do not have an account? <router-link to="/auth/register" class="text-link">
          Sign Up
        </router-link>
      </p>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
