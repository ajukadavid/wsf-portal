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
           <button type="submit" class="bg-buttonColor">Submit</button>
        </form>
    </main>

</template>

<style scoped>
input::placeholder {
    color: black
}

</style>