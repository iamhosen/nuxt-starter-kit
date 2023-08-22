<template>
  <div class="overflow-x-auto no-scrollbar">
    <table class="w-full text-sm text-right text-gray-500 dark:text-gray-400">
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th
            v-for="(column, index) in columns"
            :key="index"
            scope="col"
            class="px-4 py-3"
          >
            {{ column }}
          </th>
        </tr>
      </thead>
      <tbody>
        <BaseTableRow v-for="(d, index) in data" :key="index" :data="d" />
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  columns: {
    type: Array as PropType<string[]>,
    required: true,
  },
  data: {
    type: Array as PropType<Object[]>,
    required: true,
  },
});
</script>
