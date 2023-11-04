import {defineStore} from 'pinia'
import {ref, computed} from 'vue'
import { users } from '../data/users'

export const useAuthStore = defineStore("authStore",()=>{
    const _username = ref(0)
    const _password = ref(0)
    

    //action
    function login(username, password){
        //validaciones
        console.log(username);
        console.log("llego " + password);
        const user = users.find(user => user.username === username && user.password === password);

        console.log('tratando de acceder a :' + _username);
        if(user){
        _username.value = username
        _password.value = password
        //_userId.value = userId
        }
        console.log('autenticado este usuario :' + _username);
    }

    function logout (){
        //validaciones
        console.log("entro a desloguear")
        _username.value = ""
        _password.value = ""
        
    }
    

    //getter
    const usuario = {
      username : computed(()=> _username.value),
      password : computed(()=> _password.value)
    }
    
    const hayUsuarioAutenticado = computed(()=> {
      console.log("verificando usuario final");
      
      return usuario.username.value !== "" && usuario.password.value !== "";
    })


    //que exponemos
    return {login, logout, hayUsuarioAutenticado, usuario}
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