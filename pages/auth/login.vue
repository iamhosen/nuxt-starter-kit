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
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white">ورود</h2>
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
            class="bg-gray-50 border focus:border-2 outline-none focus:outline-none focus:ring-2 border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            :class="
              !emailError
                ? 'focus:ring-primary-100 focus:border-primary-500'
                : 'ring-red-100 border-2 border-red-500'
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
            class="bg-gray-50 border focus:border-2 outline-none focus:outline-none focus:ring-2 border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            :class="
              !passwordError
                ? 'focus:ring-primary-100 focus:border-primary-500'
                : 'ring-red-100 border-2 border-red-500'
            "
            required
          />
          <p v-if="passwordError" class="mt-2 text-xs text-red-600">
            {{ passwordError }}
          </p>
        </div>
        <div class="flex items-start">
          <div class="flex items-center h-5">
            <input
              v-model="remember"
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
              >من را به خاطر بسپار</label
            >
          </div>
          <nuxtLink
            to="/auth/forgot-password"
            class="mr-auto text-sm text-primary-700 hover:underline dark:text-primary-500"
            >فراموشی رمز عبور
          </nuxtLink>
        </div>
        <button
          type="submit"
          class="w-full px-5 py-3 text-base font-medium text-center text-white bg-primary-600 rounded-lg hover:bg-primary-700 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          ورود به حساب
        </button>
        <div class="text-sm font-medium text-gray-500 dark:text-gray-400">
          حساب کاربری ندارید؟
          <nuxtLink
            to="/auth/register"
            class="text-primary-600 hover:underline dark:text-primary-500"
            >ثبت نام
          </nuxtLink>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import {
  password as validatePassword,
  email as validateEmail,
} from "@/helpers/validation";

const email = ref("");
const emailError = ref(null);
const password = ref("");
const passwordError = ref(null);
const remember = ref(false);

watch(email, (value) => {
  const validate = validateEmail(value);

  if (validate === true) {
    emailError.value = null;
  } else {
    emailError.value = validate;
  }
});
watch(password, (value) => {
  const validate = validatePassword(value);

  if (validate === true) {
    passwordError.value = null;
  } else {
    passwordError.value = validate;
  }
});

const handleSubmit = () => {};
</script>