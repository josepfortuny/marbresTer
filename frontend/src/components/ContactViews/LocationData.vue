<template>
    <div class="sm:py-20 py-24 px-10">
      <TitleLocation/>
      <form action="#" method="POST" class="mt-16 max-w-[550px] sm:mt-20">
        <span>Podemos atenderle en nuestro establecimiento en  Manlleu, donde estaremos encantados de asesorarle con todo aquello que necesite 😃.</span>
        <br>
        <br>
        <span><b>Dirección:</b> Carrer Andreu Costa 22</span>
        <br>
        <br>
        <b>Código postal:</b> 08560 Manlleu, Barcelona
        <br>
        <br>
        <b>Teléfono:</b> 938512104
        <br>
        <br>
        <b>Horario:</b> Lunes a viernes de 9:00 a 13:30 y de 15:00 a 20:00
        <br>
        <br>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57029.92471547538!2d2.245976427985735!3d41.97197184263327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a52585f77a5bef%3A0x738d7822cd6f1b01!2sM%C3%A1rmoles%20Ter!5e0!3m2!1ses!2ses!4v1698508746519!5m2!1ses!2ses" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </form>
    </div>
  </template>
  
  <script setup>
  import  TitleLocation from "@/components/Titles/TitleLocation.vue";
  import InputForm from "@/components/TextInputs/InputForm.vue";
  import SwitchRenameVue from "@/components/Switch/SwitchRename.vue"
  import { ref } from "vue";
  const agreed = ref(false);
  </script>