<template>
  <tr
    class="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
  >
    <th scope="row" class="px-4 py-2 text-black">{{ data.title }}</th>
    <td v-if="data.tag" class="px-4 py-2">
      <span
        class="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-gray-300"
      >
        {{ data.tag }}
      </span>
    </td>
    <td v-for="(item, index) in data.items" :key="index">{{ item }}</td>
    <td
      class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
    >
      <nuxtLink
        v-if="data.actions.edit"
        :to="data.actions.edit"
        type="button"
        class="text-gray-500 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm p-2 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <Icon name="uil:pen" size="1.5em" />
      </nuxtLink>
      <nuxtLink
        v-if="data.actions.show"
        :to="data.actions.show"
        type="button"
        class="text-gray-500 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm p-2 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <Icon name="uil:eye" size="1.5em" />
      </nuxtLink>
    </td>
  </tr>
</template>

<script lang="ts" setup>
defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>
