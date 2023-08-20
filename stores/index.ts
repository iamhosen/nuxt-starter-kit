import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
  state: () => ({
    isLoading: false,
  }),
  actions: {
    setLoading(value: boolean) {
      this.isLoading = value;
    },
  },
});
