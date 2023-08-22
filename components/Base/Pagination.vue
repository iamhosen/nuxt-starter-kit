<template>
  <ul class="inline-flex items-stretch -space-x-px">
    <li>
      <span
        class="flex items-center justify-center h-full py-1.5 px-2 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        :class="{
          'cursor-not-allowed': currentPage === 1,
        }"
        @click="changePage(currentPage - 1)"
      >
        <span class="sr-only">Next</span>
        <Icon name="uil:angle-right" size="1.5em" />
      </span>
    </li>

    <li v-for="(page, index) in pagination" :key="index">
      <span
        class="flex items-center justify-center h-full px-4 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        :class="{
          'font-medium text-primary-700 bg-primary-100 dark:text-white dark:bg-gray-700':
            page === currentPage,
          'cursor-not-allowed': !page,
        }"
        @click="changePage(page)"
      >
        {{ page ? page : '...' }}
      </span>
    </li>
    <li>
      <span
        class="flex items-center justify-center h-full py-1.5 px-2 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        :class="{
          'cursor-not-allowed': currentPage === length,
        }"
        @click="changePage(currentPage + 1)"
      >
        <span class="sr-only">Previous</span>
        <Icon name="uil:angle-left" size="1.5em" />
      </span>
    </li>
  </ul>
</template>

<script lang="ts" setup>
const pagination = computed<number[]>(() => {
  if (props.length > 7) {
    if (props.currentPage < 4) {
      return [...makeArray(5), 0, props.length];
    } else if (props.currentPage > props.length - 4) {
      return [1, 0, ...makeArray(props.length, props.length - 4)];
    } else {
      return [
        1,
        0,
        ...makeArray(props.currentPage + 2, props.currentPage - 1),
        0,
        props.length,
      ];
    }
  } else {
    return props.length;
  }
});
const makeArray = (to: number, from = 1) => {
  const arr: number[] = [];
  for (let i = from; i <= to; i++) {
    arr.push(i);
  }
  return arr;
};

const emit = defineEmits(['change-page']);

const changePage = (page: number) => {
  if (page === props.currentPage) return;
  if (page === 0) return;
  if (page > props.length) return;
  emit('change-page', page);
};

const props = defineProps({
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
