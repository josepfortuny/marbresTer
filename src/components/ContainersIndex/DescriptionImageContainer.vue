<template>
  <div class="flex-grow">
    <div
      class="z-0 grid grid-cols-1 md:grid-cols-2 flex-grow md:min-h-[calc(100vh-11rem)]"
    >
      <!-- Left content -->
      <img
        :src="houseImage"
        class="h-100 transform shadow-lg mt-20"
        :alt="alt"
        @click.prevent="openLink"
      />
      <!-- Right content -->
      <div class="lg:px-10">
        <div class="min-h-screen flex">
          <div class="pt-8 pl-8">
            <h1 class="text-3xl font-bold mb-6">{{ labels.aboutTitle }}</h1>
            <hr class="mt-1 h-1 bg-black rounded-l w-20" />
            <br />
            <p class="text-gray-700 mb-4 text-justify">
              {{ labels.aboutText }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, watch } from "vue";
import houseImage from "@/assets/img/expo_white_1.jpeg";
import { useRoute } from "vue-router";

const route = useRoute();

const labels = ref({
  aboutTitle: "Sobre Marbres Ter",
  aboutText: `Tu destino exclusivo para encimeras de cocina en mármol, granito, Silestone o Porcelánico.
              Con una trayectoria de más de 35 años en el sector, nos enorgullecemos de ofrecerte un servicio completo que abarca desde el asesoramiento experto hasta la instalación meticulosa.
              En Marbres Ter, trabajamos en estrecha colaboración con marcas de renombre como Xtone By Porcelanosa, Neolith y Dekton para asegurarte la mejor calidad en cada proyecto. Nuestro equipo altamente capacitado utiliza tecnología avanzada, incluyendo el corte por chorro de agua y nuestras juntas semi invisibles, para garantizar precisión en cada detalle.
              Estamos dedicados a ofrecerte soluciones personalizadas y a medida, transformando tus ideas en realidad. Desde encimeras hasta suelos, escaleras, revestimientos y mucho más, estamos preparados para realizar cualquier proyecto en mármol que puedas imaginar.
              En Marbres Ter, no solo nos destacamos por la calidad de nuestros productos, sino también por nuestro compromiso con la excelencia en el servicio al cliente. Estamos aquí para ayudarte en cada paso del camino, desde la elección del material hasta la instalación final. Ven a visitarnos y descubre por qué somos líderes en el sector de los mármoles en Manlleu y sus alrededores. Tu satisfacción es nuestra principal prioridad y estamos ansiosos por hacer realidad tus proyectos de diseño con elegancia y estilo.`,
});

watch(() => {
  if (route.path.includes("/cat")) {
    textToCatalan();
  } else {
    textToSpanish();
  }
});

function textToCatalan() {
  labels.value = {
    aboutTitle: "Sobre Marbres Ter",
    aboutText: `El teu destí exclusiu per a teules de cuina en marbre, granit, Silestone o Porcel·lànic.
                Amb una trajectòria de més de 35 anys en el sector, ens enorgullim d'oferir-te un servei complet que abasta des de l'assessorament expert fins a la instal·lació meticulosa.
                A Marbres Ter, treballem en estreta col·laboració amb marques de renom com Xtone By Porcelanosa, Neolith i Dekton per assegurar-te la millor qualitat en cada projecte. El nostre equip altament capacitats utilitza tecnologia avançada, incloent el tall per raig d'aigua i les nostres juntes semi invisibles, per garantir precisió en cada detall.
                Estem dedicats a oferir-te solucions personalitzades i a mida, transformant les teves idees en realitat. Des de teules fins a sòls, escales, revestiments i molt més, estem preparats per realitzar qualsevol projecte en marbre que puguis imaginar.
                A Marbres Ter, no només ens destaquem per la qualitat dels nostres productes, sinó també pel nostre compromís amb l'excel·lència en el servei al client. Estem aquí per ajudar-te en cada pas del camí, des de la elecció del material fins a la instal·lació final. Vine a visitar-nos i descobreix per què som líders en el sector dels marbres a Manlleu i els seus voltants. La teva satisfacció és la nostra principal prioritat i estem impacients per fer realitat els teus projectes de disseny amb elegància i estil.`,
  };
}

function textToSpanish() {
  labels.value = {
    aboutTitle: "Sobre Marbres Ter",
    aboutText: `Tu destino exclusivo para encimeras de cocina en mármol, granito, Silestone o Porcelánico.
                Con una trayectoria de más de 35 años en el sector, nos enorgullecemos de ofrecerte un servicio completo que abarca desde el asesoramiento experto hasta la instalación meticulosa.
                En Marbres Ter, trabajamos en estrecha colaboración con marcas de renombre como Xtone By Porcelanosa, Neolith y Dekton para asegurarte la mejor calidad en cada proyecto. Nuestro equipo altamente capacitado utiliza tecnología avanzada, incluyendo el corte por chorro de agua y nuestras juntas semi invisibles, para garantizar precisión en cada detalle.
                Estamos dedicados a ofrecerte soluciones personalizadas y a medida, transformando tus ideas en realidad. Desde encimeras hasta suelos, escaleras, revestimientos y mucho más, estamos preparados para realizar cualquier proyecto en mármol que puedas imaginar.
                En Marbres Ter, no solo nos destacamos por la calidad de nuestros productos, sino también por nuestro compromiso con la excelencia en el servicio al cliente. Estamos aquí para ayudarte en cada paso del camino, desde la elección del material hasta la instalación final. Ven a visitarnos y descubre por qué somos líderes en el sector de los mármoles en Manlleu y sus alrededores. Tu satisfacción es nuestra principal prioridad y estamos ansiosos por hacer realidad tus proyectos de diseño con elegancia y estilo.`,
  };
}
</script>
