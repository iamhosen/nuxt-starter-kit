<template>
  <div class="min-h-screen">
    <BaseLoading :loading="loading" />
    <div
      class="flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 dark:bg-gray-900"
    >
      <span
        class="flex items-center justify-center mb-8 text-2xl font-bold lg:mb-10 dark:text-white"
      >
        <img src="/images/logo.svg" class="ml-4 h-11" />
        <span>{{ $t('logo') }}</span>
      </span>
      <div
        class="w-full max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow dark:bg-gray-800"
      >
        <slot />
      </div>
      <div class="mt-4">
        <BaseMenu>
          <MenuItem>
            <button
              :class="{
                'opacity-50 cursor-not-allowed': locale === 'fa',
              }"
              @click="setLocale('fa')"
            >
              فارسی
            </button>
          </MenuItem>
          <MenuItem>
            <button
              :class="{
                'opacity-50 cursor-not-allowed': locale === 'en',
              }"
              @click="setLocale('en')"
            >
              English
            </button>
          </MenuItem>
        </BaseMenu>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMainStore } from '@/stores/index';
const loading = computed<boolean>(() => useMainStore().isLoading);

const { locale, setLocale } = useI18n();
</script>
