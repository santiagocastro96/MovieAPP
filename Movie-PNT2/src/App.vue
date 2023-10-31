<template>
  <NavbarHeader />
  <router-view />
</template>

<script setup>

import NavbarHeader from './components/NavbarHeader.vue';


</script>

<style>


/* Estilos globales de la aplicación */
html, body {
  height: 100%;
  margin: 0; /* Elimina el margen predeterminado */
  padding: 0; /* Elimina el espacio de relleno predeterminado */
  background-color: #000; /* Establece el color de fondo */
}

</style>
