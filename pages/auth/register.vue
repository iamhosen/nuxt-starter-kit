<template>
  <div
    class="flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 dark:bg-gray-900"
  >
    <span
      class="flex items-center justify-center mb-8 text-2xl font-bold lg:mb-10 dark:text-white"
    >
      <img src="/images/logo.svg" class="ml-4 h-11" alt="FlowBite Logo" />
      <span>استارتر کیت</span>
    </span>
    <div
      class="w-full max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow dark:bg-gray-800"
    >
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white">ثبت نام</h2>
      <form class="mt-8 space-y-6" @submit.prevent="handleSubmit">
        <div>
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >ایمیل</label
          >
          <input
            v-model="email"
            type="email"
            name="email"
            id="email"
            class="bg-gray-50 border focus:border-2 outline-none focus:outline-none focus:ring-2 border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-opacity-30"
            :class="
              !emailError
                ? 'focus:ring-primary-100 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500'
                : 'ring-red-100 border-2 border-red-500 dark:focus:ring-red-600 dark:focus:border-red-500'
            "
            placeholder="name@company.com"
            required
          />
          <p v-if="emailError" class="mt-2 text-xs text-red-600">
            {{ emailError }}
          </p>
        </div>
        <div>
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >رمز عبور</label
          >
          <input
            v-model="password"
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            class="bg-gray-50 border focus:border-2 outline-none focus:outline-none focus:ring-2 border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-opacity-30"
            :class="
              !passwordError
                ? 'focus:ring-primary-100 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500'
                : 'ring-red-100 border-2 border-red-500 dark:focus:ring-red-600 dark:focus:border-red-500'
            "
            required
          />
          <p v-if="passwordError" class="mt-2 text-xs text-red-600">
            {{ passwordError }}
          </p>
        </div>
        <div>
          <label
            for="password_confirmation"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >تکرار رمز عبور</label
          >
          <input
            v-model="password_confirmation"
            type="password"
            name="password_confirmation"
            id="password_confirmation"
            placeholder="••••••••"
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            required
          />
        </div>
        <div class="flex items-start">
          <div class="flex items-center h-5">
            <input
              v-model="terms"
              id="remember"
              aria-describedby="remember"
              name="remember"
              type="checkbox"
              class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
              required
            />
          </div>
          <div class="mr-3 text-sm">
            <label
              for="remember"
              class="font-medium text-gray-900 dark:text-white"
              >پذیرفتن شرایط و قوانین</label
            >
          </div>
        </div>
        <button
          type="submit"
          :disabled="emailError || passwordError || !terms"
          class="disabled:opacity-50 disabled:cursor-not-allowed w-full px-5 py-3 text-base font-medium text-center text-white bg-primary-600 rounded-lg hover:bg-primary-700 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          ساخت حساب جدید
        </button>
        <div class="text-sm font-medium text-gray-500 dark:text-gray-400">
          قبلا ثبت نام کرده اید؟
          <nuxtLink
            to="/auth/login"
            class="text-primary-600 hover:underline dark:text-primary-500"
            >وارد شوید
          </nuxtLink>
        </div>
      </form>
    </div>
  </div>
</template>
  
<script setup>
const email = ref("");
const emailError = ref();
const password = ref("");
const passwordError = ref();
const password_confirmation = ref("");
const terms = ref(false);

const { validateEmail, validatePasswordWithConfirmation } = useValidation();
watch(email, (value) => {
  emailError.value = validateEmail(value);
});

watch([password, password_confirmation], (values) => {
  passwordError.value = validatePasswordWithConfirmation(...values);
});

const handleSubmit = () => {};
</script>