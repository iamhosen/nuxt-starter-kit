<template>
  <aside
    id="sidebar"
    class="fixed top-0 z-20 flex-col flex-shrink-0 hidden w-64 h-full pt-16 font-normal duration-75 lg:flex transition-width"
    :class="locale == 'fa' ? 'right-0' : 'left-0'"
    aria-label="Sidebar"
  >
    <div
      class="relative flex flex-col flex-1 min-h-0 pt-0 bg-white border-l border-gray-200 dark:bg-gray-800 dark:border-gray-700"
    >
      <div class="flex flex-col flex-1 pt-5 pb-20 overflow-y-auto no-scrollbar">
        <div
          class="flex-1 px-3 space-y-1 bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700"
        >
          <slot />
        </div>
      </div>
    </div>

    <div
      class="absolute bottom-0 left-0 flex gap-2 justify-center w-full p-4 bg-white dark:bg-gray-800"
      sidebar-bottom-menu
    >
      <slot name="footer" />
    </div>
  </aside>
</template>

<script lang="ts" setup>
const { locale } = useI18n();
</script>
