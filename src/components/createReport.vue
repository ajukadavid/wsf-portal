<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { getAllProvinces, getAllAreas, getAllZones, getAllCells, createReport } from '../composables/services/apiService'
import spinner from './spinner.vue';
import WsfDropdown from './wsfDropdown.vue';
const loading = ref(false)
const areaCode = ref('')
const provinceCode = ref('')
const cellCode = ref('')
const male = ref<number>(0)
const female = ref<number>(0)
const children = ref<number>(0)
const newComers = ref('')
const testimonies = ref('')
const zoneCode = ref('')
const ErrMsg = ref('')
const showSuccess = ref(false)
const provinces = ref<any>([])
const areas = ref<any>([])
const zones = ref<any>([])
const cells = ref<any>([])

const successMsg = ref('')
const total = computed(() => {
    let b = male.value! + female.value!
    return (b + children.value + newComers.value).toString()
})
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


const handleSetCell = async (code: string) => {
    zoneCode.value = code
    try {
        if (!!areaCode) {
            let res = await getAllCells(zoneCode.value)
            cells.value = res.data
        }

    } catch {

    }
}


onMounted(() => {
    getProvince()
})

const handleCreateReport = async () => {
    loading.value = true
    try {
        const response = await createReport(
            provinceCode.value,
            areaCode.value,
            zoneCode.value,
            cellCode.value,
            male.value.toString(),
            female.value.toString(),
            children.value.toString(),
            newComers.value.toString(),
            testimonies.value,
            total.value
        )
        if (response.status = "Ok") {
            showSuccess.value = true
            successMsg.value = response.responseDescription
            provinceCode.value = ''
            areaCode.value = ''
            zoneCode.value = ''
            cellCode.value = ''
            male.value = 0
            female.value = 0
            children.value = 0
            newComers.value = ''
            testimonies.value = ''
            setTimeout(() => {
                showSuccess.value = false
            }, 2000);
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
                class="flex flex-col overflow-auto h-[600px] pt-96 px-8 gap-5 w-full mt-6 items-center justify-center">
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
                        <WsfDropdown title="Zone Code: " :items="zones" @update:value="handleSetCell" />
                    </label>
                </div>
                <div class="w-full">
                    <label for="cellCode">
                        <WsfDropdown title="Cell Code: " :items="cells"
                            @update:value="((code: string) => cellCode = code)" />
                    </label>

                </div>
                <div class="w-full">
                    <label for="male">
                        No of Male:
                        <input v-model="male" type="number" id="male"
                            class="p-4 w-full outline-red-600 shadow-md rounded border-0" placeholder="Male" />
                    </label>
                </div>

                <div class="w-full">
                    <label for="female">
                        No of Female:
                        <input v-model="female" type="number" id="female"
                            class="p-4 outline-red-600 w-full shadow-md rounded border-0" placeholder="Female" />
                    </label>
                </div>
                <div class="w-full">
                    <label for="children">
                        No of Children:
                        <input v-model="children" type="number" id="children"
                            class="p-4 outline-red-600 w-full shadow-md rounded border-0" placeholder="Children" />
                    </label>
                </div>
                <div class="w-full">
                    <label for="newComers">
                        New Comers:
                        <input v-model="newComers" type="number" id="newComers"
                            class="p-4 outline-red-600 w-full shadow-md rounded border-0" placeholder="New Comers" />
                    </label>
                </div>
                <div class="w-full">
                    <label for="testimonies">
                        Testimonies:
                        <input v-model="testimonies" type="text" id="testimonies"
                            class="p-4 outline-red-600 w-full shadow-md rounded border-0" placeholder="Testimonies" />
                    </label>
                </div>
                <div class="w-full">
                    <label for="testimonies">
                        Total:
                        <input v-model="total" disabled type="text" id="total"
                            class="p-4 outline-red-600 bg-slate-200 cursor-not-allowed w-full shadow-md rounded border-0"
                            placeholder="total" />
                    </label>
                </div>
                <div class="text-red-500">
                    <span>{{ ErrMsg }}</span>
                </div>

            </form>
            <div class="flex items-center justify-center mb-3">
                <spinner v-if="loading" class="mt-4" />
                <button v-else @click="handleCreateReport"
                    class="bg-accentColor rounded font-bold my-5 text-white px-5 py-4">
                    Send
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