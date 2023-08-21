<template>
  <nuxtLink
    :to="url"
    class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
  >
    <Icon :name="`uil:${icon}`" size="1.5em" />
  </nuxtLink>
</template>

<script lang="ts" setup>
defineProps({
  icon: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});
</script>
