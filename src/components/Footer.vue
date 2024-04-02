<template>
  <section id="copyright" class="py-8 text-center text-gray-500 text-sm">
    <div
      class="mx-auto border-t pt-8 flex justify-between flex-col md:flex-row space-y-4 md:space-y-0"
    >
      <p>© {{ currentYear }} MARBRES TER MANLLEU, S.L.</p>
    </div>
  </section>
</template>
<script setup>
let currentYear = new Date().getFullYear();
</script>