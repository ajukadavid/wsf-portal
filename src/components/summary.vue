<script lang="ts" setup>
import { getReports } from '../composables/services/apiService';
import { onMounted, ref } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

const branches = ref<null>()

onMounted(() => {
    let b = getReports().then((r) => {
        branches.value = r.data.items
    })
})

</script>

<template>
    <div class="p-4">
        <div>
            <DataTable :value="branches" tableStyle="min-width: 50rem">
                <Column field="provinceCode" header="Province Code"></Column>
                <Column field="areaCode" header="Area Code"></Column>
                <Column field="zoneCode" header="Zone Code"></Column>
                <Column field="cellCode" header="Cell Code"></Column>
                <Column field="male" header="Male"></Column>
                <Column field="female" header="Female"></Column>
                <Column field="children" header="Children"></Column>
                <Column field="newComers" header="New Comers"></Column>
                <Column field="testimonies" header="Testimonies"></Column>
                <Column field="total" header="Total"></Column>
            </DataTable>
        </div>
    </div>
</template>