<template>
  <component :is="'default-layout'">
    <router-view />
    <CookieConsent />
  </component>
</template>
<script setup>
import { RouterView } from "vue-router";
import CookieConsent from "@/components/Popups/Cookies.vue";
</script>