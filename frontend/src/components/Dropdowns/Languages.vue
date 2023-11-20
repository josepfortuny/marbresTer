<template>
  <BaseDropdown :items="languages">
    <template v-slot:label>
      <div class="flex items-center space-x-2">
        <GlobeAltIcon class="h-6 -mt-1 text-white" />
        <div class="-mt-1 text-white">{{ currentPlaceholder }}</div>
      </div>
    </template>
  </BaseDropdown>
</template>

<script setup>
import BaseDropdown from "./BaseDropdown.vue";
import { GlobeAltIcon } from "@heroicons/vue/24/outline";
import router from "@/router";
import {useRoute} from "vue-router";

function navigateTo(path){
  currentPath = route.path
  if (path.includes("/cat")){
    if (!currentPath.includes("/cat")){
      router.push("/cat/" + route.path)
    }
  }else{
    router.push("/")
  }
}
const languages = [
  { text: "Castellano", placeholder: "ES", click: () => router.navigateTo("/") },
  { text: "Català", placeholder: "CAT" , borderTop: true ,click: () => router.navigateTo("/cat/"),}
];
let currentPlaceholder = languages[0].placeholder;
</script>
  