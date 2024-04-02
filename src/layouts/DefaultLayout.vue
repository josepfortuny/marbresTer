<template>
  <div class="min-h-screen flex flex-col justify-between h-full">
    <div class="flex flex-col flex-grow">
      <Header />
      <div
        class="flex flex-col justify-between h-full w-full flex-grow"
      >
        <slot />
        <Footer class="px-5" />
    </div>
    </div>
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>
