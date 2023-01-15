<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from "vue-router";

import { auth } from '../firebase/firebase'
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth'

const router = useRouter();
const email = ref("");
const username = ref("")
const password = ref("");
const errMsg = ref("");

const register = async () => {
    await createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((user) => {
            if (user) {
                updateProfile(auth.currentUser!, {
                    displayName: username.value,
                    photoURL: ''
                })
                sendEmailVerification(auth.currentUser!)
            }
        })
        .catch((error) => {
            switch (error.code) {
                case 'auth/invalid-email':
                    errMsg.value = 'The email address is badly formatted.'
                    break
                case 'auth/email-already-exists':
                    errMsg.value = 'The email address is already in use by another account.'
                    break
                case 'auth/weak-password':
                    errMsg.value = 'The password must be 6 characters long or more.'
                    break
                default:
                    errMsg.value = 'There was a problem creating the account.'
                    break
            }
        })
}

</script>

<template>
    <main class="grid h-screen place-items-center">
        <form @submit.prevent="">
            <div class="grid justify-items-center mb-5">
                <p class="font-extrabold">Sign up</p>
            </div>
            <p>Enter your email and password to sign up</p>
            <div class="w-80">
                <input type="text" v-model="username" placeholder="Username"
                    class="mt-6 p-4 w-full shadow-md rounded border-0" />
                <input v-model="email" type="email" placeholder="Email" class="mt-6 p-4 w-full shadow-md rounded invalid:border-red-500 invalid:text-red-600
      focus:invalid:border-red-500 focus:invalid:ring-red-500 border-0" />
                <input v-model="password" type="password" placeholder="Password"
                    class="mt-6 p-4 w-full shadow-md rounded border-0" />
            </div>
            <button @click.prevent="register" type="submit"
                class="bg-buttonColor ml-2 rounded font-bold text-white px-32 mt-8 py-4">Submit</button>
            <div class="mt-3 ml-2">
                <span>Already have an account? </span> <span class="text-blue-500">Sign in</span>
            </div>
        </form>

    </main>

</template>

<style scoped>
input::placeholder {
    color: black
}
</style>