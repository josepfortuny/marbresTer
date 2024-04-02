<template>
  <div class="sm:py-20 py-24 px-10">
    <TitleLocation />
    <form action="#" method="POST" class="mt-16 max-w-[550px] sm:mt-20">
      <span>{{ labels.locationInfo }}</span>
      <br />
      <br />
      <span
        ><b>{{ labels.addressLabel }}:</b> {{ labels.address }}</span
      >
      <br />
      <br />
      <b>{{ labels.postalCodeLabel }}:</b> {{ labels.postalCode }},
      {{ labels.city }}
      <br />
      <br />
      <b>{{ labels.phoneLabel }}:</b> {{ labels.phoneNumber }}
      <br />
      <br />
      <b>{{ labels.scheduleLabel }}:</b> {{ labels.schedule }}
      <br />
      <br />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57029.92471547538!2d2.245976427985735!3d41.97197184263327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a52585f77a5bef%3A0x738d7822cd6f1b01!2sM%C3%A1rmoles%20Ter!5e0!3m2!1ses!2ses!4v1698508746519!5m2!1ses!2ses"
        width="600"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </form>
  </div>
</template>

<script setup>
import TitleLocation from "@/components/Titles/TitleLocation.vue";
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const labels = ref({
  locationInfo:
    "Podemos atenderle en nuestro establecimiento en Manlleu, donde estaremos encantados de asesorarle con todo aquello que necesite 😃.",
  addressLabel: "Dirección",
  address: "Carrer Andreu Costa 22",
  postalCodeLabel: "Código postal",
  postalCode: "08560",
  city: "Manlleu, Barcelona",
  phoneLabel: "Teléfono",
  phoneNumber: "938512104",
  scheduleLabel: "Horario",
  schedule: "Lunes a viernes de 9:00 a 13:30 y de 15:00 a 20:00",
});

function textToCatalan() {
  labels.value = {
    locationInfo:
      "Podem atendre-us al nostre establiment a Manlleu, on estarem encantats d'assessorar-vos amb tot allò que necessiteu 😃.",
    addressLabel: "Adreça",
    address: "Carrer Andreu Costa 22",
    postalCodeLabel: "Codi postal",
    postalCode: "08560",
    city: "Manlleu, Barcelona",
    phoneLabel: "Telèfon",
    phoneNumber: "938512104",
    scheduleLabel: "Horari",
    schedule: "Dilluns a divendres de 9:00 a 13:30 i de 15:00 a 20:00",
  };
}

function textToSpanish() {
  labels.value = {
    locationInfo:
      "Podemos atenderle en nuestro establecimiento en Manlleu, donde estaremos encantados de asesorarle con todo aquello que necesite 😃.",
    addressLabel: "Dirección",
    address: "Carrer Andreu Costa 22",
    postalCodeLabel: "Código postal",
    postalCode: "08560",
    city: "Manlleu, Barcelona",
    phoneLabel: "Teléfono",
    phoneNumber: "938512104",
    scheduleLabel: "Horario",
    schedule: "Lunes a viernes de 9:00 a 13:30 y de 15:00 a 20:00",
  };
}

watch(() => {
  if (route.path.includes("/cat")) {
    textToCatalan();
  } else {
    textToSpanish();
  }
});
</script>
