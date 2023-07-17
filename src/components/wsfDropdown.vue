<script lang="ts" setup>

interface Props {
    items: any,
    title: string

}


const props = withDefaults(defineProps<Props>(), {})

const emit = defineEmits(['update:value'])

const handleSelectItem = (e: Event) => {
    const selectedOptionValue = (e.target as HTMLSelectElement).value;
    emit('update:value', selectedOptionValue)
    console.log(selectedOptionValue)
}
</script>

<template>
    <div class="flex flex-col">
        <label :for="title">{{ title }}</label>
        <div class="mt-3">
            <select name="pets" class="w-full bg-white shadow p-3 pr-2 outline-red-500 " :id="title"
                @change="handleSelectItem">
                <option v-for="item in items" :value="item.provinceCode">{{ item.provinceCode }}</option>
            </select>
        </div>

    </div>
</template>