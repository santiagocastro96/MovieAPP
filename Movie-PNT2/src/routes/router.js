// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import LoginForm from "../components/LoginForm.vue"
import Home from "../views/Home.vue"
import MovieDetail from "../components/MovieDetail.vue";
import RegisterForm from "../components/RegisterForm.vue";
import Categories from "../components/Categories.vue"
import App from "../App.vue"

const routes = [
  
  // Otras rutas aquí...
  { path : "/", component : Home},
  { path : "/login", component : LoginForm},
  { path : "/register", component : RegisterForm},
  { path : "/movie/:id", component : MovieDetail},
  {path : "/categories", component : Categories},
 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    // Agrega una animación de desplazamiento al inicio de la nueva ruta
    return { top: 0 };
  },
});

export default router;
