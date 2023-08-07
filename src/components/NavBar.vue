<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref } from 'vue'


const $router = useRouter()
const showDrop = ref(false)
const handleLogOut = () => {
    localStorage.removeItem('token')
    $router.push('/log-in')
}
</script>


<template>
    <div>
        <div class="flex justify-between px-5">
            <img src="../assets/wsf-logo.png" alt="winners logo" class="h-20 w-20 p-3" />
            <div>
                <p class="mt-8 text-sm mr-20 w-full">Living Faith Church WSF Platform</p>
            </div>
            <span @click="showDrop = !showDrop"
                class="cursor-pointer material-icons my-auto text-gray-700 text-5xl fw-900 ">
                account_circle
            </span>

        </div>
        <div v-if="showDrop"
            class="absolute cursor-pointer w-[200px] right-[20px] bg-white top-[55px] px-2 h-[220px] shadow-lg border border-gray-50 gap-2 justify-start items-start flex flex-col">
            <span @click="$router.push('/ministerDashboard')" class="hover:text-gr-300 hover:text-gray-600 mx-3">View
                Dashboard Summary</span>

            <span class="hover:text-gr-300 hover:text-gray-600  mx-3">Create Branches</span>
            <span @click="handleLogOut" class="hover:text-red-300  mx-3">Log out</span>
            <span @click="$router.push('/summary')" class="mx-3">Summary</span>
            <span @click="$router.push('/create-report')" class="mx-3">Create reports</span>
        </div>
    </div>
</template>