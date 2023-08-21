<template>
  <div class="min-h-screen">
    <BaseLoading :loading="loading" />
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useMainStore } from '@/stores/index';
const loading = computed<boolean>(() => useMainStore().isLoading);
</script>
