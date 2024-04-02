<template>
  <div class="mx-auto max-w-2xl">
    <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
      {{ labels.location }}
    </h2>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const labels = ref({
  location: "Ubicación",
});

function textToCatalan() {
  labels.value = {
    location: "Ubicació",
  };
}

function textToSpanish() {
  labels.value = {
    location: "Ubicación",
  };
}

watch(() => {
  if (route.path.includes("/cat")) {
    textToCatalan();
  } else {
    textToSpanish();
  }
});
</script>
