<script setup lang="ts">
import { useRoute } from 'vue-router'
import NavBar from './components/NavBar.vue';
const $route = useRoute()
</script>

<template>
    <div class="flex flex-col">
        <NavBar v-if="$route.name !== 'SignUp' && $route.name !== 'Login'" />
        <RouterView />
    </div>
</template>

<style scoped></style>
