<template>
  <nuxtLink
    :to="url"
    class="flex items-center bg-white px-4 py-2 gap-4 flex-grow basis-1 shadow hover:shadow-lg ease-out transition-shadow duration-500 rounded-lg dark:border-gray-600 h-20"
    ><div
      class="bg-primary-100 w-fit rounded-full p-3 flex items-center justify-center"
    >
      <Icon :name="`uil:${icon}`" size="24" class="text-primary-600" />
    </div>
    <div class="flex flex-col gap-2">
      <span class="font-bold text-2xl -mb-2 max-tablet:text-3xl">
        {{ currency(value) }}
      </span>
      <span class="text-gray-500 text-xs">{{ title }}</span>
    </div>
  </nuxtLink>
</template>

<script lang="ts" setup>
import { currency } from '@/helpers/utils';

defineProps({
  title: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
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
