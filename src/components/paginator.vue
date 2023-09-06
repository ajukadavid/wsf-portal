<script setup lang="ts">
interface Props {
    pagObj: any

}

const props = withDefaults(defineProps<Props>(), {})
</script>

<template>
    <div class="flex items-center justify-center mt-8">
        <div class="flex items-center">
            <span v-if="pagObj.hasPrevious" class="material-icons text-blue-800 cursor-pointer text-3xl">
                arrow_left
            </span>
            <button
                class="border text-sm mx-1 border-red-700 h-fit px-1 hover:bg-red-700 hover:text-white text-black rounded-full font-bold"
                v-for="page in pagObj.totalPages">
                {{ page }}</button>
            <div>

            </div>
            <span v-if="pagObj.hasNext" class="material-icons text-blue-800 cursor-pointer text-3xl">
                arrow_right
            </span>
        </div>
    </div>
</template>

