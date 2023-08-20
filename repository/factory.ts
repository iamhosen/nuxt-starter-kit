import 'vue-toast-notification/dist/theme-default.css';
import { useToast } from 'vue-toast-notification';
import { useMainStore } from '@/stores/index';
import { useAuthStore } from "@/stores/auth";
import { UseFetchOptions } from 'nuxt/app';


interface HttpFactoryParams {
    method: "GET" | "PATCH" | "POST" | "PUT" | "DELETE";
    url: string;
    message?: string;
    loading?: boolean;
    body?: object;
    extras?: UseFetchOptions<object>;
    auth?: boolean;
}

class HttpFactory {
    private options: UseFetchOptions<object>;

    constructor(options: UseFetchOptions<object>) {
        this.options = options;
    }

    async call(params: HttpFactoryParams) {
        try {
            const {
                method,
                url,
                message = '',
                body = {},
                loading = false,
                extras = {},
                auth = true,
            } = params;

            //enable loading
            if (loading) {
                useMainStore().setLoading(true);
            }

            const options: UseFetchOptions<object> = {
                ...this.options,
                method,
                ...extras
            }

            if (auth) {
                options.headers.push(
                    ["Authorization", `Bearer ${useAuthStore().token || localStorage.getItem('token')}`]
                )
            }

            if (Object.keys(body).length !== 0) {
                options.body = body
            }

            //request
            const { data, error, refresh } = await useFetch(url, options)

            //error
            if (error.value) {
                throw error.value
            }

            //toast
            if (message) {
                useToast().success(message, {
                    position: 'top',
                });
            }

            //disable loading
            if (loading) {
                useMainStore().setLoading(false);
            }

            return { res: data.value, refresh };
        } catch (error: any) {
            useToast().error(error.data.message ?? error.message, {
                position: 'top',
            });

            //disable loading
            useMainStore().setLoading(false);

            throw error
        }
    }
}

export default HttpFactory;
