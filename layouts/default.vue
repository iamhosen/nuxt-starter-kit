<template>
  <div class="min-h-screen">
    <Navbar />

    <SidebarBody>
      <SidebarSection>
        <SidebarItem :title="$t('dashboard')" icon="home-alt" url="/" />
        <SidebarItemDropdown :title="$t('users')" icon="user">
          <SidebarItemSub :title="$t('users_list')" url="/" />
        </SidebarItemDropdown>
        <SidebarItem :title="$t('data')" icon="database" url="/" />
      </SidebarSection>

      <template #footer>
        <SidebarItemIcon icon="cog" url="/" />
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
      </template>
    </SidebarBody>

    <BaseLoading :loading="loading" />
    <div class="mt-16 p-4" :class="locale == 'fa' ? 'lg:mr-64' : 'lg:ml-64'">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { MenuItem } from '@headlessui/vue';

import { useMainStore } from '@/stores/index';
const loading = computed<boolean>(() => useMainStore().isLoading);

const { locale, setLocale } = useI18n();
</script>
