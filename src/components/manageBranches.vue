<script setup lang="ts">
import { onMounted, ref, reactive } from 'vue';
import {
    getAllProvinces,
    getDashboardData
} from '../composables/services/apiService';
import WsfDropdown from './wsfDropdown.vue';

const provinces = ref<any>([])
const areas = ref<any>([])
const zones = ref<any>([])
const cells = ref<any>([])
const isLoading = ref(false)
const displayData = ref<any>([])

const reportOptions = reactive<any>({
    ProvinceCode: '',
    AreaCode: '',
    ZoneCode: '',
    CellCode: '',
    to: '',
    from: '',
    PageNumber: '',
    PageSize: ''
})

const provinceFilter = async (code: string) => {
    reportOptions.ProvinceCode = code
    try {
        if (!!reportOptions.ProvinceCode) {

        }

    } catch {

    }
}


const handleGoback = (page: string) => {
    reportOptions.PageNumber = Number(page) - 1

}

const handleForward = (page: string) => {
    reportOptions.PageNumber = Number(page) + 1

}

const handleUpdatePage = (page: string) => {
    reportOptions.PageNumber = Number(page)

}

const areaFilter = async (code: string) => {
    reportOptions.AreaCode = code
    try {
        if (!!reportOptions.AreaCode) {

        }

    } catch {

    }
}


const zoneFilter = async (code: string) => {
    reportOptions.ZoneCode = code
    try {
        if (!!reportOptions.ZoneCode) {

        }

    } catch {

    }
}

const cellFilter = async (code: string) => {
    reportOptions.ZoneCode = code
    try {
        if (!!reportOptions.ZoneCode) {

        }

    } catch {

    }
}

const handleResetFilter = () => {
    reportOptions.AreaCode = ""
    reportOptions.CellCode = ""
    reportOptions.ProvinceCode = ""
    reportOptions.ZoneCode = ""


}

const getProvince = async () => {
    try {
        let res = await getAllProvinces()
        displayData.value = res.data
    } catch {

    }
}

onMounted(() => {
    getProvince()
    isLoading.value = true

})


</script>

<template>
    <div class="px-8">
        <div class="w-full flex justify-between">
            <div class="flex">
                <span>Filter By:</span>
                <div class="ml-4 flex items-center justify-center gap-5">
                    <WsfDropdown title="Province Code: " :items="provinces" @update:value="provinceFilter" />
                    <WsfDropdown title="Area Code: " :items="areas" @update:value="areaFilter" />
                    <WsfDropdown title="Zone Code: " :items="zones" @update:value="zoneFilter" />
                    <WsfDropdown title="Cell Code: " :items="cells" @update:value="cellFilter" />
                    <button
                        class="border   h-fit px-4 py-2 mt-8 rounded hover:bg-red-700 hover:text-white font-bold"
                        @click="handleResetFilter">Reset
                        filter</button>
                </div>
            </div>

        </div>
        <div class="flex flex-wrap items-center justify-center mt-8 w-full gap-4">
            <div v-for="data in displayData"
                class="flex  w-52  px-2 flex-col justify-between h-56 border-red-700 border shadow-lg rounded-lg ">
                <span>{{ data.name }}</span>
                <span>{{ data.code }}</span>

            </div>

        </div>
    </div>
</template>