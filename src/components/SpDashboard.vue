<script setup lang="ts">
import { onMounted, computed, ref } from 'vue'
import { useRouter } from "vue-router";
import createModal from './createModal.vue'
import provinceForm from './provinceForm.vue'
import { useAppStore } from '../stores/appStore'


const $router = useRouter()
const store = useAppStore()
const showModal = ref(false)
const modalAction = ref('')

const user = computed(() => {
  return store.user
})

const handleSignUpNavigate = () => {
  $router.push({ name: "SignUp" })
}

const handleOpenModal = (action: string) => {
  modalAction.value = action
  showModal.value = true
}

const handleClose = () => {
  showModal.value = false
}

onMounted(() => {
  // console.log(store.user)
  // console.log(localStorage.getItem('token'))
})


</script>

<template>
  <div class="h-screen">
    <div class="flex justify-between px-5">
      <img src="../assets/wsf-logo.png" alt="winners logo" class="h-20 w-20 p-3" />
      <p class="mt-8 text-4xl mr-20">Living Faith Church WSF Platform</p>
      <span class="cursor-pointer material-icons my-auto text-gray-700 text-5xl fw-900 ">
        account_circle
      </span>
    </div>

    <div class="flex mt-10 mx-10 flex-col">
      <div>
        <span class="text-4xl font-bold">Hello, {{ user.lastName }}!</span>
      </div>
      <div class="w-full flex items-center justify-between gap-7 mt-5">
        <div @click="handleOpenModal('Province')"
          class="flex justify-center items-center text-white shadow-lg hover:animate-pulse gap-3 text-2xl bg-accentColor cursor-pointer border-accentColor w-[300px] h-[100px]">

          <span class="material-icons">
            add_circle
          </span>
          <span>
            Add province
          </span>
        </div>
        <div
          class="flex justify-center items-center text-white  shadow-lg hover:animate-pulse gap-3 text-2xl bg-accentColor cursor-pointer border-accentColor w-[300px] h-[100px]">
          <span class="material-icons">
            add_circle
          </span>
          <span>
            Add Area
          </span>
        </div>
        <div
          class="flex justify-center items-center text-white shadow-lg hover:animate-pulse gap-3 text-2xl bg-accentColor cursor-pointer border-accentColor w-[300px] h-[100px]">
          <span class="material-icons text-4xl">
            add_circle
          </span>
          <span>
            Add Zone
          </span>
        </div>
        <div
          class="flex justify-center items-center text-white shadow-lg hover:animate-pulse gap-3 text-2xl bg-accentColor cursor-pointer border-accentColor w-[300px] h-[100px]">
          <span class="material-icons">
            add_circle
          </span>
          <span>
            Add Cell
          </span>
        </div>
      </div>
    </div>

  </div>

  <createModal v-if="showModal" @update:close="handleClose">
    <template #header>
      Create {{ modalAction }}
    </template>
    <provinceForm v-if="modalAction === 'Province'"></provinceForm>
  </createModal>
</template>

<style scoped></style>
