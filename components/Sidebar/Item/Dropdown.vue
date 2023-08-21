<template>
  <div>
    <button
      type="button"
      class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
      aria-controls="dropdown-playground"
      data-collapse-toggle="dropdown-playground"
      @click="isOpen = !isOpen"
    >
      <Icon :name="`uil:${icon}`" size="1.5em" />
      <span
        class="flex-1 mr-3 text-right whitespace-nowrap"
        sidebar-toggle-item
        >{{ title }}</span
      >
      <Icon name="uil:angle-down" size="1.5em" />
    </button>

    <ul v-if="isOpen" id="dropdown-playground" class="space-y-2 py-2">
      <slot />
    </ul>
  </div>
</template>

<script lang="ts" setup>
const isOpen: Ref<boolean> = ref(false);

defineProps({
  title: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: false,
    default: '',
  },
});
</script>
