<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <RouterLink to="/" class="navbar-brand">Home</RouterLink>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>

      <li class="nav-item">
        <RouterLink to="/login" class="nav-link disabled">Login</RouterLink>
      </li>

      <li class="nav-item">
        <RouterLink to="/register" class="nav-link disabled">Registrarse</RouterLink>
      </li>
    </ul>
    
    <button v-if="hayUsuarioAutenticado" @click="desAutenticar">Logout</button>
    <button v-if="hayAdmin" @click="desAutenticar">Logouttt</button>
    
    <!--Reviendo desde abajo-->
    
    
    <!--Reviendo desde arriba-->

  </div>
</nav>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import {storeToRefs} from 'pinia';
import { useAuthStore } from '../Stores/authStore';
import Search from './Search.vue';

const authStore = useAuthStore()
const {logout} = authStore

const desAutenticar = () => {
    logout();
}

const {hayUsuarioAutenticado} = storeToRefs(authStore)
const {hayAdmin} = storeToRefs(authStore)


</script>

<style scoped>

</style>