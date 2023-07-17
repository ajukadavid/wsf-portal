<script lang="ts" setup>

interface Props {
    items: any,
    title: string

}


const props = withDefaults(defineProps<Props>(), {})

const emit = defineEmits(['update:value'])

const handleSelectItem = (e: Event) => {
    const selectedOptionValue = (e.target as HTMLSelectElement).value;
    console.log(selectedOptionValue)
}
</script>

<template>
    <div class="flex flex-col">
        <label for="pet-select">{{ title }}</label>
        <div class="mt-3">
            <select name="pets" id="pet-select" @change="handleSelectItem">
                <option v-for="item in items" :value="item.provinceCode">{{ item.provinceCode }}</option>

            </select>
        </div>

    </div>
</template>