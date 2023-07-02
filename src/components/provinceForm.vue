<script setup lang="ts">
import { ref } from 'vue';
import { createProvince } from '../composables/createData/createProvince'

const provinceCode = ref('')
const provinceName = ref('')
const provinceAddress = ref('')

const handleCreateProvince = () => {
    let b = createProvince(provinceCode.value, provinceName.value, provinceAddress.value)
    console.log(b)
}

</script>

<template>
    <div class="w-full">
        <form @click.prevent="" class="flex flex-col gap-5 w-full mt-10 items-center justify-center">
            <div class="w-full">
                <label for="provinceCode">
                    Province Code:
                    <input v-model="provinceCode" type="text" id="provinceCode"
                        class="p-4 w-full shadow-md rounded border-0" placeholder="Province Code" />
                </label>
            </div>
            <div class="w-full">
                <label for="provinceName">
                    Province Name:
                    <input v-model="provinceName" type="text" id="provinceName"
                        class="p-4 w-full shadow-md rounded border-0" placeholder="Province Name" />
                </label>
            </div>
            <div class="w-full">
                <label for="provinceAddress">
                    Province Address:
                    <input v-model="provinceAddress" type="text" id="provinceAddress"
                        class="p-4 w-full shadow-md rounded border-0" placeholder="Province Address" />
                </label>
            </div>

            <button @click="handleCreateProvince" class="bg-accentColor rounded font-bold my-5 text-white px-5 py-4">Create
                province</button>
        </form>

    </div>
</template>