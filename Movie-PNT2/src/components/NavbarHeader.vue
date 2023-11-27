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
    
    <button v-if="hayUsuarioAutenticado" @click="desAutenticar">Logout</button>
    <button v-if="hayAdmin" @click="goStatistics">Estadisticas</button>
    
    <!--Reviendo desde abajo-->
    
    
    <!--Reviendo desde arriba-->

  </div>
</nav>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import {storeToRefs} from 'pinia';
import { useAuthStore } from '../Stores/authStore';
import Search from '../components/Search.vue';

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
  width: 300px;
  position: absolute;
  top: 3%;
  right: 50%; 
  transform: translateX(50%);
}


</style>