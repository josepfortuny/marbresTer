<template>
  <div>
    <IndexImageStartContainer />
    <div
      class="max-w-[1500px] mx-auto md:px-10 flex items-center justify-between p-6 px-8 space-x-8"
    >
      <div class="px-5 mb-10">
        <DescriptionImageContainer />
      </div>
    </div>
    <GridLogos class="mt-5 mb-10" />
    <OurServicesContainer class="mt-5 mb-10 mx-3" />
  </div>
</template>
<script setup>
import DescriptionImageContainer from "@/components/ContainersIndex/DescriptionImageContainer.vue";
import IndexImageStartContainer from "@/components/ContainersIndex/IndexImageStartContainer.vue";
import OurProjectsContainer from "@/components/ContainersIndex/OurProjectsContainer.vue";
import GridLogos from "@/components/GridImages/GridLogos.vue";
import OurServicesContainer from "@/components/ContainersIndex/OurServicesContainer.vue";
</script>
