<script setup lang="ts">
interface Props {
    pagObj: any,
    dataLength: number

}

const props = withDefaults(defineProps<Props>(), {})
const emit = defineEmits(['update:page', 'update:back', 'update:forward'])

</script>

<template>
    <div class="flex items-center justify-center mt-8">
        <div class="flex items-center">
            <span class="mr-5">Showing: {{ dataLength }} of {{ pagObj.totalCount }}</span>
            <span @click="$emit('update:back', pagObj.currentPage)" v-if="pagObj.hasPrevious"
                class="material-icons text-blue-800 cursor-pointer text-3xl">
                arrow_left
            </span>
            <button @click="$emit('update:page', page)" :class="{ 'bg-red-600 !text-white': page === pagObj.currentPage }"
                class="border flex items-center justify-center text-sm mx-1 border-red-700 h-fit px-1 hover:bg-red-700 hover:text-white text-black rounded-full font-bold"
                v-for="(page, index) in pagObj.totalPages">
                {{ page }}</button>
            <div>

            </div>
            <span @click="$emit('update:forward', pagObj.currentPage)" v-if="pagObj.hasNext"
                class="material-icons text-blue-800 cursor-pointer text-3xl">
                arrow_right
            </span>
        </div>
    </div>
</template>

