<template>
  <li>
    <nuxtLink
      :to="url"
      class="text-base text-gray-900 rounded-lg flex items-center p-2 group hover:bg-gray-100 transition duration-75 pr-11 dark:text-gray-200 dark:hover:bg-gray-700"
    >
      <Icon v-if="icon" :name="`uil:${icon}`" size="1.5em" />
      <span :class="{ 'mr-2': icon }"> {{ title }} </span>
    </nuxtLink>
  </li>
</template>

<script lang="ts" setup>
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
  url: {
    type: String,
    required: true,
  },
});
</script>
