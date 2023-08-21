<template>
  <nuxtLink
    :to="url"
    class="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700"
  >
    <Icon :name="`uil:${icon}`" size="1.5em" />
    <span class="mr-3" sidebar-toggle-item>{{ title }}</span>
  </nuxtLink>
</template>

<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
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
