// import { useAuthStore } from "@/stores/auth";

// export default defineNuxtPlugin(async (nuxtApp) => {
//     console.log('👤 Auth Plugin Registered!');

//     // Skip plugin when rendering error page
//     if (nuxtApp.payload.error) {
//         return {};
//     }

//     // try login
//     if (localStorage.getItem('token')) {
//         await nuxtApp.$api.auth.user()
//             .then(({ res }) => {
//                 useAuthStore().setUser(localStorage.getItem('token'), res.user)
//             }).catch((err: any) => {
//                 // logout
//                 localStorage.removeItem('token')
//                 navigateTo("/auth");
//             })
//     }

//     const loggedIn: any = computed(() => useAuthStore().isLoggedIn);

//     addRouteMiddleware(
//         "auth",
//         (to) => {
//             if (to.meta.auth && !loggedIn.value) {
//                 return "/auth"
//             }

//             if (to.meta.auth === undefined && loggedIn.value) {
//                 return "/"
//             }
//         },
//         { global: true }
//     );

//     const currentRoute = useRoute();

//     watch(loggedIn, async (loggedIn) => {
//         if (!loggedIn && currentRoute.meta.auth) {
//             await navigateTo("/auth");
//         }
//         // else if (loggedIn && currentRoute.meta.auth === undefined) {
//         //     await navigateTo("/");
//         // }

//     });

//     if (loggedIn.value && currentRoute.meta.auth === undefined) {
//         await navigateTo("/");
//     }
// })
