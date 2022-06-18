<template>
<div flex items-center justify-center my-28>
    <div class="card-login | w-full lg:w-128 rounded-sm p-6 bg-white">
        <h1 class="text-3xl mb-5 font-semibold text-black">Welcome Back</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

        <form class="my-5 mb-10">
            <form-input label="Email" placeholder="john.doe@gmail.com"></form-input>
            <form-input label="Password" placeholder="********"></form-input>
            <FormButton :block="true">Sign in</FormButton>
        </form>

        <p class="text-center">Do not have an account? <router-link to="/auth/register" class="text-link">Sign Up</router-link></p>
    </div>
</div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
