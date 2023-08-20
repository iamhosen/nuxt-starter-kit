export const required = (v: any): true | string =>
  v !== null && v !== undefined && v !== ''
    ? true
    : 'وارد کردن این فیلد الزامی است';

export const mobile = (v: string): true | string =>
  !!v && /09[0-9][0-9]-?[0-9]{3}-?[0-9]{4}$/.test(v)
    ? true
    : 'شماره موبایل وارد شده صحیح نیست';

export const phone = (v: string): true | string =>
  !v || /0[0-9][0-9][0-9]-?[0-9]{3}-?[0-9]{4}$/.test(v)
    ? true
    : 'شماره تماس وارد شده صحیح نیست';

export const email = (v: string): true | string =>
  !v ||
  (!!v &&
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/.test(
      v,
    ))
    ? true
    : 'ایمیل وارد شده صحیح نیست';

export const password = (v: string): true | string =>
  !v || (!!v && v.length >= 8) ? true : 'کلمه عبور باید حداقل ۸ کاراکتر باشد';

export const ssn = (v: string): true | string =>
  !v || (!!v && /^([0-9]){10}$/.test(v)) ? true : 'کد ملی وارد شده صحیح نیست';

export const postal = (v: string): true | string =>
  !v || (!!v && /^([0-9]){10}$/.test(v)) ? true : 'کد پستی وارد شده صحیح نیست';

export const number = (v: string): true | string =>
  !v || (!!v && /(?<=^| )\d+(\.\d+)?(?=$| )/.test(v))
    ? true
    : 'لطفا فقط عدد وارد کنید';
