// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/LoginView.vue';

const routes = [
  {
    path: '/', // 
    name: '/home', // 
    component: LoginView, // 
  },
  {
    path: '/',
    name: '/list',
    
  }
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
