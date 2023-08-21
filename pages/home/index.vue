<template>
  <div>
    <SidebarBody>
      <SidebarSection>
        <SidebarItem title="داشبورد" icon="home-alt" url="home" />
        <SidebarItemDropdown title="کاربران" icon="user">
          <SidebarItemSub title="مشاهده همه" url="home" />
        </SidebarItemDropdown>
        <SidebarItem title="اطلاعات" icon="database" url="auth/login" />
      </SidebarSection>

      <!-- footer -->
      <template #footer>
        <SidebarItemIcon icon="cog" url="home" />
        <SidebarItemIcon icon="globe" url="home" />
      </template>
    </SidebarBody>
  </div>
</template>
