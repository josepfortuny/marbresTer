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
import { ref, watch } from "vue";
import BaseDropdown from "./BaseDropdown.vue";
import { GlobeAltIcon } from "@heroicons/vue/24/outline";
import { useRoute, useRouter } from "vue-router";
const router = useRouter();
const route = useRoute();

function navigateTo(path) {
  console.log("path:" + path);
  let currentPath = route.path;
  console.log(currentPath);
  if (path == "/cat/") {
    currentPlaceholder.value = languages[1].placeholder;
    if (!currentPath.includes("/cat")) {
      router.push("/cat" + currentPath);
    }
  } else if (path == "/") {
    currentPlaceholder.value = languages[0].placeholder;
    if (currentPath.includes("/servicios")) {
      router.push("/servicios");
    } else if (currentPath.includes("/contactar")) {
      router.push("/contactar");
    } else {
      router.push("/");
    }
  }
}

const languages = [
  { text: "Castellano", placeholder: "ES", click: () => navigateTo("/") },
  {
    text: "Català",
    placeholder: "CAT",
    borderTop: true,
    click: () => navigateTo("/cat/"),
  },
];
const currentPlaceholder = ref(languages[0].placeholder);
watch(() => {
  if (route.path.includes("/cat")) {
    currentPlaceholder.value = languages[1].placeholder;
  } else {
    currentPlaceholder.value = languages[0].placeholder;
  }
});
</script>
  