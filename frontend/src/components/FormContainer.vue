<template>
  <div
    class="rounded-lg bg-main-bg-color shadow-lg border-[#ccc] border"
    :class="props.padding ? 'p-4 md:p-5' : ''"
  >
    <slot />
  </div>
</template>
<script setup>
const props = defineProps({
  padding: {
    type: Boolean,
    default: true,
  },
});
</script>