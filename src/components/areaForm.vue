<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { createArea, getAllProvinces } from '../composables/services/apiService'
import createSpinner from './createSpinner.vue';
import WsfDropdown from './wsfDropdown.vue';
const loading = ref(false)
const areaCode = ref('')
const provinceCode = ref('')
const areaName = ref('')
const areaAddress = ref('')
const ErrMsg = ref('')
const showSuccess = ref(false)
const areas = ref<any>([])
const successMsg = ref('')

const getProvince = async () => {
    try {
        let res = await getAllProvinces()
        areas.value = res.data
    } catch {

    }
}

onMounted(() => {
    getProvince()
})

const handleCreateArea = async () => {

    loading.value = true
    try {
        const response = await createArea(provinceCode.value, areaCode.value, areaName.value, areaAddress.value)
        if (response.status = "Ok") {
            showSuccess.value = true
            successMsg.value = response.responseDescription
        } else {
            ErrMsg.value = response.response.data.responseDescription

        }
    } catch {
        //
    }
    loading.value = false
}

</script>

<template>
    <div class="w-full">
        <form v-if="!showSuccess" @click.prevent="" class="flex flex-col gap-5 w-full mt-10 items-center justify-center">
            <div class="w-full">
                <label for="provinceCode">
                    <WsfDropdown title="Province Code: " :items="areas"
                        @update:value="((code: string) => provinceCode = code)" />
                </label>
            </div>
            <div class="w-full">
                <label for="areaCode">
                    Area Code:
                    <input v-model="areaCode" type="text" id="areaCode"
                        class="p-4 w-full outline-red-600 shadow-md rounded border-0" placeholder="Area Code" />
                </label>
            </div>
            <div class="w-full">
                <label for="areaName">
                    Area Name:
                    <input v-model="areaName" type="text" id="areaName"
                        class="p-4 w-full outline-red-600 shadow-md rounded border-0" placeholder="Area Name" />
                </label>
            </div>
            <div class="w-full">
                <label for="areaAddress">
                    Area Address:
                    <input v-model="areaAddress" type="text" id="areaAddress"
                        class="p-4 outline-red-600 w-full shadow-md rounded border-0" placeholder="Area Address" />
                </label>
            </div>
            <div class="text-red-500">
                <span>{{ ErrMsg }}</span>
            </div>
            <div class="flex items-center justify-center my-4">
                <createSpinner v-if="loading" class="mt-8" />
                <button v-else @click="handleCreateArea" class="bg-accentColor rounded font-bold my-5 text-white px-5 py-4">
                    Create
                    Area</button>
            </div>
        </form>
        <div v-else class="flex flex-col text-green-600 items-center justify-center my-20 w-full">
            <span class="material-icons  text-8xl">
                check_circle
            </span>
            <span class="font-bold text-3xl mt-8">
                {{ successMsg }}
            </span>
        </div>
    </div>
</template>