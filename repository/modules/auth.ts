import HttpFactory from '../factory';

class AuthModule extends HttpFactory {
    private RESOURCE = '/auth';

    // async csrf() {
    //     return await this.call({
    //         method: 'GET',
    //         url: `/sanctum/csrf-cookie`,
    //         loading: true,
    //         extras: {
    //             baseURL: useNuxtApp().$config.public.apiBaseUrl,
    //         }
    //     });
    // }

    // async logout() {
    //     return await this.call({
    //         method: 'POST',
    //         url: `${this.RESOURCE}/logout`,
    //         loading: true,
    //         message: "با موفقیت خارج شدید"
    //     });
    // }
}

export default AuthModule;