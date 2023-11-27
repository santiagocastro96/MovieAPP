<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <RouterLink to="/" class="navbar-brand">Home</RouterLink>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      
      <li class="nav-item" v-if="!hayUsuarioAutenticado">
          <RouterLink :to="hayUsuarioAutenticado ? '#' : '/login'" class="nav-link" :class="{ 'disabled': hayUsuarioAutenticado }">Login</RouterLink>
        </li>
        <li class="nav-item" v-if="!hayUsuarioAutenticado">
          <RouterLink :to="hayUsuarioAutenticado ? '#' : '/register'" class="nav-link" :class="{ 'disabled': hayUsuarioAutenticado }">Registrarse</RouterLink>
        </li>
      <li class="nav-item">
        <RouterLink to="/categories" class="nav-link disabled">Categorias</RouterLink>
      </li>
      <li class="nav-item">
        <Search />
      </li>
    </ul>
    <button class="btn btn-warning mx-2" v-if="hayAdmin" @click="goStatistics">Estadisticas</button>
    <button class="btn btn-info" v-if="hayUsuarioAutenticado" @click="desAutenticar">Logout</button>
    
    
    <!--Reviendo desde abajo-->
    
    
    <!--Reviendo desde arriba-->

  </div>
</nav>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import {storeToRefs} from 'pinia';
import { useAuthStore } from '../Stores/authStore';
import { useRoute } from 'vue-router';
import Search from '../components/Search.vue';


import router from "../routes/router"

const route = useRoute()

const authStore = useAuthStore()
const {logout} = authStore

const desAutenticar = () => {
    logout();
}

const {hayUsuarioAutenticado} = storeToRefs(authStore)
const {hayAdmin} = storeToRefs(authStore)

const goStatistics = () =>{
  router.push("/stats")
}

</script>

<style scoped>
.Search {
  position: fixed;
  top: 3%; /* Coloca el componente en el 50% superior del contenedor */
  left: 50%;
  transform: translate(-50%, -50%); /* Centra el componente horizontal y verticalmente */
  z-index: 999; /* Asegura que Search esté por encima de otros elementos */
}
</style>