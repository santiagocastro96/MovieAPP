<template>
    <body>
    <div class="contenedor">
        <header>
            <h1 ref="nameFilm" >{{ movie.original_title }}</h1>
            <p class="anio">{{ movie.release_date }}</p>
        </header>
        <div class="detalles">
            <div class="portada">
                <img :src="imageFilter(movie.backdrop_path)" alt="Título de la Película" width="800" height="600">
            </div>
            <div class="informacion">
                <p><strong>Director:</strong> {{ director.name }}</p>
                
                <p><strong>Reparto:</strong></p>
                <ul>
                  <li v-for="actor in actors">{{ actor }}</li>
                </ul>
                <p class="sinopsis"><strong>Sinopsis:</strong> {{ movie.overview }}</p>
            </div>
        </div>
        
        <button v-on:click="alquilar" class="boton-alquilar my-2">Alquilar</button>
        <p v-show="messageVisible" class="mensaje-alquiler"> {{ message }}  </p>
        <div v-show="messageVisible">
            <h4>¿Ya la viste? Califica la pelicula (1-5):</h4>
            <span  v-for="star in 5" :key="star" @click="rateMovie(star)">
                ⭐️
            </span>
            <h3 v-show="message2Visible">¡Gracias por puntuar la pelicula!</h3>
        </div>
    </div>
</body>

</template>

<script setup>
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';
import MovieService from '../services/MovieService';

import { useAuthStore } from '../Stores/authStore';
import {storeToRefs} from 'pinia';


import router from "../routes/router"
import { useStatisticsStore } from '../Stores/statisticsStore';

const statisticsStore = useStatisticsStore()
const {seBuscaPelicula} = statisticsStore
const {alquilarPelicula} = statisticsStore
const {puntuarPelicula} = statisticsStore

const nameFilm = ref(null);

const authStore = useAuthStore()
const {obtenerDireccion} = authStore

const route = useRoute()
const service = new MovieService()
const movie = service.getMovie();
const credits = service.getCredits();
const director = service.getDirector();
const actors = service.getActors();

const {hayUsuarioAutenticado} = storeToRefs(authStore)


const message = 'Su alquiler se completó con éxito. Enviaremos su película a la dirección: ' + obtenerDireccion();

let messageVisible = ref(false);
let message2Visible = ref(false);

const alquilar = () => {
    if(hayUsuarioAutenticado.value){
        
        messageVisible.value = true;
        console.log(route.params);
        console.log()
        //registrar que se alquilo la pelicula
        alquilarPelicula(nameFilm.value.textContent)
        console.log("peli de click:" + nameFilm.value.textContent)
        //route.path.replace(`/movie/${route.params.id}`, "/login")
}
else{
    router.push("/login")
}
}




//TODO: Agregar que si estas logueado, al apretar el botón de alquilar pelicula, se muestre un cartel de que la alquilaste y,
// en caso de no estar logueado te lleve a la pagina de login

onMounted(async() => {
    const {id} = route.params
    await service.getMovieById(id)
    await service.getCreditsOfMovie(id)

    //registrar que se buscó la pelicula
    console.log("Entro al valueTitle: " + nameFilm.value.textContent)
    seBuscaPelicula(nameFilm.value.textContent);
})

const imageFilter = (image) => "https://image.tmdb.org/t/p/w300/" + image

//calificar pelicula
const rateMovie = (rating) => {
  puntuarPelicula(nameFilm.value.textContent, rating)
  message2Visible.value = true;
  console.log(`Puntuación de la película: ${rating}`);
};


</script>

<style scoped>

body {
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
    margin: 0;
    padding: 0;
}

.contenedor {
    max-width: 950px;
    margin: 0 auto;
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: left;
}

header {
    text-align: center;
}

h1 {
    font-size: 32px;
    margin: 0;
    color: #333;
}

.anio {
    font-size: 16px;
    margin: 5px 0;
    color: #666;
}

.detalles {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}

.portada img {
    max-width: 100%;
    height: auto;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.informacion {
    flex-grow: 1;
    padding: 0 20px;
}

p {
    font-size: 18px;
    margin: 10px 0;
    color: #666;
}

.sinopsis {
    font-size: 16px;
}

button {
    background-color: #007BFF;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
}

button:hover {
    background-color: #0056b3;
}

/*
.contenedor{
    outline: 3px solid red;
    background-color: lightblue;
   display: flex;
   justify-content: center;
}

.details{
    outline: solid 2px blue;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

img{
    padding: 15px;
    border-radius: 30px;
    width: 20vw;
    height: 50vh;
}
*/

</style>