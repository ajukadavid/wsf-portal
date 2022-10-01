<script setup lang="ts">
import { reactive, ref } from 'vue'

const wsfData = reactive({
    men: 0,
    women: 0,
    children: 0,
    testimonies: 0,
    newConverts: 0
})

</script>
    
<template>
    <div class="h-screen bg-gradient-to-b from-red-200 to-red-600">
        <div class="flex justify-between">
            <img src="../assets/wsf-logo.png" alt="winners logo" class="h-20 w-20 ml-5 p-3" />
            <p class="mt-8 text-4xl mr-20">Living Faith Church WSF Platform</p>
            <span></span>
        </div>

        <div class="relative">
           
            <div class="absolute left-0 ml-40 mt-5 w-80">
                <form>
                    <div class="mb-6">
                        <label for="male" class="block mb-2 text-lg font-medium text-white dark:text-white">Male Count
                            </label>
                        <input type="text" id="male" v-model="wsfData.men"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                            placeholder="number of males in cell" required>
                    </div>
                    <div class="mb-6">
                        <label for="female" class="block mb-2 text-lg font-medium text-white dark:text-white">Female Count
                            </label>
                        <input type="text" id="female" v-model="wsfData.women"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                            placeholder="number of females in cell" required>
                    </div>
                    <div class="mb-6">
                        <label for="children" class="block mb-2 text-lg font-medium text-white dark:text-white">Children Count
                            </label>
                        <input type="text" id="children" v-model="wsfData.children"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                            placeholder="number of children in cell" required>
                    </div>
                    <div class="mb-6">
                        <label for="testimony" class="block mb-2 text-lg font-medium text-white dark:text-white">Testimony Count
                            </label>
                        <input type="text" id="testimony" v-model="wsfData.testimonies"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                            placeholder="number of testimonies in cell" required>
                    </div>
                    <div class="mb-6">
                        <label for="new convert" class="block mb-2 text-lg font-medium text-white dark:text-white">New Convert Count
                            </label>
                        <input type="text" id="newConvert" v-model="wsfData.newConverts"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                            placeholder="number of new converts in cell" required>
                    </div>
                    <button
                        class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-400 dark:hover:bg-red-700 dark:focus:ring-red-800">Submit</button>
                </form>
            </div>
            <div class="absolute right-0 mr-40">
                <div
                    class="p-5 mt-10 w-60 bg-white rounded-sm border border-gray-200  drop-shadow-2xl dark:bg-white dark:border-gray-100">
                    <div class="flex justify-between">
                        <div>
                            <span class="material-icons my-auto text-gray-700 text-4xl fw-900">
                                man
                            </span>
                        </div>
                        <p class="text-xl mr-4 mt-1">Male Count</p>
                    </div>
                    <p>{{wsfData.men}}</p>
                </div>
                <div
                    class="p-5 mt-10 w-60 bg-white rounded-sm border border-gray-200  drop-shadow-2xl dark:bg-white dark:border-gray-100">
                    <div class="flex justify-between">
                        <div>
                            <span class="material-icons my-auto text-gray-700 text-4xl fw-900">
                                woman
                            </span>
                        </div>
                        <p class="text-xl mr-4 mt-1">Female Count</p>
                    </div>
                    <p>{{wsfData.women}}</p>
                </div>
                <div
                    class="p-5 mt-10 w-60 bg-white rounded-sm border border-gray-200  drop-shadow-2xl dark:bg-white dark:border-gray-100">
                    <div class="flex justify-between">
                        <div>
                            <span class="material-icons my-auto text-gray-700 text-4xl fw-900">
                                child_care
                            </span>
                        </div>
                        <p class="text-xl mr-4 mt-1">Children</p>
                    </div>
                    <p>{{wsfData.children}}</p>
                </div>
                <div
                    class="p-5 mt-10 w-60 bg-white rounded-sm border border-gray-200  drop-shadow-2xl dark:bg-white dark:border-gray-100">
                    <div class="flex justify-between">
                        <div>
                            <span class="material-icons my-auto text-gray-700 text-4xl fw-900">
                                campaign
                            </span>
                        </div>
                        <p class="text-xl mr-4 mt-1">Testimonies</p>
                    </div>
                    <p>{{wsfData.testimonies}}</p>
                </div>
                

            </div>
        </div>

    </div>
</template>
    
<style scoped>

</style>
    