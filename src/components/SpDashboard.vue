<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from "vue-router";


const $router = useRouter()

const handleSignUpNavigate = () => {
  $router.push({ name: "SignUp" })
}

onMounted(() => {
  console.log(localStorage.getItem('token'))
})


</script>

<template>
  <div class="h-screen bg-gradient-to-b from-red-200 to-red-600">
    <div class="flex justify-between">
      <img src="../assets/wsf-logo.png" alt="winners logo" class="h-20 w-20 ml-5 p-3" />
      <p class="mt-8 text-4xl mr-20">Living Faith Church WSF Platform</p>
      <span class="mr-10 mt-5 cursor-pointer text-white " @click="handleSignUpNavigate">Sign up</span>
    </div>

    <div class="justify-center flex items-center flex-col h-3/4 w-screen">
      <div class="w-2/4">
        <form class="flex items-center">
          <label for="simple-search" class="sr-only">Search</label>
          <div class="relative w-full">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"></path>
              </svg>
            </div>
            <input type="text" id="simple-search"
              class="bg-white border border-gray-300 text-white text-sm rounded-lg focus:ring-red-200 focus:border-red-200 block w-full pl-10 p-2.5  dark:bg-white dark:border-red-600 dark:placeholder-red-400 dark:text-white dark:focus:ring-red-200 dark:focus:border-red-200"
              placeholder="Search" required>
          </div>
          <button type="submit"
            class="p-2.5 ml-2 text-sm font-medium text-white bg-red-400 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-red-400 dark:focus:ring-blue-800">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
            <span class="sr-only">Search</span>
          </button>
        </form>
      </div>


      <div class="grid grid-cols-4 gap-4 w-3/4">
        <div
          class="p-5 mt-10 w-60 bg-white rounded-sm border border-gray-200  drop-shadow-2xl dark:bg-white dark:border-gray-100">
          <div class="flex justify-between">
            <div>
              <span class="material-icons my-auto text-gray-700 text-4xl fw-900">
                man
              </span>
            </div>
            <p class="text-xl mr-4 mt-1">Male Count</p>
          </div>
          <p>50</p>
        </div>
        <div
          class="p-5 mt-10 w-60 bg-white rounded-sm border border-gray-200  drop-shadow-2xl dark:bg-white dark:border-gray-100">
          <div class="flex justify-between">
            <div>
              <span class="material-icons my-auto text-gray-700 text-4xl fw-900">
                woman
              </span>
            </div>
            <p class="text-xl mr-4 mt-1">Female Count</p>
          </div>
          <p>50</p>
        </div>
        <div
          class="p-5 mt-10 w-60 bg-white rounded-sm border border-gray-200  drop-shadow-2xl dark:bg-white dark:border-gray-100">
          <div class="flex justify-between">
            <div>
              <span class="material-icons my-auto text-gray-700 text-4xl fw-900">
                child_care
              </span>
            </div>
            <p class="text-xl mr-4 mt-1">Children</p>
          </div>
          <p>50</p>
        </div>
        <div
          class="p-5 mt-10 w-60 bg-white rounded-sm border border-gray-200  drop-shadow-2xl dark:bg-white dark:border-gray-100">
          <div class="flex justify-between">
            <div>
              <span class="material-icons my-auto text-gray-700 text-4xl fw-900">
                campaign
              </span>
            </div>
            <p class="text-xl mr-4 mt-1">Testimonies</p>
          </div>
          <p>50</p>
        </div>

      </div>
    </div>

  </div>
</template>

<style scoped></style>
