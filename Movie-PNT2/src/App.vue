<template>
  <div id="app">
    <!-- Encabezado de la aplicación (si lo deseas) -->
    <header>
      <h1></h1>
    </header>

    <!-- Formulario de inicio de sesión -->
    <login-form />
  </div>
</template>

<script>
import LoginForm from './components/LoginForm.vue';

export default {
  name: 'App',
  components: {
    LoginForm,
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
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #17174f;
}
</style>
