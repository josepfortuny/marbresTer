I<template>
  <div :class="twoColumns ? 'sm:col-span-2' : ''">
    <label
      for="text"
      class="block text-sm font-semibold leading-6 text-gray-900"
    >
      <span>
        {{ label }}
      </span>
      <span> *</span>
    </label>
    <div class="mt-2.5">
      <input
        :id="id"
        :name="id"
        :type="type"
        :autocomplete="id"
        v-bind="$attrs"
        v-model="data"
        class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
const labels = ref({
  mandatoryFieldString: "Campo obligatorio!",
});

const props = defineProps({
  label: String,
  id: String,
  type: {
    type: String,
    default: "text",
  },
  twoColumns: {
    type: Boolean,
    default: true,
  },
  error: {
    type: Boolean,
    default: false,
  },
});

const data = ref("");
const emit = defineEmits(["update:modelValue"]);
const updateValue = () => {
  emit("update:modelValue", data);
};

function textToCatalan() {
  labels.value = {
    mandatoryFieldString: "Camp obligatori!",
  };
}

function textToSpanish() {
  labels.value = {
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
  