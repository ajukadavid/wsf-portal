<script setup lang="ts">
import { ref } from 'vue';
import { createProvince } from '../composables/services/apiService'
import spinner from './spinner.vue';

const loading = ref(false)
const provinceCode = ref('')
const provinceName = ref('')
const provinceAddress = ref('')
const ErrMsg = ref('')
const showSuccess = ref(false)
const successMsg = ref('')

const handleCreateProvince = async () => {
    loading.value = true
    try {
        const response = await createProvince(provinceCode.value, provinceName.value, provinceAddress.value)
        if (response.status = "Ok") {
            showSuccess.value = true
            successMsg.value = response.responseDescription
        } else {
            ErrMsg.value = response.response.data.responseDescription

        }
    } catch (e) {
        // console.log(e)
    }
    loading.value = false
}

</script>

<template>
    <div class="w-full">
        <form v-if="!showSuccess" @click.prevent=""
            class="flex flex-col  px-8 gap-5 w-full pt-24  mt-10 items-center justify-center">
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
            <div class="text-red-500">
                <span>{{ ErrMsg }}</span>
            </div>
            <div class="flex items-center justify-center my-4">
                <spinner v-if="loading" class="mt-8" />
                <button v-else @click="handleCreateProvince"
                    class="bg-accentColor rounded font-bold my-5 text-white px-5 py-4">
                    Create
                    province</button>
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