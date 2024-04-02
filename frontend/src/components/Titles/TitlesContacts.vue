<template>
  <div class="mx-auto max-w-2xl text-center">
    <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
      {{ labels.title }}
    </h2>
    <p class="mt-2 text-lg leading-8 text-gray-600">
      {{ labels.budget }}
    </p>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const labels = ref({
  title: "Contáctanos",
  budget: "Solicite su presupuesto",
});

function textToCatalan() {
  labels.value = {
    title: "Contacta'ns",
    budget: "Sol·liciti el seu pressupost",
  };
}

function textToSpanish() {
  labels.value = {
    title: "Contáctanos",
    budget: "Solicite su presupuesto ahora",
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
