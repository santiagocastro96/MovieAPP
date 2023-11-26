<template>
  <div>
    <NavbarHeader />
    <Search />
    <div id="router-container">
      <router-view />
    </div>
  </div>
  
</template>

<script setup>

import NavbarHeader from './components/NavbarHeader.vue';
import Search from './components/Search.vue';

</script>

<style>


/* Estilos globales de la aplicación */
html, body {
  height: 100%;
  margin: 0; /* Elimina el margen predeterminado */
  padding: 0; /* Elimina el espacio de relleno predeterminado */
  background-color: #000; /* Establece el color de fondo */
}
#app {
  height: 100%;
  overflow: auto; /* Asegura que la barra de desplazamiento esté activa si es necesario */
}
#router-container {
  padding-top: 10px; /* Ajusta según el tamaño de tu barra de navegación */
}
.Search {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999; /* Asegura que Search esté por encima de otros elementos */
}


</style>
