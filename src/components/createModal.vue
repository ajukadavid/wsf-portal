<script setup lang="ts">
import { reactive } from 'vue';

interface Event {
    name: string,
    description: string
}

const event = reactive<Event>({
    name: '',
    description: ''
})

interface Props {
    note?: string;
    description?: string;
    err?: string
}


const props = withDefaults(defineProps<Props>(), {

});

const emit = defineEmits(['update:close', 'update:handleCreate'])



</script>
<template>
    <div @click.self="emit('update:close', false)" class="modal-overlay">
        <div class="modal">
            <div class="border-b py-5 font-bold px-8 border-slate-300 flex justify-between">
                <slot name="header"></slot>
                <span @click="emit('update:close', false)" class="material-icons cursor-pointer">
                    close
                </span>
            </div>
            <div class="flex items-center justify-start  w-full px-10">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    background-color: #000000da;
}

.modal {
    background-color: white;
    height: fit-content;
    width: 600px;
    margin-top: 10%;
    border-radius: 4px;
}

.close {
    margin: 10% 0 0 16px;
    cursor: pointer;
}

.close-img {
    width: 25px;
}

.check {
    width: 150px;
}

h6 {
    font-weight: 500;
    font-size: 28px;
    margin: 20px 0;
}

p {
    font-size: 16px;
    margin: 20px 0;
}

#button__one {
    width: 100px;
    height: 40px;
    font-size: 14px;
}

#button__two {
    width: 100px;
    height: 40px;
    font-size: 14px;
}
</style>