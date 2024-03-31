<template>
  <header class="bg-gray-700">
    <nav
      class="max-w-[1800px] mx-auto md:px-10 flex items-center justify-between p-6"
    >
      <div class="sm:visible invisible flex flex-1" @click.prevent="goToMain()">
        <img class="h-8 w-auto cursor-pointer" :src="logo" alt="Marbres Ter" />
      </div>
      <div class="flex md:space-x-12 space-x-4">
        <p class="relative w-max">
          <a
            class="text-m font-semibold sm:text-sm hover:text-white text-gray-300 cursor-pointer"
            @click="navigateTo('/')"
          >
            {{ homeText }}
          </a>
        </p>
        <!-- Dropdown menu -->
        <div
          class="relative"
          @mouseover="showDropdown = true"
          @mouseleave="showDropdown = false"
        >
          <p
            class="flex items-center space-x-2 hover:text-white text-gray-300 cursor-pointer"
          >
            <a class="text-m font-semibold">{{ servicesText }}</a>
            <ChevronDownIcon
              class="mt-1 ml-1 h-4 w-4 transition duration-300"
            />
          </p>
          <div
            v-if="showDropdown"
            id="dropdownHover"
            class="z-10 absolute top-full left-0 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
          >
            <ul
              class="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownHoverButton"
            >
              <li>
                <a
                  @click="navigateTo('/servicios')"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >{{ service1Text }}</a
                >
              </li>
              <li>
                <a
                  @click="navigateTo('/servicios')"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >{{ service2Text }}</a
                >
              </li>
            </ul>
          </div>
        </div>

        <p class="relative w-max">
          <a
            class="text-m font-semibold sm:text-sm hover:text-white text-gray-300 cursor-pointer"
            @click="navigateTo('/contactar')"
          >
            {{ contactText }}
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
import { ChevronDownIcon } from "@heroicons/vue/20/solid";
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

let showFlyout = ref(false);
let showDropdown = ref(false); // Added ref for dropdown visibility

let homeText = ref("");
let servicesText = ref("");
let service1Text = ref("");
let service2Text = ref("");
let service3Text = ref("");
let contactText = ref("");
let dropdownText = ref("Dropdown"); // Dropdown menu text

function textToCatalan() {
  homeText.value = "Inici";
  servicesText.value = "Serveis";
  service1Text.value = "servei 1";
  service2Text.value = "servei 2";
  service3Text.value = "servei 3";
  contactText.value = "Contactar";
  dropdownText.value = "Desplegable"; // Dropdown menu text in Catalan
}

function textToSpanish() {
  homeText.value = "Inicio";
  servicesText.value = "Servicios";
  service1Text.value = "servicio 1";
  service2Text.value = "servicio 2";
  service3Text.value = "servicio 3";
  contactText.value = "Contactar";
  dropdownText.value = "Dropdown"; // Dropdown menu text in Spanish
}

function navigateTo(path) {
  let currentPath = route.path;
  if (currentPath.includes("/cat")) {
    router.push("/cat" + path);
  } else {
    router.push(path);
  }
}

const goToMain = () => {
  navigateTo("/");
};

watch(() => {
  if (route.path.includes("/cat")) {
    textToCatalan();
  } else {
    textToSpanish();
  }
});
</script>
