<template>
    <div class="login-container">
      <form class="login-form">

        <div class="Movie-View">
            <label>
                <h1>MovieApp</h1>
            </label>
            
        </div>
        
        <h2>Iniciar Sesión</h2>
        <div class="input-group">
          <label for="username">Nombre de Usuario:</label>
          <input type="text" id="username" v-model="username" />
        </div>
        <div class="input-group">
          <label for="password">Contraseña:</label>
          <input type="password" id="password" v-model="password" />
        </div>
        <button class="login-button" @mouseover="isHovered = true" @mouseleave="isHovered = false" :style="buttonStyle">Iniciar Sesión</button>
        <a class="forgot-password" href="#">¿Olvidaste tu contraseña?</a>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
        isHovered: false,
      };
    },
    computed: {
      buttonStyle() {
        return {
          background: this.isHovered ? '#42b0ff' : 'var(--ultramarine-600)',
        };
      },
    },
  };
  </script>
  
  <style scoped>
  .Movie-View{
  position: relative; /* Pos label */
  display: inline-block; /* Para que ocupe SOLO el ancho del contenido */

  
  background-color: #2729ac; /* Color de fondo */
  color: #fff; /* Color del texto */
  padding: 10px 20px; /* Relleno interno para darle tamaño */
  border: 2px solid #1f1fa4; /* Borde con color */
  border-radius: 20px; /* Borde redondeado para un aspecto ovalado */

  /* Posición de la etiqueta */
  top: -130px; /* Mueve la etiqueta hacia arriba */
  left: 50%; /* La posiciona en el centro horizontal */
  transform: translateX(-50%); /* La ajusta horizontalmente */
  position: relative;

  box-shadow: 6px 10px 6px rgba(0, 0, 0, 0.5) /*sombrita (?*/
  }

  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #f0f0f0;
  }
  
  .login-form {
    background: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  .login-form h2 {
    color: var(--ultramarine-600);
  }
  
  .input-group {
    
    margin: 10px 0;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
  }
  
  .login-button {
    background: var(--ultramarine-600);
    color: black;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s;
  }
  
  
  .login-button:hover {
    background: #42b0ff;
  }
  
  .forgot-password {
    color: var(--ultramarine-600);
    text-decoration: none;
    display: block;
    margin-top: 10px;
  }
  </style>
  
  