<template>
  <div id="app">
    <!-- Encabezado de la aplicación (si lo deseas) -->
    <header>
      <NavbarHeader />
      
    </header>
    <div class="contForm">
      <LoginForm />
    </div>
    
    <!-- Formulario de inicio de sesión -->
    
  </div>
</template>

<script>
console.log('estoy en import');
import LoginForm from './components/LoginForm.vue';
import NavbarHeader from './components/NavbarHeader.vue';

export default {
  name: 'App',
  components: {
    LoginForm,
    NavbarHeader,
    
},
};
</script>

<style>
.contForm {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* Estilos globales de la aplicación */
html, body {
  height: 100%;
  margin: 0; /* Elimina el margen predeterminado */
  padding: 0; /* Elimina el espacio de relleno predeterminado */
  background-color: #17174f; /* Establece el color de fondo */
}

</style>
