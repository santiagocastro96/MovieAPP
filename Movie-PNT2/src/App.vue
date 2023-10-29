<template>
  <div id="app">
    <!-- Encabezado de la aplicación (si lo deseas) -->
    <header>
      <NavbarHeader />
    </header>

    <!-- Formulario de inicio de sesión -->
    <login-form />
  </div>
</template>

<script>
import LoginForm from './components/LoginForm.vue';
import NavbarHeader from './components/NavbarHeader.vue';

export default {
  name: 'App',
  components: {
    LoginForm,
    NavbarHeader,
    NavbarHeader
},
};
</script>

<style>
/* Estilos globales de la aplicación */
html, body {
  height: 100%;
  margin: 0; /* Elimina el margen predeterminado */
  padding: 0; /* Elimina el espacio de relleno predeterminado */
  background-color: #17174f; /* Establece el color de fondo */
}

</style>
