// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', 'nuxt-icon'],

  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL,
      apiPrefix: process.env.API_PREFIX,
    },
  },
});
