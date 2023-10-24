// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import LoginForm from "../components/LoginForm.vue"
import Home from "../views/Home.vue"
import App from "../App.vue"

const routes = [
  
  // Otras rutas aquí...
  { path : "/", component : Home},
  { path : "/login", component : LoginForm}
  
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
