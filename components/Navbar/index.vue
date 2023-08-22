<template>
  <header>
    <nav
      class="bg-white fixed top-0 w-full z-30 border-b border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800"
    >
      <div class="flex flex-wrap justify-between items-center">
        <div class="flex justify-start items-center">
          <img src="/images/logo.svg" class="ml-3 h-8" />
          <span
            class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
          >
            {{ $t('logo') }}
          </span>
        </div>

        <div class="flex gap-2 items-center lg:order-2">
          <!-- search -->
          <form action="#" method="GET" class="hidden lg:block lg:pl-2">
            <div class="relative mt-1 lg:w-96">
              <div
                class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
              >
                <Icon
                  name="uil:search"
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                />
              </div>
              <input
                id="topbar-search"
                type="text"
                name="email"
                class="bg-gray-50 border focus:border outline-none focus:outline-none focus:ring-2 border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-opacity-30 focus:ring-primary-100 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500"
                :placeholder="$t('search')"
              />
            </div>
          </form>
          <nuxtLink
            to="/"
            type="button"
            class="hidden sm:inline-flex items-center justify-center text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-xs px-3 py-2.5 ml-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
          >
            <Icon name="uil:plus" size="1.5em" />
            {{ $t('add') }}
          </nuxtLink>
          <!-- Search -->
          <button
            id="toggleSidebarMobileSearch"
            type="button"
            class="p-2 text-gray-500 rounded-lg lg:hidden hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <span class="sr-only">Search</span>
            <Icon name="uil:search" size="1.5em" />
          </button>
          <!-- Notifications -->
          <Menu as="div" class="relative inline-block text-left">
            <div>
              <MenuButton
                class="p-2 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              >
                <span class="sr-only">Notifications</span>
                <Icon name="uil:bell" size="1.5em" />
              </MenuButton>
            </div>

            <transition
              enter-active-class="transition duration-100 ease-out"
              enter-from-class="transform scale-95 opacity-0"
              enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-75 ease-in"
              leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0"
            >
              <MenuItems
                class="absolute left-0 mt-2 w-72 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <a
                  href="#"
                  class="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <div class="w-full pl-3">
                    <div
                      class="text-right text-gray-900 font-medium text-sm mb-1.5 dark:text-gray-400"
                    >
                      یک نوتیفیکیشن جدید
                    </div>
                    <div
                      class="text-right text-gray-500 text-xs leading-6 mb-2.5 dark:text-gray-400"
                    >
                      نوتیفیکشن جدید دریافت شده است میتوانید از این قسمت آن را
                      مشاهده کنید
                    </div>
                    <div
                      class="text-right text-xs text-blue-600 dark:text-blue-500"
                    >
                      ۲ دقیقه پیش
                    </div>
                  </div>
                </a>
                <a
                  href="#"
                  class="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <div class="w-full pl-3">
                    <div
                      class="text-right text-gray-900 font-medium text-sm mb-1.5 dark:text-gray-400"
                    >
                      یک نوتیفیکیشن جدید
                    </div>
                    <div
                      class="text-right text-gray-500 text-xs leading-6 mb-2.5 dark:text-gray-400"
                    >
                      نوتیفیکشن جدید دریافت شده است میتوانید از این قسمت آن را
                      مشاهده کنید
                    </div>
                    <div
                      class="text-right text-xs text-blue-600 dark:text-blue-500"
                    >
                      ۲ دقیقه پیش
                    </div>
                  </div>
                </a>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </nav>
  </header>
</template>

<script lang="ts" setup>
import { Menu, MenuButton, MenuItems } from '@headlessui/vue';
</script>
