<template>
  <div class="sm:col-span-2">
    <label
      for="Número de teléfono"
      class="block text-sm font-semibold leading-6 text-gray-900"
    >
      {{ labels.phoneNumber }} *
    </label>
    <div class="relative mt-2.5">
      <div class="absolute inset-y-0 left-0 flex items-center">
        <select
          id="country"
          name="country"
          class="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pls-4 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
          v-model="selectedCountry"
          @change="emitSelectedCountry"
        >
          <option value="+34">+34 ({{ labels.spain }})</option>
          <option value="+33">+33 ({{ labels.france }})</option>
          <option value="+81">+351 ({{ labels.portugal }})</option>
        </select>
      </div>
      <input
        type="tel"
        name="phone-number"
        id="phone-number"
        autocomplete="tel"
        v-bind="$attrs"
        v-model="data"
        class="block w-full rounded-md border-0 px-3.5 py-2 pl-40 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
    </div>
    <div class="mt-2.5" v-if="error">
      <span class="text-xs flex font-semibold text-red-500">
        <font-awesome-icon
          class="w-4 h-4 flex-none text-red-500 mr-1"
          :icon="['fas-light', 'circle-exclamation']"
        />
        {{ labels.mandatoryFieldString }}
      </span>
    </div>
  </div>
</template>
<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const props = defineProps({
  error: {
    type: Boolean,
    default: false,
  },
});

const selectedCountry = ref("+34"); // Default selected country
const data = ref("");

const labels = ref({
  phoneNumber: "Número de teléfono",
  spain: "Spain",
  france: "France",
  portugal: "Portugal",
  mandatoryFieldString: "Campo obligatorio!",
});

const emit = defineEmits(["update:modelValue", "selectedCountry"]);

// Emit the selected country when it changes
const emitSelectedCountry = () => {
  emit("selectedCountry", selectedCountry.value);
};

const updateValue = () => {
  emit("update:modelValue", data);
};

function textToCatalan() {
  labels.value = {
    phoneNumber: "Número de telèfon",
    spain: "Espanya",
    france: "França",
    portugal: "Portugal",
    mandatoryFieldString: "Camp obligatori!",
  };
}

function textToSpanish() {
  labels.value = {
    phoneNumber: "Número de teléfono",
    spain: "España",
    france: "Francia",
    portugal: "Portugal",
    mandatoryFieldString: "Campo obligatorio!",
  };
}

watch(() => {
  if (route.path.includes("/cat")) {
    textToCatalan();
  } else {
    textToSpanish();
  }
});

updateValue();
</script>
