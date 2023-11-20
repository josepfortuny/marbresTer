<template>
  <img
    :src="src"
    class="h-10 rounded-full z-20 transform duration-500 cursor-pointer hover:scale-125 hover:rotate-6 hover:shadow-lg"
    :alt="alt"
    @click.prevent="openLink"
  />
</template>
<script setup>
const props = defineProps({
  href: {
    type: String,
  },
  alt: {
    type: String,
  },
  src: {
    type: String,
  },
});
const openLink = () => {
  window.open(props.href, "_blank");
};
</script>