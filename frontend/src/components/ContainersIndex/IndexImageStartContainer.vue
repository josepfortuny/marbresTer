<template>
    <div class="relative">
    <img class="max-h-[1200px] w-full cursor-pointer" :src="houseImage" alt="Marbres Ter" />
    <div class="px-4 py-4 md:px-10 md:py-10 rounded-xl absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-center bg-white bg-opacity-25">
        <h1 class="text-xl md:text-3xl font-bold mb-4 text-white">Marbres Ter</h1>
        <button @click="goToContact()" class=" flex space-x-2 bg-slate-900 hover:bg-slate-800 text-white font-bold py-2 md:px-8  px-4 rounded">
            <span class="text-sm md:text-xs">{{ stringBudget }}</span>   
            <font-awesome-icon class="hidden md:flex w-4 h-4 mt-0.5 flex-none mr-1" :icon="['fas', 'arrow-right']"/>
        </button>
    </div>
  </div>
</template>
<script setup>
import houseImage from "@/assets/img/expo_black_1.jpeg";
import router from "@/router";
import { useRoute } from "vue-router";
const route = useRoute();
//route.path.includes("cat")
const stringBudget =  route.path.includes("cat") ? "Fesme un pressupost" : "Hazme un presupuesto"


const goToContact = () => {
    if (route.path.includes("cat/")){
        router.push("/cat/contactar");
    }else{
        router.push("/contactar");
    }
    
};
</script>


