<template>
  <div>
    <div class="flex flex-col items-center">
      <h1 class="mt-10 text-3xl font-bold mb-3">Nuestros Proyectos</h1>
      <hr class="mt-1 h-1 bg-black rounded-l w-20" />
      <br />
    </div>
    <br />
    <ul
      role="list"
      class="grid grid-cols-1 sm:grid-clos-2 gap-x-4 gap-y-8 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8 px-4 mt-10"
    >
      <li v-for="file in files" :key="file.source" class="relative">
        <div
          class="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg"
        >
          <img :src="file.source" class="object-cover group-hover:opacity-75" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
const stringTitle = route.path.includes("cat")
  ? "Els nostres projectes"
  : "Nuestros proyectos";
</script>
