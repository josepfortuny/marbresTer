<template>
  <section
    v-if="!accepted"
    class="fixed bottom-0 w-full bg-gray-50 dark:bg-gray-800"
  >
    <div
      class="container px-4 py-8 mx-auto lg:flex lg:items-center lg:gap-x-16"
    >
      <p class="text-gray-600 dark:text-gray-300">
        {{ consentText }}
      </p>

      <div class="flex items-center mt-6 gap-x-4 lg:gap-x-8 shrink-0 lg:mt-0">
        <button
          @click="openSettings"
          class="w-1/2 text-sm text-gray-800 underline transition-colors duration-300 md:w-auto dark:text-white dark:hover:text-gray-400 hover:text-gray-600 focus:outline-none"
        >
          {{ settingsText }}
        </button>

        <button
          @click="acceptCookies"
          class="text-sm w-1/2 md:w-auto font-medium bg-gray-900 rounded-lg hover:bg-gray-900/80 text-white px-4 py-2.5 duration-300 transition-colors focus:outline-none"
        >
          {{ acceptText }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, watch } from "vue";
import Cookies from "js-cookie";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

const isCatRoute = route.path.includes("cat");

const accepted = ref(Cookies.get("cookiesAccepted") === "false" || false);

const consentTexts = {
  es: "Usamos cookies para asegurar que te damos la mejor experiencia en nuestra web. Si continúas usando este sitio, asumiremos que estás de acuerdo con ello.",
  ca: "Fem servir galetes per assegurar-nos que t'oferim la millor experiència al nostre lloc web. Si continues utilitzant aquest lloc, assumirem que hi estàs d'acord.",
};

const settingsTexts = {
  es: "Configuración de cookies",
  ca: "Configuració de galetes",
};

const acceptTexts = {
  es: "Aceptar todas las cookies",
  ca: "Acceptar totes les cookies",
};

const consentText = ref(isCatRoute ? consentTexts.ca : consentTexts.es);
const settingsText = ref(isCatRoute ? settingsTexts.ca : settingsTexts.es);
const acceptText = ref(isCatRoute ? acceptTexts.ca : acceptTexts.es);

const openSettings = () => {
  router.push("/politicadeprivacidad");
};

const acceptCookies = () => {
  Cookies.set("cookiesAccepted", "true", { expires: 365 });
  accepted.value = true;
};

function textToCatalan() {
  consentText.value = consentTexts.ca;
  settingsText.value = settingsTexts.ca;
  acceptText.value = acceptTexts.ca;
}

function textToSpanish() {
  consentText.value = consentTexts.es;
  settingsText.value = settingsTexts.es;
  acceptText.value = acceptTexts.es;
}

watch(() => {
  if (route.path.includes("/cat")) {
    textToCatalan();
  } else {
    textToSpanish();
  }
});
</script>
