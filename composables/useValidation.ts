// src/composables/useValidation.ts
import { email, password } from '@/helpers/validation';

type ErrorMessage = string | null;

interface ValidationFunctions {
  validateEmail: (value: string) => ErrorMessage;
  validatePassword: (value: string) => ErrorMessage;
  validatePasswordWithConfirmation: (
    value: string,
    confirmationValue: string,
  ) => ErrorMessage;
}

export default function useValidation(): ValidationFunctions {
  const validateEmail = (value: string): ErrorMessage => {
    const validationResult = email(value);
    return validationResult === true ? null : validationResult;
  };

  const validatePassword = (value: string): ErrorMessage => {
    const validationResult = password(value);
    return validationResult === true ? null : validationResult;
  };

  const validatePasswordWithConfirmation = (
    value: string,
    confirmationValue: string,
  ): ErrorMessage => {
    const validationResult = password(value);
    if (validationResult !== true) {
      return validationResult;
    }
    if (value !== confirmationValue) {
      return 'کلمه عبور و تکرار آن یکسان نیستند';
    }
    return null;
  };

  return {
    validateEmail,
    validatePassword,
    validatePasswordWithConfirmation,
  };
}
