<script setup lang="ts">
import { onMounted } from 'vue';
import { getReports } from '../composables/services/apiService'




onMounted(() => {
    getReports()
})
</script>
    
<template></template>
    
<style scoped></style>
    