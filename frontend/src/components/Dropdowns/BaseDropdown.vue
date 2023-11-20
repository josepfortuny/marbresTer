<template>
  <div class="text-right">
    <Menu as="div" class="inline-block relative">
      <div>
        <MenuButton
          class="inline-flex w-full items-center rounded-default text-sm transition duration-300 group"
          v-slot="{ open }"
        >
          <slot name="label"></slot>
          <ChevronDownIcon
            :class="open ? 'transform rotate-180' : ''"
            class="-mt-1 ml-1 h-8 w-8 transition duration-300 text-white"
            aria-hidden="true"
          />
        </MenuButton>
      </div>

      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems
          class="absolute right-0 mt-2 origin-top-right rounded-md bg-white focus:outline-none z-30 py-1"
        >
          <MenuItem v-for="item in items" :key="item.text">
            <div class="px-2">
              <div v-if="item.borderTop" class="border-t my-1"></div>
              <button class="flex text-left" @click="item.click()">
                {{ item.text }}
              </button>
            </div>
          </MenuItem>
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>
  
<script setup>
import { computed, defineProps } from "vue";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";
import { useRouter } from "vue-router";

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});
//router for changing catalan to spanish

</script>

<style scoped>
.item {
  @apply inline-flex w-full justify-start items-center rounded-md px-4 py-2 text-sm space-x-3;
}
</style>
  