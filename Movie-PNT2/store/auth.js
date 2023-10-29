import { createPinia } from 'pinia';

export const pinia = createPinia();

// Módulo de autenticación
export const useAuthStore = pinia.defineStore('auth', {
    state: () => ({
      user: null,
    }),
    getters: {
      isAdmin: (state) => state.user && state.user.username === 'admin',
    },
    actions: {
      login(username, password) {
        if (username === 'admin' && password === 'admin') {
          this.user = { username: 'admin' }
        } else if (username === 'user1' && password === '123456') {
          this.user = { username: 'user1' }
        }
      },
      logout() {
        this.user = null
      },
    },
  })