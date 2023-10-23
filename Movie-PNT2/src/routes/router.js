// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/LoginView.vue';

const routes = [
  {
    path: '/', // Ruta raíz
    name: 'home', // Nombre opcional
    component: LoginView, // Utiliza LoginView como la vista principal
  },
  // Otras rutas aquí...
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
