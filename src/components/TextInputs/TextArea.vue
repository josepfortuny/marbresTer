<template>
  <div class="sm:col-span-2">
    <label for="text" class="block text-sm font-semibold leading-6 text-gray-900">
      <span>{{ title }}</span>
    </label>
    <div class="mt-2.5">
      <textarea
        ref="textarea"
        name="text"
        v-model="text"
        rows="4"
        :placeholder="placeholder"
        class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
    </div>
  </div>
</template>
<script setup>
import { ref, watch } from "vue";
const props = defineProps({
  placeholder: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
});
const text = ref("");
const emit = defineEmits(["update:modelValue"]);
const updateValue = () => {
  emit("update:modelValue", text);
};
updateValue();
</script>