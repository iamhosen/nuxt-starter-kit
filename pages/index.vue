<template>
  <div>
    <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4 mb-4">
      <CardOverview title="همه کاربران" :value="2443" url="/" icon="home" />
      <CardOverview title="همه کاربران" :value="2443" url="/" icon="home" />
      <CardOverview title="همه کاربران" :value="2443" url="/" icon="home" />
      <CardOverview title="همه کاربران" :value="2443" url="/" icon="home" />
    </div>

    <BaseTable
      title="داده های اخیر"
      description="آخرین سند های ثبت شده"
      :columns="tableColumns"
      :data="tableDate"
    />
    <!-- <section class="py-8 flex flex-col justify-center gap-6">
      <h3 class="mx-auto">استارتر کیت</h3>
      <h1 class="text-4xl font-bold text-center">
        Welcome to Nuxt Dashboard Starter Kit
      </h1>
      <p class="text-center">
        This is a starter kit for Nuxt.js with Tailwind CSS and TypeScript. by
        <a href="https://github.com/iamhosen" class="text-blue-500"
          >@iamhosen</a
        >
      </p>
    </section> -->
  </div>
</template>

<script lang="ts" setup>
const tableColumns: Ref<string[]> = ref([
  'عنوان',
  'نوع سند',
  'استان',
  'شهر',
  'تالاب',
  'تاریخ',
  'عملیات',
]);
const tableDate: Ref<Object[]> = ref([
  {
    title: 'گزارش مشاوره طراحی محیط زیستی',
    tag: 'doc',
    items: ['استان خوزستان', 'شهرستان اهواز', 'تالاب حمیل', '1399/11/15'],
    actions: {
      edit: '/ویرایش',
      show: '/نمایش',
    },
  },
  {
    title: 'آمار تغییرات اکولوژیکی',
    tag: 'xlsx',
    items: ['استان مازندران', 'شهرستان ساری', 'تالاب گزنک', '1400/02/10'],
    actions: {
      edit: '/ویرایش',
      show: '/نمایش',
    },
  },
  {
    title: 'بررسی تنوع گونه‌های پرندگان',
    tag: 'pdf',
    items: ['استان فارس', 'شهرستان شیراز', 'تالاب بخارایی', '1398/07/22'],
    actions: {
      edit: '/ویرایش',
      show: '/نمایش',
    },
  },
  {
    title: 'گزارش تحلیل آب و خاک',
    tag: 'doc',
    items: ['استان گلستان', 'شهرستان گرگان', 'تالاب گلستان', '1401/05/03'],
    actions: {
      edit: '/ویرایش',
      show: '/نمایش',
    },
  },
  {
    title: 'پژوهش علمی مدل‌سازی اکوسیستم',
    tag: 'pdf',
    items: ['استان مرکزی', 'شهرستان اراک', 'تالاب سد کوریجان', '1399/09/18'],
    actions: {
      edit: '/ویرایش',
      show: '/نمایش',
    },
  },
  {
    title: 'آمار تغییرات پوشش گیاهی',
    tag: 'xlsx',
    items: ['استان گیلان', 'شهرستان لاهیجان', 'تالاب آستارا', '1402/01/30'],
    actions: {
      edit: '/ویرایش',
      show: '/نمایش',
    },
  },
  {
    title: 'بررسی تأثیرات تغییرات اقلیمی',
    tag: 'pdf',
    items: ['استان خراسان رضوی', 'شهرستان مشهد', 'تالاب حاشیج', '1401/11/09'],
    actions: {
      edit: '/ویرایش',
      show: '/نمایش',
    },
  },
  {
    title: 'ارزیابی کیفیت آب و جریان‌های زیستی',
    tag: 'doc',
    items: ['استان تهران', 'شهرستان ورامین', 'تالاب حوضی', '1402/06/25'],
    actions: {
      edit: '/ویرایش',
      show: '/نمایش',
    },
  },
  {
    title: 'گزارش نظارت بر پروژه بازسازی',
    tag: 'pdf',
    items: ['استان هرمزگان', 'شهرستان بندرعباس', 'تالاب همافر', '1398/03/12'],
    actions: {
      edit: '/ویرایش',
      show: '/نمایش',
    },
  },
  {
    title: 'مطالعه تأثیرات توریسم بر محیط زیست',
    tag: 'doc',
    items: ['استان گلستان', 'شهرستان گنبدکاووس', 'تالاب آلاغول', '1400/10/08'],
    actions: {
      edit: '/ویرایش',
      show: '/نمایش',
    },
  },
  {
    title: 'بررسی تأثیرات تغییرات اقلیمی',
    tag: 'pdf',
    items: ['استان خراسان رضوی', 'شهرستان مشهد', 'تالاب حاشیج', '1401/11/09'],
    actions: {
      edit: '/ویرایش',
      show: '/نمایش',
    },
  },
  {
    title: 'ارزیابی کیفیت آب و جریان‌های زیستی',
    tag: 'doc',
    items: ['استان تهران', 'شهرستان ورامین', 'تالاب حوضی', '1402/06/25'],
    actions: {
      edit: '/ویرایش',
      show: '/نمایش',
    },
  },
  {
    title: 'گزارش نظارت بر پروژه بازسازی',
    tag: 'pdf',
    items: ['استان هرمزگان', 'شهرستان بندرعباس', 'تالاب همافر', '1398/03/12'],
    actions: {
      edit: '/ویرایش',
      show: '/نمایش',
    },
  },
  {
    title: 'مطالعه تأثیرات توریسم بر محیط زیست',
    tag: 'doc',
    items: ['استان گلستان', 'شهرستان گنبدکاووس', 'تالاب آلاغول', '1400/10/08'],
    actions: {
      edit: '/ویرایش',
      show: '/نمایش',
    },
  },
]);
</script>
