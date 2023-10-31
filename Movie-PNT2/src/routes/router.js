// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import LoginForm from "../components/LoginForm.vue"
//import Home from "../views/Home.vue"
//import App from "../App.vue"
import MovieDetails from '../components/MovieDetails.vue';


const routes = [
  {
    path: '/', // 
    name: 'home', // 
    component: LoginForm, // 
  },
  {
    path: '/movie-details',
    name: 'movie-details',
    component: MovieDetails,
  }
  
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
