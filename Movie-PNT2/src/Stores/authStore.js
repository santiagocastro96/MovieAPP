import {defineStore} from 'pinia'
import {ref, computed} from 'vue'
import { users } from '../data/users'

export const useAuthStore = defineStore("authStore",()=>{
    const _username = ref(0)
    const _password = ref(0)
    

    //action
    function login(username, password){


        //validaciones
        console.log("llego usuario: " + username + " y contraseña: " + password);
        const user = users.find(user => user.username === username && user.password === password);
        if(user){
        _username.value = username
        _password.value = password
        }
        console.log('autenticado este usuario :' + _username.value);
    }

    //TODO: agregar el botón de logout donde corresponda en la interfaz (y que aparesca con un v-if en caso de que se esté logueado)
    function logout (){
        //validaciones
        console.log("entro a desloguear")
        _username.value = ""
        _password.value = ""
        
    }
    

    //getter

    
    const hayUsuarioAutenticado = computed(()=> {
      console.log("verificando usuario final");
      //TODO: esta validando esto bien? no parece
      //TODO: hacer que la validación corrabore que tipo de usuario sos. Se tiene que diferenciar si sos usuario Admin o usuario "comun"
      return _username.value !== "" && _password.value !== "";
    })


    //que exponemos
    return {login, logout, hayUsuarioAutenticado}
})


/*import { createPinia, defineStore } from 'pinia';
import { users } from '../data/users';
import {ref,computed} from 'vue';


export const pinia = createPinia();

// Módulo de autenticación
export const useAuthStore = defineStore('authStore', {
    state: () => ({
      user: null,
      role: null,
    }),
    getters: {
      isAdmin: (state) => state.user && state.user.username === 'admin',
    },
    actions: {
        login(username, password) {
            const user = users.find((u) => u.username === username && u.password === password);
            if (user) {
              this.user = { username: user.username };
              this.role = user.role;
            }
      },
      logout() {
        this.user = null;
        this.role = null;
      },
    },
  })
  */