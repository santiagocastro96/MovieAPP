import {defineStore} from 'pinia'
import {ref, computed} from 'vue'
import { users } from '../data/users'

export const useAuthStore = defineStore("authStore",()=>{
    const _username = ref("")
    const _password = ref("")
    const _hayAdmin = ref(0)
    const _direccion = ref("")
    

    //action
    function login(username, password){


        //validaciones
        console.log("llego usuario: " + username + " y contraseña: " + password);
        const user = users.find(user => user.username === username && user.password === password);
        if(user){
        _username.value = username
        _password.value = password
        _direccion.value = user.direccion

        if(user.role === 1){
          _hayAdmin.value = user.role;
        }
        }
        
        console.log('autenticado este usuario :' + _username.value);
    }

    //TODO: agregar el botón de logout donde corresponda en la interfaz (y que aparesca con un v-if en caso de que se esté logueado)
    function logout (){
        //validaciones
        console.log("entro a desloguear")
        _username.value = ""
        _password.value = ""
        _hayAdmin.value = 0
    }
    

    //getter
    function obtenerDireccion(){
      console.log("entro al obtener " + _direccion.value)
      return _direccion.value
    }


    const hayUsuarioAutenticado = computed(()=> {
      //TODO: hacer que la validación corrabore que tipo de usuario sos. Se tiene que diferenciar si sos usuario Admin o usuario "comun"

      return  _username.value !== "" && _password.value !== "";
    })
    const hayAdmin = computed(()  =>{
      return _hayAdmin.value === 1
    })



    //que exponemos
    return {login, logout, hayUsuarioAutenticado, hayAdmin, obtenerDireccion}
})
