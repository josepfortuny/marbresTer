<template>
  <div class="flex flex-col items-center">
    <div class="flex flex-col items-center">
      <h1 class="mt-10 text-3xl font-bold mb-3">{{ serviciosTitle }}</h1>
      <hr class="mt-1 h-1 bg-black rounded-l w-20" />
      <br />
    </div>
    <br />
    <div class="flex justify-center items-center gap-8 mt-10">
      <div class="relative text-center">
        <div
          class="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg relative"
        >
          <img :src="DektonLogo" class="object-cover" />
          <div
            class="absolute inset-0 flex flex-col items-center justify-end text-white bg-black bg-opacity-50 p-4 opacity-0 hover:opacity-100 transition-opacity duration-300"
          >
            <h3 class="text-xl font-semibold">{{ installationTitle }}</h3>
            <p class="text-sm mt-2">{{ installationDescription }}</p>
          </div>
        </div>
        <div class="mt-4">
          <h3 class="text-xl font-semibold">{{ installationTitle }}</h3>
        </div>
      </div>

      <div class="relative text-center">
        <div
          class="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg relative"
        >
          <img :src="NeoLithLogo" class="object-cover" />
          <div
            class="absolute inset-0 flex flex-col items-center justify-end text-white bg-black bg-opacity-50 p-4 opacity-0 hover:opacity-100 transition-opacity duration-300"
          >
            <h3 class="text-xl font-semibold">{{ customCutsTitle }}</h3>
            <p class="text-sm mt-2">{{ customCutsDescription }}</p>
          </div>
        </div>
        <div class="mt-4">
          <h3 class="text-xl font-semibold">{{ customCutsTitle }}</h3>
        </div>
      </div>

      <div class="relative text-center">
        <div
          class="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg relative"
        >
          <img :src="SilestoneLogo" class="object-cover" />
          <div
            class="absolute inset-0 flex flex-col items-center justify-end text-white bg-black bg-opacity-50 p-4 opacity-0 hover:opacity-100 transition-opacity duration-300"
          >
            <h3 class="text-xl font-semibold">
              {{ measurementAndAdviceTitle }}
            </h3>
            <p class="text-sm mt-2">{{ measurementAndAdviceDescription }}</p>
          </div>
        </div>
        <div class="mt-4">
          <h3 class="text-xl font-semibold">{{ measurementAndAdviceTitle }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import DektonLogo from "@/assets/img/expo_black_2.jpeg";
import NeoLithLogo from "@/assets/img/house_gray_2.jpeg";
import SilestoneLogo from "@/assets/img/house_gray_1.jpeg";

const route = useRoute();

const serviciosTitle = ref("");
const installationTitle = ref("");
const installationDescription = ref("");
const customCutsTitle = ref("");
const customCutsDescription = ref("");
const measurementAndAdviceTitle = ref("");
const measurementAndAdviceDescription = ref("");

function setLanguageTexts(language) {
  if (language === "cat") {
    serviciosTitle.value = "Serveis que oferim";
    installationTitle.value = "Instal·lació de Marbres";
    installationDescription.value =
      "Oferim serveis integrals d'instal·lació de marbres en projectes de construcció, gestionant des del transport i adquisició del material fins al poliment final.";
    customCutsTitle.value = "Talls a Mida";
    customCutsDescription.value =
      "Si ja posseeix una peça de pedra natural i necessita serveis de tall especialitzat, el nostre equip professional està capacitad per a ajudar-vos.";
    measurementAndAdviceTitle.value = "Mesura i Assessorament";
    measurementAndAdviceDescription.value =
      "Realitzem visites tècniques per prendre mesures precises a la seva llar. A més, proporcionem orientació experta per garantir la millor elecció i adaptació de materials segons les necessitats estètiques i funcionals de la seva llar.";
  } else {
    serviciosTitle.value = "Servicios que ofrecemos";
    installationTitle.value = "Instalación de Mármoles";
    installationDescription.value =
      "Ofrecemos servicios integrales de instalación de mármoles en proyectos de construcción, gestionando desde el transporte y adquisición del material hasta el pulimento final.";
    customCutsTitle.value = "Cortes a Medida";
    customCutsDescription.value =
      "Si ya posee una pieza de piedra natural y necesita servicios de corte especializado, nuestro equipo profesional está capacitado para ayudarle.";
    measurementAndAdviceTitle.value = "Medición y Asesoramiento";
    measurementAndAdviceDescription.value =
      "Realizamos visitas técnicas para tomar medidas precisas en su hogar. Además, proporcionamos orientación experta para garantizar la mejor elección y adaptación de materiales según las necesidades estéticas y funcionales de su hogar.";
  }
}

watch(() => {
  const language = route.path.includes("/cat") ? "cat" : "esp";
  setLanguageTexts(language);
});
</script>
  