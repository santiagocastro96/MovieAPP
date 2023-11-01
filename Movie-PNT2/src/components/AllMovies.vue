<template>
  <div class="contenedor">

  
  <div class="card" style="width: 18rem;" v-for="movie in movies" :key="movie.id">
  <img class="card-img-top" :src="imageFilter(movie.backdrop_path)" :alt="movie.title">
  <div class="card-body">
    <h5 class="card-title">{{ movie.original_title }}</h5>
    <p class="card-text">{{ movie.overview }}</p>

    <RouterLink :to="{path:'movie/' + movie.id}">
   <button class="btn btn-primary">Go Somewhere</button>
</RouterLink> 

  </div>
</div>

</div>
  


</template>

<script setup>
import MovieService from '../services/MovieService';
import { onMounted, onUpdated } from 'vue';
import { RouterLink } from 'vue-router';

const service = new MovieService();
const movies = service.getMovies();


onMounted(async () => {
    await service.fetchPopularMovies();
})

const imageFilter = (image) => "https://image.tmdb.org/t/p/w300/" + image





</script>

<style scoped>
h1{
    color: white;
}

.contenedor{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 15px 15px;
}

.card{
    margin-bottom: 15px;
}
</style>