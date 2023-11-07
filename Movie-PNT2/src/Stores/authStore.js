import {defineStore} from 'pinia'
import {ref, computed} from 'vue'
import { users } from '../data/users'

export const useAuthStore = defineStore("authStore",()=>{
    const _username = ref(0)
    const _password = ref(0)
    

    //action
    function login(username, password){
        

      //TODO: Arreglar esta parte para ver: 1) que lleguen los datos del form correctamente. 2) Que estos
      //      se comparen con los de la base de datos. 3)que si el dato esta correcto se guarden para ser validados con el "hayUsuarioAutenticado"

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


    //TODO: agregar el botón de logout donde corresponda en la interfaz (y que aparesca con un v-if en caso de que se esté logueado)
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
      //TODO: hacer que la validación corrabore que tipo de usuario sos. Se tiene que diferenciar si sos usuario Admin o usuario "comun"
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