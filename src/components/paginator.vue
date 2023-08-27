<script setup lang="ts">
interface Props {
    pagObj: any

}

const props = withDefaults(defineProps<Props>(), {})
</script>

<template>
    <div class="flex items-center justify-center mt-8">
        <div class="flex">
            <span class="material-icons cursor-pointer text-4xl">
                arrow_left
            </span>
            <button class="border border-red-700 hover:bg-red-700 hover:text-white text-black px-2 rounded-full font-bold"
                v-for="page in pagObj.totalPages">
                {{ page
                }}</button>
            <span class="material-icons cursor-pointer   text-4xl">
                arrow_right
            </span>
        </div>
    </div>
</template>

