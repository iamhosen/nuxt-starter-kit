<template>
  <section class="bg-gray-50 dark:bg-gray-900">
    <div class="max-w-screen-2xl">
      <div
        class="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg"
      >
        <BaseTableHeader
          :title="title"
          :description="description"
          :exportable="exportable"
          :filterable="filterable"
        />
        <BaseTableBody :columns="columns" :data="pageData" />
        <BaseTableFooter
          :from="pagination.from"
          :to="pagination.to"
          :total="pagination.total"
          :length="pagination.length"
          :current-page="currentPage"
          @change-page="changePage"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const currentPage = ref(1);
const pageData = computed(() => {
  const start = (currentPage.value - 1) * props.perPage;
  const end = start + props.perPage;
  return props.data.slice(start, end);
});

const pagination = computed(() => {
  const from = (currentPage.value - 1) * props.perPage + 1;
  let to = currentPage.value * props.perPage;
  if (to > props.data.length) to = props.data.length;
  const total = props.data.length;
  const length: number = Math.ceil(total / props.perPage);

  return { from, to, total, length };
});

const emit = defineEmits(['change-page']);
function changePage(page: number) {
  if (page === currentPage.value) return;
  currentPage.value = page;
  emit('change-page', page);
}

const props = defineProps({
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
  columns: {
    type: Array as PropType<string[]>,
    required: true,
  },
  data: {
    type: Array as PropType<Object[]>,
    required: true,
  },
  perPage: {
    type: Number,
    default: 5,
  },
});
</script>
