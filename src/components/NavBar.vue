<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref } from 'vue'


const $router = useRouter()
const showDrop = ref(false)
const handleLogOut = () => {
    localStorage.removeItem('token')
    $router.push('/')
}
const handleRouteChange = (route: string) => {
    showDrop.value = false
    $router.push(route)
}
</script>


<template>
    <div class="shadow-lg fixed  bg-white top-0 left-0 right-0 w-full">
        <div class="flex justify-between px-5">
            <img src="../assets/wsf-logo.png" alt="winners logo" class="h-20 w-20 p-3" />
            <div>
                <p class="mt-8 text-base mr-20 w-full">Living Faith Church WSF Platform</p>
            </div>
            <span @click="showDrop = !showDrop"
                class="cursor-pointer material-icons my-auto text-gray-700 text-5xl fw-900 ">
                account_circle
            </span>
        </div>
        <div v-if="showDrop"
            class="absolute z-20 cursor-pointer w-[200px] right-[20px] bg-white top-[55px] px-2 h-[220px] shadow-lg border border-gray-50 gap-2 justify-start items-start flex flex-col">
            <span @click="handleRouteChange('/reports')" class="mx-3">View reports</span>

            <span @click="handleRouteChange('/dashboard')" class="hover:text-gr-300 hover:text-gray-600  mx-3">Admin Dashboard</span>
            <span @click="handleRouteChange('/manage-branches')" class="hover:text-gr-300 hover:text-gray-600  mx-3">Manage
                Branches</span>
            <span @click="handleRouteChange('/create-report')" class="mx-3">Create reports</span>
            <span @click="handleRouteChange('/create-users')" class="mx-3">Create Users</span>

            <span @click="handleLogOut" class="hover:text-red-300  mx-3">Log out</span>
        </div>
    </div>
</template>