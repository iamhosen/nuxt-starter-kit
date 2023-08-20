<template>
  <div class="min-h-screen">
    <BaseLoading :loading="loading" />
    <slot />
  </div>
</template>

<script setup>
import { useMainStore } from '@/stores/index';
const loading = computed(() => useMainStore().isLoading);
</script>
