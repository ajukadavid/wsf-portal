<script lang="ts" setup>
const props = defineProps({
    items: Array,
    title: String
})
</script>

<template>
    <div class="flex flex-col">
        <label for="pet-select">{{ title }}</label>
        <div class="mt-3">
            <select name="pets" id="pet-select">
                <option value="">Please choose a value</option>
                <option v-for="item in items" :value="item">{{ item }}</option>

            </select>
        </div>

    </div>
</template>