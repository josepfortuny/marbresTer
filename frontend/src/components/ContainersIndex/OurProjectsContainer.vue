<template>
    <div >
        <h1 class="mt-10 text-3xl font-bold mb-6">Nuestros Proyectos </h1>
        <hr class="mt-1 h-1 bg-black rounded-l w-0">
        <br/>
        <p class="text-gray-700 mb-4">
            Tu destino exclusivo para encimeras de cocina en mármol, granito, Silestone o Porcelánico.
        </p>
        <p class="text-gray-700 mb-4">
            Con una trayectoria de más de 35 años en el sector, nos enorgullecemos de ofrecerte un servicio completo que abarca desde el asesoramiento experto hasta la instalación meticulosa.
        </p>
        <p class="text-gray-700 mb-4">
            En Marbres Ter, trabajamos en estrecha colaboración con marcas de renombre como Xtone By Porcelanosa, Neolith y Dekton para asegurarte la mejor calidad en cada proyecto. Nuestro equipo altamente capacitado utiliza tecnología avanzada, incluyendo el corte por chorro de agua y nuestras juntas semi invisibles, para garantizar precisión en cada detalle.
        </p>
        <p class="text-gray-700 mb-6">
            Estamos dedicados a ofrecerte soluciones personalizadas y a medida, transformando tus ideas en realidad. Desde encimeras hasta suelos, escaleras, revestimientos y mucho más, estamos preparados para realizar cualquier proyecto en mármol que puedas imaginar.
        </p>
        <p class="text-gray-700 justify">
            En Marbres Ter, no solo nos destacamos por la calidad de nuestros productos, sino también por nuestro compromiso con la excelencia en el servicio al cliente. Estamos aquí para ayudarte en cada paso del camino, desde la elección del material hasta la instalación final. Ven a visitarnos y descubre por qué somos líderes en el sector de los mármoles en Manlleu y sus alrededores. Tu satisfacción es nuestra principal prioridad y estamos ansiosos por hacer realidad tus proyectos de diseño con elegancia y estilo.
        </p>
    </div>
</template>

<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
const stringTitle = route.path.includes("cat") ? "Els nostres projectes" : "Nuestros proyectos"
</script>
