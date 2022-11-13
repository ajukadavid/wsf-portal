<script setup lang="ts">

</script>

<template>
    <main class="grid h-screen place-items-center">
        <form @submit.prevent="">
            <div class="grid justify-items-center mb-5">
                <p class="font-extrabold">Sign up</p>
            </div>
           <p>Enter your email and password to sign up</p>
           <div class="w-80">    
            <input type="text" placeholder="Username" class="mt-6 p-4 w-full shadow-md rounded border-0"/>
           <input type="email" placeholder="Email" class="mt-6 p-4 w-full shadow-md rounded border-0"/>
           <input type="password" placeholder="Password" class="mt-6 p-4 w-full shadow-md rounded border-0"/>
           </div>
           <button type="submit" class="bg-buttonColor ml-2 rounded font-bold text-white px-32 mt-8 py-4">Submit</button>
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