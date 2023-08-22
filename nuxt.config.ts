// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', 'nuxt-icon', '@nuxtjs/i18n'],

  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL,
      apiPrefix: process.env.API_PREFIX,
    },
  },

  i18n: {
    // defaultLocale: 'fa',
    defaultLocale: 'fa',
    langDir: 'lang/',
    locales: [
      { code: 'en', iso: 'en-US', file: 'en-US.json' },
      { code: 'fa', iso: 'fa-IR', file: 'fa-IR.json' },
    ],
    strategy: 'prefix_except_default',
  },
});
