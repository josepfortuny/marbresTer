<template>
  <div>
    <IndexImageStartContainer/>
    <OurProjectsContainer/>
    <div class="max-w-[1500px] mx-auto md:px-10 flex items-center justify-between p-6 px-8 space-x-8">
      <div class="px-5">
        <DescriptionImageContainer/>
      </div>
    </div>

  </div>
</template>
<script setup>
import DescriptionImageContainer from "@/components/ContainersIndex/DescriptionImageContainer.vue"
import IndexImageStartContainer from "@/components/ContainersIndex/IndexImageStartContainer.vue";
import OurProjectsContainer from "@/components/ContainersIndex/OurProjectsContainer.vue";
</script>
