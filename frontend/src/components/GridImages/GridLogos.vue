<template>
  <ul
    role="list"
    class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8 px-4 mt-10"
  >
    <li v-for="file in files" :key="file.source" class="relative">
      <div
        class="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg"
      >
        <img :src="file.source" class="object-cover group-hover:opacity-75" />
      </div>
    </li>
  </ul>
</template>
      
  <script setup>
import DektonLogo from "@/assets/img/dekton_logo.png";
import NeoLithLogo from "@/assets/img/NeoLith_logo.png";
import SilestoneLogo from "@/assets/img/Silestone_logo.png";
import NaturaMiaLogo from "@/assets/img/NaturaMia_logo.png";

const files = [
  {
    source: DektonLogo,
  },
  {
    source: NeoLithLogo,
  },
  {
    source: SilestoneLogo,
  },
  {
    source: NaturaMiaLogo,
  },
  // More files...
];
</script>
  