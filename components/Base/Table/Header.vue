<template>
  <div
    class="flex flex-col px-4 py-3 space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0"
  >
    <div class="flex flex-col gap-4">
      <h1 class="-mb-3 font-bold text-lg">{{ title }}</h1>
      <span class="text-gray-500 text-sm">{{ description }}</span>
    </div>
    <div
      class="flex gap-2 flex-col flex-shrink-0 md:flex-row md:items-center lg:justify-start"
    >
      <Menu v-if="filterable" as="div" class="relative inline-block text-left">
        <div>
          <MenuButton
            class="flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            <Icon name="uil:filter" size="1.25em" />
            فیلتر
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
            class="absolute left-0 mt-2 w-48 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <div class="flex items-center pr-3">
              <input
                id="vue-checkbox"
                type="radio"
                value=""
                name="filter"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="vue-checkbox"
                class="py-3 ml-2 mr-4 text-sm font-medium text-gray-900 dark:text-gray-300"
                >جدیدترین</label
              >
            </div>
            <div class="flex items-center pr-3">
              <input
                id="vue-checkbox"
                type="radio"
                value=""
                name="filter"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="vue-checkbox"
                class="py-3 ml-2 mr-4 text-sm font-medium text-gray-900 dark:text-gray-300"
                >جدیدترین</label
              >
            </div>
            <div class="flex items-center pr-3">
              <input
                id="vue-checkbox"
                type="radio"
                value=""
                name="filter"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="vue-checkbox"
                class="py-3 ml-2 mr-4 text-sm font-medium text-gray-900 dark:text-gray-300"
                >جدیدترین</label
              >
            </div>
          </MenuItems>
        </transition>
      </Menu>
      <button
        v-if="exportable"
        type="button"
        class="flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      >
        <Icon name="uil:export" size="1.25em" />
        خروجی
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Menu, MenuButton, MenuItems } from '@headlessui/vue';

defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
  exportable: {
    type: Boolean,
    default: false,
  },
  filterable: {
    type: Boolean,
    default: false,
  },
});
</script>
