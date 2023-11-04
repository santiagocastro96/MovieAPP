<template>
  <body>
    <div class="wrapper">
        <form action="">
            <h1>Login</h1>
            <div class="pError">
                    <p>Ingresa un nombre completo</p>
                
            <div class="input-box">
                
                
                <input type="text" name="username" id="userInput" placeholder="username" required v-model="_username"  @input="validarUsuario" :style="{borderColor: bordeColorUser}">
                
                <i class="fa fa-user"></i>
            </div>
        </div>
        <div class="pError">
  <p v-show="error">{{ error }}</p>
</div>

        <div class="pError">
                    <p>Ingresa una clave valida</p>

            <div class="input-box">
                <input type="password" name="password" id="passInput" placeholder="password" required v-model="_password"  @input="validarPassword" :style="{borderColor: bordeColorPassword}">
                <i class="fa fa-lock"></i>
            </div>
            </div>

            <div class="remember-forget">
                <label for=""><input type="checkbox" name="" id="">Recordar</label>
                <a href="#">Lorem ipsun</a>
            </div>

            <button type="submit" class="btn" id="btn" @click="loginUser">Loginnn</button>

            <div class="register-link">
                <p>¿No tienes una cuenta? <a href="#">Registrate!</a></p>
            </div>

        </form>
        <button @click="verValores">Ver valores</button>
        <button v-if="!hayUsuarioAutenticado" @click="desAutenticar">Logout</button>
    </div>
    </body>
  </template>
  
  <script setup>

//codigo agregado por javi
import { useAuthStore } from '../Stores/authStore';
import {storeToRefs} from 'pinia';
import { ref } from 'vue';

const authStore = useAuthStore()
const {login} = authStore

const _username = ref('');
const _password = ref('');

const loginUser = ()=>{
console.log("entro a autenticar")
const username = _username;
const password = _password;
console.log(username)
login(username, password)

}




const verValores = ()=>{
  console.log(authStore.usuario)
}

const {hayUsuarioAutenticado} = storeToRefs(authStore)




const validarUsuario = () => {

};

const validarPassword = () => {

}




/* codigo anterior:
import { ref, watch } from 'vue';

const usuario = ref('');
const password = ref('');
const bordeColorUser = ref('');
const bordeColorPassword = ref('')


const validarUsuario = () => {
  if (usuario.value.length < 5) {
    bordeColorUser.value = 'rgb(128, 37, 31, .6)';
  } else {
    bordeColorUser.value = 'rgb(103, 209, 21, .2)';
  }
};

const validarPassword = () => {
    if(password.value.length < 5){
        bordeColorPassword.value = 'rgb(128, 37, 31, .6)';
    } else {
        bordeColorPassword.value = 'rgb(103, 209, 21, .2)';
  }
}

watch(usuario, validarUsuario);
*/



  
  </script>
  
  <style scoped>

body{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: url("../../public/img/FondoLogin.jpg") no-repeat;
    background-size: cover;
    background-position: center;
}


.pError p{
    color: crimson;
    text-align: center;
    position: relative;
    top: 25px;
}

.wrapper{
    width: 420px;
    background: transparent;
    border: 2px solid rgba(255, 255, 255, .2);
    backdrop-filter: blur(20px);
    color: #fff;
    border-radius: 10px;
    padding: 30px 40px;
}

.wrapper h1{
    font-size: 36px;
    text-align: center;
}

.wrapper .input-box{
    position: relative;
    width: 100%;
    height: 50px;
    margin: 30px 0;
}

.input-box input{
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    outline: none;
    border: 2px solid rgba(255, 255, 255, .2);
    border-radius: 40px;
    font-size: 16px;
    color: #fff;
    padding: 20px 45px 20px 20px;
    transition: border-color 0.4s ease;
}

.input-box input::placeholder{
    color: #fff;
}

.input-box i{
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 20px;
}

.wrapper .remember-forget{
    display: flex;
    justify-content: space-between;
    font-size: 14.5px;
    margin: -15px 0 15px;
}

.remember-forget label input{
    accent-color: #fff;
    margin-right: 3px;
}

.remember-forget a{
    color: #fff;
    text-decoration: none;
}

.remember-forget a:hover{
    text-decoration: underline;
}

.wrapper .btn{
    width: 100%;
    height: 45px;
    background: #fff;
    border: none;
    outline: none;
    border-radius: 40px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .1);
    cursor: pointer;
    font-size: 16px;
    color: #333;
    font-weight: 600;
}

.wrapper .register-link{
    font-size: 14.5px;
    text-align: center;
    margin-top: 20px 0 15px;
}

.register-link p a{
    color: #fff;
    text-decoration: none;
    font-weight: 600;
}

.register-link p a:hover{
    text-decoration: underline;
}
  </style>
  
  