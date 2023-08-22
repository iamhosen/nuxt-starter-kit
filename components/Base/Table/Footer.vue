<template>
  <nav
    class="flex flex-col items-start justify-between p-4 space-y-3 md:flex-row md:items-center md:space-y-0"
    aria-label="Table navigation"
  >
    <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
      نمایش
      <span class="font-semibold text-gray-900 dark:text-white"
        >{{ from }}-{{ to }}</span
      >
      از
      <span class="font-semibold text-gray-900 dark:text-white">{{
        total
      }}</span>
    </span>
    <BasePagination
      :length="length"
      :current-page="currentPage"
      @change-page="changePage"
    />
  </nav>
</template>

<script lang="ts" setup>
// shorten pages if there are too many

const emit = defineEmits(['change-page']);
function changePage(page: number) {
  if (page === props.currentPage) return;
  emit('change-page', page);
}

const props = defineProps({
  from: {
    type: Number,
    required: true,
  },
  to: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  length: {
    type: Number,
    required: true,
  },
  currentPage: {
    type: Number,
    required: true,
  },
});
</script>
