<script lang="ts" setup>
import { getReports } from '../composables/services/apiService';
import { onMounted, ref, reactive } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import spinner from './spinner.vue';

const branches = ref<null>()
const isLoading = ref(false)

const reportOptions = reactive({
    ProvinceCode: '',
})


onMounted(() => {
    isLoading.value = true
    getReports(reportOptions)
        .then(data => {
            isLoading.value = false
            branches.value = data.data.items
        })
        .catch(error => {
            console.error('Error:', error);
        });
})

</script>

<template>
    <div class="p-4">
        <div v-if="!isLoading">
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
        <div v-else class="h-screen flex items-center justify-center">
            <spinner></spinner>
        </div>
    </div>
</template>