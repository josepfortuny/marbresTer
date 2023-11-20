<template>
  <header class="bg-gray-700">
    <nav
      class="max-w-[1800px] mx-auto md:px-10 flex items-center justify-between p-6"
    >
      <div class="flex flex-1" @click.prevent="goToMain()" >
        <img class="h-8 w-auto cursor-pointer" :src="logo" alt="Marbres Ter"/>
      </div>
      <div class="flex md:space-x-12 space-x-4">
        <p  v-for="site in sites" :key="site.name" class="relative w-max two">
          <a
            :href="site.href"
            class="text-m font-semibold sm:text-sm text-white two relative"
          >
            {{ site.name }}
          </a>
        </p>
      </div>
      <div class="flex flex-1 justify-end space-x-2">
        <Languages />
      </div>
    </nav>
  </header>
</template>

<script setup>
import logo from "@/assets/img/marbresTer_logo.png";
import Languages from "@/components/Dropdowns/Languages.vue";
import router from "@/router";
const sites = [
  { name: "Inicio", href: "/" },
  { name: "Servicios", href: "/servicios" },
  { name: "Contactar", href: "/contactar" },
];
const goToMain = () => {
  router.push("/");
};
</script>
<style>
.two:hover span {
  width: 50%;
}
</style>

