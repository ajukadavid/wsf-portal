<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref } from 'vue'
import { handleLogin } from '../composables/auth/useAuth'
const email = ref('diamondtivere@yahoo.com')
const password = ref('honest')
const $router = useRouter()

const userLogin = async () => {
  const data = await handleLogin(email.value, password.value)
  $router.push('/')
}

</script>

<template>
  <main class="grid h-screen place-items-center">
    <form @submit.prevent="">
      <div class="grid justify-items-center mb-5">
        <p class="font-extrabold">Log in</p>
      </div>
      <p>Enter your email and password to sign in</p>
      <div class="w-80">
        <input type="email" v-model="email" placeholder="Email" class="mt-6 p-4 w-full shadow-md rounded border-0" />
        <input type="password" v-model="password" placeholder="Password"
          class="mt-6 p-4 w-full shadow-md rounded border-0" />

      </div>
      <button @click="userLogin" type="submit"
        class="bg-buttonColor ml-2 rounded font-bold text-white px-32 mt-8 py-4">Submit</button>
      <div class="mt-3 ml-2">
        <span>Don't have an account? </span> <span @click="$router.push({ name: 'SignUp' })"
          class="text-blue-500 cursor-pointer">Sign up</span>
      </div>
    </form>

  </main>
</template>

<style scoped>
input::placeholder {
  color: black
}

.switch {
  position: relative;
  display: inline-block;
  width: 20px;
  height: 14px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked+.slider {
  background-color: #000000;
}

input:focus+.slider {
  box-shadow: 0 0 1px #000000;
}

input:checked+.slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>