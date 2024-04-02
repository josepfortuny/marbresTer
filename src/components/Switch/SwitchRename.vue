<template>
    <div class="sm:col-span-2">
        <SwitchGroup as="div" class="block flex gap-x-4 leading-6 sm:col-span-2">
            <div class="flex h-6 items-center">
                <Switch
                    v-model="enabled"
                    :class="[
                    enabled ? 'bg-sky-600' : 'bg-gray-200',
                    'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
                    ]"
                >
                    <span
                        aria-hidden="true"
                        :class="[
                            enabled ? 'translate-x-3.5' : 'translate-x-0',
                            'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out',
                        ]"
                    />
                </Switch>
            </div>
            <SwitchLabel as="span" class="text-sm leading-6 text-gray-600">
                {{ beforePolicyString }}
                <a href="/politicadeprivacidad" class="font-semibold text-sky-600"
                    >{{ privacyPolicyString }}</a
                >.
            </SwitchLabel>
        </SwitchGroup>
        
        <div class="mt-2.5 block" v-if="error">
            <span class="text-xs flex font-semibold text-red-500">
                <font-awesome-icon
                class="w-4 h-4 flex-none text-red-500 mr-1"
                :icon="['fas-light', 'circle-exclamation']"/>
                {{  mandatoryFieldString }}
            </span>
        </div>
    </div>
</template>
<script setup>
import { ref , watch} from "vue";
import { Switch, SwitchGroup, SwitchLabel } from "@headlessui/vue";
import { useRoute } from "vue-router";

const route = useRoute();
// strings
const mandatoryFieldString = ref("Campo obligatorio!")
const privacyPolicyString = ref("política de privacidad")
const beforePolicyString = ref("Al seleccionar esto, aceptas nuestra")
const props = defineProps({
  error: {
    type: Boolean,
    default: true,
  }
});
const emit = defineEmits(["update:modelValue"]);
const enabled = ref(false);
const updateValue = () => {
  emit("update:modelValue", enabled);
};


function textToCatalan() {
  mandatoryFieldString.value = "Camp obligatori!";
  privacyPolicyString.value = "política de privacitat"
  beforePolicyString.value = "Al seleccionar, acceptes la nostra"
}

function textToSpanish() {
  mandatoryFieldString.value = "Campo obligatorio!";
  privacyPolicyString.value = "política de privacidad";
  beforePolicyString.value = "Al seleccionar, aceptas nuestra"
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