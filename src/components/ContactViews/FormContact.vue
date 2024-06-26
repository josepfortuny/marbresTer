<template>
  <div class="isolate bg-white px-6 py-24 sm:py-20 lg:px-8">
    <TitlesContactsVue/>
    <form @submit.prevent="validateAndSubmitForm()" class="mx-auto mt-16 max-w-xl sm:mt-20">
      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <InputForm
          :label="labels.firstName"
          id="first-name"
          :two-columns='false'
          v-model="form.firstName"
          :error="errors.firstName"/>
        <InputForm
          :label="labels.lastName"
          id="last-name"
          :two-columns='false'
          v-model="form.secondName"
          :error="errors.secondName"
          />
        <InputForm 
          :label="labels.email"
          id="email" 
          type="email"
          v-model="form.email"
          :error="errors.email"
          />
        <InputTelephone @selectedCountry="form.selectedCountry" v-model="form.phoneNumber" :error="errors.phoneNumber"/>
        <TextAreaVue :title="labels.textArea"/>
        <SwitchRenameVue v-model="form.agreed" :error="errors.agreed"/>
      </div>
      <div class="mt-2.5">
        <span class="text-sm font-semibold leading-6 text-gray-500">
          {{mandatoryFieldString}}
        </span>
      </div>
      <div class="mt-10">
        <button
          type="submit"
          class="block w-full rounded-md bg-sky-600 p-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-sky-500">
          {{buttonString}}
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import  TitlesContactsVue from "@/components/Titles/TitlesContacts.vue";
import InputForm from "@/components/TextInputs/InputForm.vue";
import SwitchRenameVue from "@/components/Switch/SwitchRename.vue";
import InputTelephone from "@/components/TextInputs/InputTelephone.vue";
import TextAreaVue from "@/components/TextInputs/TextArea.vue";
import { ref , computed, watch} from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
// strings
const buttonString = ref("Enviar");
const  titleTextAreaString= ref("Mensaje")
const mandatoryFieldString = ref("Los campos marcados con * son obligatorios.")

const labels = ref({
  firstName: 'Nombre',
  lastName: 'Apellido',
  email: 'Email',
  textArea: 'Mensaje'
});

// Variables
const form = ref({
  firstName: null,
  secondName: null,
  email: null,
  phoneNumber: null,
  selectedCountry: "+34",
  textArea: null,
  agreed: false,
});

const errors = ref({
  firstName: false,
  secondName: false,
  email: false,
  phoneNumber: false,
  agreed: false,
});

const hasErrors = computed(() => {
  return (
    errors.value.firstName ||
    errors.value.secondName ||
    errors.value.email ||
    errors.value.phoneNumber ||
    errors.value.agreed
  );
});

const validateAndSubmitForm = () => {
  // Check if required fields are empty
  if (!form.value.firstName){
    errors.value.firstName = true
  }else{
    errors.value.firstName = false
  }
  if (!form.value.secondName){
    errors.value.secondName = true
  }else{
    errors.value.secondName = false
  }
  if (!form.value.email){
    errors.value.email = true
  }else{
    errors.value.email = false
  }
  if (!form.value.phoneNumber){
    errors.value.phoneNumber = true
  }else{
    errors.value.phoneNumber = false
  }
  console.log(form.value.agreed)
  if (!form.value.agreed){
    errors.value.agreed = true
  }else{
    errors.value.agreed = false
  }

  if (!hasErrors.value) {
    sendEmail()
  }
  // Prevent form submission
}
// If all required fields are filled, submit the form
const errorMessage = ref("");
const sendEmail = () => {
    Email.send({
      Host : "smtp.elasticemail.com",
      Username : "username",
      Password : "password",
      To : 'jfortunycasablancas@gmail.com',
      From : "jfortunycasablancas@gmail.com",
      Subject : "This is the subject",
      Body : "And this is the body"
  }).then(
    message => alert(message)
  );
}

function textToCatalan() {
  buttonString.value = "Enviar";
  titleTextAreaString.value = "Missatge"
  mandatoryFieldString.value = "Els camps marcats amb * són obligatoris"
  labels.value = {
    firstName: 'Nom',
    lastName: 'Cognom',
    email: 'Correu electrònic',
    textArea: 'Missatge'
  };
}

function textToSpanish() {
  buttonString.value = "Enviar";
  titleTextAreaString.value = "Mensaje"
  mandatoryFieldString.value = "Los campos marcados con * son obligatorios."
  labels.value = {
    firstName: 'Nombre',
    lastName: 'Apellido',
    email: 'Correo electrónico',
    textArea: 'Mensaje'
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
