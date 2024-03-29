<script lang="ts" setup>
import {
    getReports,
    getAllProvinces,
    getAllAreas,
    getAllZones,
    getAllCells,
} from '../composables/services/apiService';
import { onMounted, ref, reactive } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import spinner from './spinner.vue';
import paginator from './paginator.vue';
import WsfDropdown from './wsfDropdown.vue';

const branches = ref<any>([])
const isLoading = ref(false)
const provinces = ref<any>([])
const areas = ref<any>([])
const zones = ref<any>([])
const cells = ref<any>([])
const paginatorData = ref<any>({})
const dataLength = ref<number>(0)

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

const handleSetReport = (data: any) => {
    isLoading.value = false
    branches.value = data.data.items
    dataLength.value = data.data.items.length
    paginatorData.value = data.data
    delete paginatorData.value.items
}


const getProvince = async () => {
    try {
        let res = await getAllProvinces()
        provinces.value = res.data
    } catch {

    }
}


const provinceFilter = async (code: string) => {
    reportOptions.ProvinceCode = code
    try {
        if (!!reportOptions.ProvinceCode) {
            let res = await getAllAreas(reportOptions.ProvinceCode)
            getReports(reportOptions)
                .then(data => {
                    isLoading.value = false
                    branches.value = data.data.items
                })
                .catch(error => {
                    console.error('Error:', error);
                })
            areas.value = res.data
        }

    } catch {

    }
}

const areaFilter = async (code: string) => {
    reportOptions.AreaCode = code
    try {
        if (!!reportOptions.AreaCode) {
            let res = await getAllZones(reportOptions.AreaCode)
            zones.value = res.data
        }

    } catch {

    }
}


const zoneFilter = async (code: string) => {
    reportOptions.ZoneCode = code
    try {
        if (!!reportOptions.ZoneCode) {
            let res = await getAllCells(reportOptions.ZoneCode)
            cells.value = res.data
        }

    } catch {

    }
}

const cellFilter = async (code: string) => {
    reportOptions.ZoneCode = code
    try {
        if (!!reportOptions.ZoneCode) {
            let res = await getAllCells(reportOptions.ZoneCode)
            cells.value = res.data
        }

    } catch {

    }
}

const handleResetFilter = () => {
    isLoading.value = true
    reportOptions.AreaCode = ""
    reportOptions.CellCode = ""
    reportOptions.ProvinceCode = ""
    reportOptions.ZoneCode = ""
    getReports(reportOptions)
        .then(data => {
            isLoading.value = false
            branches.value = data.data.items
        })
        .catch(error => {
            console.error('Error:', error);
        });

}

const handleUpdatePage = (page: string) => {
    reportOptions.PageNumber = Number(page)
    isLoading.value = true
    getReports(reportOptions)
        .then(data => {
            handleSetReport(data)
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

const handleGoback = (page: string) => {
    reportOptions.PageNumber = Number(page) - 1
    isLoading.value = true
    getReports(reportOptions)
        .then(data => {
            handleSetReport(data)
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

const handleForward = (page: string) => {
    reportOptions.PageNumber = Number(page) + 1
    isLoading.value = true
    getReports(reportOptions)
        .then(data => {
            handleSetReport(data)

        })
        .catch(error => {
            console.error('Error:', error);
        });
}

onMounted(() => {
    getProvince()
    isLoading.value = true
    getReports(reportOptions)
        .then(data => {
            handleSetReport(data)
        })
        .catch(error => {
            console.error('Error:', error);
        });
})

</script>

<template>
    <div class="p-4 px-10 w-full">
        <div class="w-full flex justify-between">
            <div class="flex">
                <span>Filter By:</span>
                <div class="ml-4 flex items-center justify-center gap-5">
                    <WsfDropdown title="Province Code: " :items="provinces" @update:value="provinceFilter" />
                    <WsfDropdown title="Area Code: " :items="areas" @update:value="areaFilter" />
                    <WsfDropdown title="Zone Code: " :items="zones" @update:value="zoneFilter" />
                    <WsfDropdown title="Cell Code: " :items="cells" @update:value="cellFilter" />
                    <button
                        class="border border-red-700  h-fit px-4 py-2 mt-8 rounded hover:bg-red-700 hover:text-white font-bold"
                        @click="handleResetFilter">Reset
                        filter</button>
                </div>
            </div>
            <div>
                <paginator :data-length="dataLength" @update:forward="handleForward" @update:back="handleGoback"
                    :pagObj="paginatorData" @update:page="handleUpdatePage" />
            </div>
        </div>
        <div v-if="!isLoading && branches.length" class="mt-10 border shadow-lg">
            <DataTable :value="branches" tableStyle="min-width: 50rem">
                <Column class="px-10 py-4" field="provinceCode" sortable header="Province Code"></Column>
                <Column class="px-7 " field="areaCode" sortable header="Area Code"></Column>
                <Column class="px-7" field="zoneCode" sortable header="Zone Code"></Column>
                <Column class="px-7" field="cellCode" sortable header="Cell Code"></Column>
                <Column class="px-7" field="male" sortable header="Male"></Column>
                <Column class="px-7" field="female" sortable header="Female"></Column>
                <Column class="px-7" field="children" sortable header="Children"></Column>
                <Column class="px-7" field="newComers" sortable header="New Comers"></Column>
                <Column class="px-7" field="testimonies" sortable header="Testimonies"></Column>
                <Column class="px-7" field="total" sortable header="Total"></Column>
            </DataTable>
        </div>
        <div class="h-screen w-full text-red-700   flex justify-center items-center"
            v-else-if="!isLoading && !branches!.length">
            <div class="shadow-lg p-20 border">
                <span>Report for selected parameter does not exist. Please check filter and try again.</span>

            </div>
        </div>
        <div v-else class="h-screen flex items-center justify-center">
            <spinner></spinner>
        </div>
    </div>
</template>