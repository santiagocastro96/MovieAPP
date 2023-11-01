<template>
    
    
  <div class="contenedor">
    <img :src="imageFilter(movie.backdrop_path)" alt="">
    <div class="details">
    <h2>{{ movie.original_title }} ({{ movie.release_date }})</h2>
    <h3>Overview</h3>
    <p>{{ movie.overview }}</p>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { defineProps, onMounted } from 'vue';
import MovieService from '../services/MovieService';

const route = useRoute()
const service = new MovieService()
const movie = service.getMovie();





onMounted(async() => {
    const id = route.params.id
    await service.getMovieById(id)
})

const imageFilter = (image) => "https://image.tmdb.org/t/p/w300/" + image


</script>

<style scoped>

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


</style>