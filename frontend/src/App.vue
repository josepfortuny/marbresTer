<template>
  <component :is="'default-layout'">
    <router-view />
  </component>
</template>
<script setup>
import { RouterView } from "vue-router";
</script>