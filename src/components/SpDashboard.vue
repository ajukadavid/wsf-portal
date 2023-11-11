<script setup lang="ts">
import { onMounted, computed, ref, reactive } from 'vue'
import { useRouter } from "vue-router";
import createModal from './createModal.vue'
import provinceForm from './provinceForm.vue'
import zoneForm from './zoneForm.vue'
import areaForm from './areaForm.vue';
import { useAppStore } from '../stores/appStore'
import CellForm from './cellForm.vue';
import { getItemWithExpiry } from '../composables/auth/useAuth'
import { getDashboardData } from '../composables/services/apiService'

const $router = useRouter()
const store = useAppStore()
const showModal = ref(false)
const modalAction = ref('')

let dashData = reactive({
  children: '',
  female:'',
  male:'',
  newComers: '',
  testimonies: '',
  total: ''
})


const user = computed(() => {
  let b = getItemWithExpiry("userName")
  return b
})


const handleOpenModal = (action: string) => {
  modalAction.value = action
  showModal.value = true
}

const handleClose = () => {
  showModal.value = false
}

const getDashData = async () => {
  try {
        let res = await getDashboardData()
        dashData = res.data
          } catch {

    }
}

onMounted(() => {
  getDashData()
  let token = localStorage.getItem('token')
  if (!!token) {
    //todo: api call to get user details
  } else {
    $router.push('/')
  }
})


</script>

<template>
  <div class="h-screen flex mt-28 w-fulljustify-center">
    <div class="flex mx-10 flex-col">
      <div>
        <span class="text-4xl font-bold">Hello, {{ user! }}!</span>
      </div>
      <div
        class="w-full  flex pr-4 gap-3 lg:flex-row flex-col items-center justify-between mt-5">
        <div @click="handleOpenModal('Province')"
          class="flex justify-center items-center text-white shadow-lg hover:animate-pulse gap-3 text-2xl bg-accentColor cursor-pointer border-accentColor w-[300px] h-[100px]">
          <span class="material-icons text-4xl">
            add_circle
          </span>
          <span>
            Add province
          </span>
        </div>
        <div @click="handleOpenModal('Area')"
          class="flex justify-center items-center text-white  shadow-lg hover:animate-pulse gap-3 text-2xl bg-accentColor cursor-pointer border-accentColor w-[300px] h-[100px]">
          <span class="material-icons text-4xl">
            add_circle
          </span>
          <span>
            Add Area
          </span>
        </div>
        <div @click="handleOpenModal('Zone')"
          class="flex justify-center items-center text-white shadow-lg hover:animate-pulse gap-3 text-2xl bg-accentColor cursor-pointer border-accentColor w-[300px] h-[100px]">
          <span class="material-icons text-4xl">
            add_circle
          </span>
          <span>
            Add Zone
          </span>
        </div>
        <div @click="handleOpenModal('Cell')"
          class="flex justify-center items-center text-white shadow-lg hover:animate-pulse gap-3 text-2xl bg-accentColor cursor-pointer border-accentColor w-[300px] h-[100px]">
          <span class="material-icons text-4xl">
            add_circle
          </span>
          <span>
            Add Cell
          </span>
        </div>
      </div>
      <div class="flex mt-20 gap-4 lg:flex-row flex-col items-center justify-center">
        <div class="w-[150px] h-[150px] rounded-full flex items-center text-white justify-center flex-col hover:scale-110 cursor-pointer bg-blue-500">
          <span class="material-icons text-4xl font-bold">
            child_care
          </span>
          <span class="text-2xl">Children</span>
          <span>{{ dashData.children }}</span>
        </div>
        <div class="w-[150px] h-[150px] rounded-full flex items-center text-white justify-center flex-col hover:scale-110 cursor-pointer bg-blue-500">
          <span class="material-icons text-4xl font-bold">
            woman
          </span>
          <span class="text-2xl">Females</span>
          <span>{{ dashData.female }}</span>
        </div>
        <div class="w-[150px] h-[150px] rounded-full flex items-center text-white justify-center flex-col hover:scale-110 cursor-pointer bg-blue-500">
          <span class="material-icons text-4xl font-bold">
            man
          </span>
          <span class="text-2xl">Males</span>
          <span>{{ dashData.male }}</span>
        </div>
        <div class="w-[150px] h-[150px] rounded-full flex items-center text-white justify-center flex-col hover:scale-110 cursor-pointer bg-blue-500">
          <span class="material-icons text-4xl font-bold">
            grade
          </span>
          <span class="text-2xl">New Comers</span>
          <span>{{ dashData.newComers }}</span>
        </div>
        <div class="w-[150px] h-[150px] rounded-full flex items-center text-white justify-center flex-col hover:scale-110 cursor-pointer bg-blue-500">
          <span class="material-icons text-4xl font-bold">
            campaign
          </span>
          <span class="text-2xl">Testimonies</span>
          <span>{{ dashData.testimonies }}</span>
        </div>
        <div class="w-[150px] h-[150px] rounded-full flex items-center text-white justify-center flex-col hover:scale-110 cursor-pointer bg-blue-500">
          <span class="material-icons text-4xl font-bold">
            done
          </span>
          <span class="text-2xl">Total</span>
          <span>{{ dashData.total }}</span>
        </div>
      </div>
    </div>
  </div>

  <createModal v-if="showModal" @update:close="handleClose">
    <template #header>
      Create {{ modalAction }}
    </template>
    <provinceForm v-if="modalAction === 'Province'" />
    <areaForm v-if="modalAction === 'Area'" />
    <zoneForm v-if="modalAction === 'Zone'" />
    <CellForm v-if="modalAction === 'Cell'" />
  </createModal>
</template>

<style scoped></style>








