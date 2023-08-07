<script lang="ts" setup>
import { getReports } from '../composables/services/apiService';
import { onMounted, ref } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

const branches = ref<null>()

onMounted(() => {
    let b = getReports().then((r) => {
        branches.value = r.data.items
        console.log(branches.value)
    })

})

</script>

<template>
    <div class="card">
        <DataTable :value="branches" tableStyle="min-width: 50rem">
            <Column field="provinceCode" header="provinceCode"></Column>
            <Column field="areaCode" header="areaCode"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
        </DataTable>
    </div>
</template>