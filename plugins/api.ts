import AuthModule from '@/repository/modules/auth';
import { UseFetchOptions } from 'nuxt/app';
// import { useAuthStore } from "@/stores/auth";


export default defineNuxtPlugin((nuxtApp) => {

  const fetchOptions: UseFetchOptions<object> = {
    baseURL: nuxtApp.$config.public.apiBaseUrl + nuxtApp.$config.public.apiPrefix,
    headers: [
      ['Content-Type', 'application/json'],
      ["Accept", "application/json"],
      // ["Authorization", `Bearer ${useAuthStore().token || localStorage.getItem('token')}`],
    ],
  }

  const modules = {
    auth: new AuthModule(fetchOptions),
    // ...
  };

  return {
    provide: {
      api: modules,
    },
  };
});
