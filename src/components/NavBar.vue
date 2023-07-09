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
            <p class="mt-8 text-4xl mr-20">Living Faith Church WSF Platform</p>
            <span @click="showDrop = !showDrop"
                class="cursor-pointer material-icons my-auto text-gray-700 text-5xl fw-900 ">
                account_circle
            </span>

        </div>
        <div v-if="showDrop"
            class="absolute w-[100px] right-[20px] top-[55px] px-2 h-[40px] shadow-lg border border-gray-50 items-center justify-center flex flex-col">
            <span @click="handleLogOut" class="hover:text-red-300 cursor-pointer mx-3">Log out</span>
        </div>
    </div>
</template>