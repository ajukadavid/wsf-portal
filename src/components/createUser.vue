<script setup lang="ts">
import { ref, onMounted } from 'vue';
import {
    getAllProvinces,
    getAllAreas,
    getAllZones,
    createUser
} from '../composables/services/apiService'
import spinner from './spinner.vue';
import WsfDropdown from './wsfDropdown.vue';
const loading = ref(false)
const areaCode = ref('')
const provinceCode = ref('')
const surname = ref('')
const firstName = ref('')
const email = ref('')
const phone = ref('')
const password = ref('')
const zoneCode = ref('')
const userRole = ref('')
const ErrMsg = ref('')
const showSuccess = ref(false)
const provinces = ref<any>([])
const areas = ref<any>([])
const zones = ref<any>([])
const userRoles = ref(
    [
        {
            name: 'Admin',
            code: 'admin'
        },
        {
            name: 'User',
            code: 'user'
        }
    ])

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

const handleCreateUser = async () => {
    loading.value = true
    try {
        const response = await createUser(provinceCode.value, areaCode.value, zoneCode.value, surname.value, firstName.value, email.value, phone.value, password.value, userRole.value)
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


onMounted(() => {
    getProvince()
})



</script>

<template>
    <div class="w-full">
        <div v-if="!showSuccess">
            <form @click.prevent="" class="flex flex-col  px-8 gap-5 w-full   mt-10 items-center justify-center">
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
                    <label for="surname">
                        Surname:
                        <input v-model="surname" type="text" id="surname"
                            class="p-4 w-full outline-red-600 shadow-md rounded border-0" placeholder="user surname" />
                    </label>
                </div>
                <div class="w-full">
                    <label for="firstName">
                        First Name:
                        <input v-model="firstName" type="text" id="firstName"
                            class="p-4 w-full outline-red-600 shadow-md rounded border-0" placeholder="User" />
                    </label>
                </div>
                <div class="w-full">
                    <label for="email">
                        Email:
                        <input v-model="email" type="email" id="email"
                            class="p-4 outline-red-600 w-full shadow-md rounded border-0" placeholder="User email" />
                    </label>
                </div>

                <div class="w-full">
                    <label for="phone">
                        Phone:
                        <input v-model="phone" type="text" id="phone"
                            class="p-4 outline-red-600 w-full shadow-md rounded border-0" placeholder="User phone" />
                    </label>
                </div>
                <div class="w-full">
                    <label for="Password">
                        Password:
                        <input v-model="password" type="password" id="password"
                            class="p-4 outline-red-600 w-full shadow-md rounded border-0" placeholder="User password" />
                    </label>
                </div>
                <div class="w-full">
                    <label for="userRole">
                        <WsfDropdown title="User role: " :items="userRoles"
                            @update:value="((code: string) => userRole = code)" />
                    </label>
                </div>
                <div class="text-red-500">
                    <span>{{ ErrMsg }}</span>
                </div>

            </form>
            <div class="flex items-center justify-center mb-3">
                <spinner v-if="loading" class="mt-4" />
                <button v-else @click="handleCreateUser" class="bg-accentColor rounded font-bold my-5 text-white px-5 py-4">
                    Create
                    User</button>
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