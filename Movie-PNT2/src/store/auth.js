import { createPinia } from 'pinia';
import { users } from '../data/users';


export const pinia = createPinia();

// Módulo de autenticación
export const useAuthStore = pinia.defineStore('auth', {
    state: () => ({
      user: null,
      role: null,
    }),
    getters: {
      isAdmin: (state) => state.user && state.user.username === 'admin',
    },
    actions: {
        login(username, password) {
            const user = users.find((u) => u.username === username && u.password === password);
            if (user) {
              this.user = { username: user.username };
              this.role = user.role;
            }
      },
      logout() {
        this.user = null;
        this.role = null;
      },
    },
  })