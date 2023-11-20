<template>
  <div class="flex-grow">
    <div class="grid grid-cols-1 md:grid-cols-2 flex-grow md:min-h-[calc(100vh-11rem)]">
      <!-- Left content -->
      <FormContactVue/>
      <!-- Right content -->
      <LocationDataVue/>
    </div>
  </div>
</template>
<script setup>
import FormContactVue from "@/components/ContactViews/FormContact.vue"
import LocationDataVue from "@/components/ContactViews/LocationData.vue"
</script>