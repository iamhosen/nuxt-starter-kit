import { defineStore } from 'pinia'

interface AuthState {
    token: string | null
    user: object | null
    isLoggedIn: boolean
}

export const useAuthStore = defineStore('auth', {
    state: (): AuthState => ({
        token: null,
        user: null,
        isLoggedIn: false,
    }),
    actions: {
        setUser(token: string, user: any) {
            this.token = token
            this.user = user
            this.isLoggedIn = true

            localStorage.setItem('token', token)
        },
        removeUser() {
            this.token = null
            this.user = null
            this.isLoggedIn = false

            localStorage.removeItem('token')
        },
        updateUser(user:any){
            this.user = user
        }
    },
})