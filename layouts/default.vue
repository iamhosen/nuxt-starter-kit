<template>
  <div class="min-h-screen">
    <Navbar />

    <SidebarBody>
      <SidebarSection>
        <SidebarItem title="داشبورد" icon="home-alt" url="/" />
        <SidebarItemDropdown title="کاربران" icon="user">
          <SidebarItemSub title="مشاهده همه" url="/" />
        </SidebarItemDropdown>
        <SidebarItem title="اطلاعات" icon="database" url="/" />
      </SidebarSection>

      <template #footer>
        <SidebarItemIcon icon="cog" url="/" />
        <SidebarItemIcon icon="globe" url="/" />
      </template>
    </SidebarBody>

    <BaseLoading :loading="loading" />
    <div class="lg:mr-64 mt-16 p-4">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMainStore } from '@/stores/index';
const loading = computed<boolean>(() => useMainStore().isLoading);
</script>
