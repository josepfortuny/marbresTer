<template>
  <div class="h-full w-full space-y-10">
    <b>{{ title }}</b>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const title = ref("servicios");

watch(() => {
  if (route.path.includes("/cat")) {
    title.value = "serveis";
  } else {
    title.value = "servicios";
  }
});
</script>
