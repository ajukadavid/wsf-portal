<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { createCell, getAllProvinces, getAllAreas, getAllZones, createReport } from '../composables/services/apiService'
import createSpinner from './createSpinner.vue';
import WsfDropdown from './wsfDropdown.vue';
const loading = ref(false)
const areaCode = ref('')
const provinceCode = ref('')
const cellName = ref('')
const cellAddress = ref('')
const cellCode = ref('')
const male = ref('')
const female = ref('')
const children = ref('')
const newComers = ref('')
const testimonies = ref('')
const total = ref('')
const zoneCode = ref('')
const ErrMsg = ref('')
const showSuccess = ref(false)
const provinces = ref<any>([])
const areas = ref<any>([])
const zones = ref<any>([])
const cells = ref<any>([])

const successMsg = ref('')

const getProvince = async () => {
    try {
        let res = await getAllProvinces()
        provinces.value = res.data
    } catch {

    }
}


const handleSetProvince = async (code: string) => {
    provinceCode.value = code
    try {
        if (!!provinceCode) {
            let res = await getAllAreas(provinceCode.value)
            areas.value = res.data
        }

    } catch {

    }
}

const handleSetArea = async (code: string) => {
    areaCode.value = code
    try {
        if (!!areaCode) {
            let res = await getAllZones(areaCode.value)
            zones.value = res.data
        }

    } catch {

    }
}


onMounted(() => {
    getProvince()
})

const handleCreateZone = async () => {
    loading.value = true
    try {
        const response = await createCell(provinceCode.value, areaCode.value, zoneCode.value, cellCode.value, cellName.value, cellAddress.value)
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
    <div class="w-full ">
        <div v-if="!showSuccess">
            <form @click.prevent=""
                class="flex flex-col overflow-auto h-[500px] pt-24 px-8 gap-5 w-full mt-6 items-center justify-center">
                <div class="w-full">
                    <label for="provinceCode">
                        <WsfDropdown title="Province Code: " :items="provinces" @update:value="handleSetProvince" />
                    </label>
                </div>
                <div class="w-full">
                    <label for="areaCode">
                        <WsfDropdown title="Area Code: " :items="areas" @update:value="handleSetArea" />
                    </label>
                </div>
                <div class="w-full">
                    <label for="zoneCode">
                        <WsfDropdown title="Zone Code: " :items="zones"
                            @update:value="((code: string) => zoneCode = code)" />
                    </label>
                </div>
                <div class="w-full">
                    <label for="cellCode">
                        <WsfDropdown title="Cell Code: " :items="cells"
                            @update:value="((code: string) => cellCode = code)" />
                    </label>
                    <label for="cellCode">
                        Cell Code:
                        <input v-model="cellCode" type="text" id="cellCode"
                            class="p-4 w-full outline-red-600 shadow-md rounded border-0" placeholder="Cell Code" />
                    </label>
                </div>
                <div class="w-full">
                    <label for="cellName">
                        Cell Name:
                        <input v-model="cellName" type="text" id="cellName"
                            class="p-4 w-full outline-red-600 shadow-md rounded border-0" placeholder="Cell Name" />
                    </label>
                </div>

                <div class="w-full">
                    <label for="zoneAddress">
                        Cell Address:
                        <input v-model="cellAddress" type="text" id="cellAddress"
                            class="p-4 outline-red-600 w-full shadow-md rounded border-0" placeholder="Cell Address" />
                    </label>
                </div>
                <div class="text-red-500">
                    <span>{{ ErrMsg }}</span>
                </div>

            </form>
            <div class="flex items-center justify-center mb-3">
                <createSpinner v-if="loading" class="mt-4" />
                <button v-else @click="handleCreateZone" class="bg-accentColor rounded font-bold my-5 text-white px-5 py-4">
                    Create
                    Report</button>
            </div>
        </div>


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