<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { createZone, getAllProvinces, getAllAreas } from '../composables/services/apiService'
import createSpinner from './createSpinner.vue';
import WsfDropdown from './wsfDropdown.vue';
const loading = ref(false)
const areaCode = ref('')
const provinceCode = ref('')
const zoneName = ref('')
const zoneAddress = ref('')
const zoneCode = ref('')
const ErrMsg = ref('')
const showSuccess = ref(false)
const provinces = ref<any>([])
const areas = ref<any>([])
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



onMounted(() => {
    getProvince()
})

const handleCreateZone = async () => {
    loading.value = true
    try {
        const response = await createZone(provinceCode.value, areaCode.value, zoneCode.value, zoneName.value, zoneAddress.value)
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
    <div class="w-full pb-8">
        <div v-if="!showSuccess">
            <form @click.prevent="" class="flex flex-col gap-5 w-full mt-10 items-center justify-center">
                <div class="w-full">
                    <label for="provinceCode">
                        <WsfDropdown title="Province Code: " :items="provinces" @update:value="handleSetProvince" />
                    </label>
                </div>
                <div class="w-full">
                    <label for="areaCode">
                        <WsfDropdown title="Area Code: " :items="areas"
                            @update:value="((code: string) => areaCode = code)" />
                    </label>
                </div>
                <div class="w-full">
                    <label for="zoneCode">
                        Zone Code:
                        <input v-model="zoneCode" type="text" id="zoneCode"
                            class="p-4 w-full outline-red-600 shadow-md rounded border-0" placeholder="Zone Code" />
                    </label>
                </div>
                <div class="w-full">
                    <label for="zoneName">
                        Zone Name:
                        <input v-model="zoneName" type="text" id="zoneName"
                            class="p-4 w-full outline-red-600 shadow-md rounded border-0" placeholder="Zone Name" />
                    </label>
                </div>
                <div class="w-full">
                    <label for="zoneAddress">
                        Zone Address:
                        <input v-model="zoneAddress" type="text" id="zoneAddress"
                            class="p-4 outline-red-600 w-full shadow-md rounded border-0" placeholder="Zone Address" />
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
                    Zone</button>
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