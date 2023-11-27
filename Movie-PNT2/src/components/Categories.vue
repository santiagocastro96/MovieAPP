<template>
  <div class="categories-container">
    <!-- Lista de categorías -->
    <div name="listCategories" class="col-lg-2 bg-light p-1">
      <h2>| Categorías</h2>
      <ul class="list-group">
        <li v-for="category in categoriesList" :key="category.id" @click="selectCategory(category.id)" class="list-group-item">
          {{ category.name }}
        </li>
      </ul>
    </div>

    <!-- Contenedor para las películas (parte central e izquierda) -->
     

    <div class="contenedor">

      <!-- Aquí puedes agregar el componente que muestra las películas -->
      <div class="card" style="width: 18rem;" v-for="movie in filteredMovies" :key="movie.id">
  <img class="card-img-top" :src="imageFilter(movie.backdrop_path)" :alt="movie.title">
  <div class="card-body">
    <h5 class="card-title">{{ movie.title }}</h5>
    <p class="card-text">{{ movie.overview }}</p>
    
    <RouterLink :to="{path:'movie/' + movie.id}">
   <button class="btn btn-primary">Go Somewhere</button>
  </RouterLink>

  </div>
</div>
</div>


      
    <h1 v-show="filteredMovies.length === 0">No hay peliculas</h1>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, onUpdated, watch, reactive } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import MovieService from '../services/MovieService';
import router from "../routes/router";

const service = new MovieService();
const categoriesList = ref([]);
const selectedCategory = ref("");
let filteredMovies = service.getMoviesFilterByCategory()
//const route = useRoute()

const getCategories = async () => {
  categoriesList.value = await service.fetchCategories();
};

const selectCategory = async(categoryId) => {
  
 
  // Al seleccionar una categoría, actualiza el estado y filtra las películas
  selectedCategory.value = categoriesList.value.find(category => category.id === categoryId);
  //console.log(selectedCategory.value)
  //router.push(selectedCategory.value.name)
  //console.log(router.params)
  await service.getMoviesByCategory(selectedCategory.value.id)
  //filteredMovies = service.getMoviesFilterByCategory()
  
 // console.log(filteredMovies.value);
};


const imageFilter = (image) => "https://image.tmdb.org/t/p/w300/" + image
 

/*
const filterMoviesByGenre = async () => {
  if (selectedCategory.value && selectedCategory.value.id) {
    try {
      const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${selectedCategory.value.id}`;
      const response = await fetch(url);
      const data = await response.json();
      filteredMovies.value = data.results || [];
     console.log(filteredMovies);
    } catch (error) {
      console.error(error);
    }
  } else {
    // Muestra todas las películas si no hay categoría seleccionada
    filteredMovies.value = [];
  }
};*/

//console.log(filteredMovies);

onMounted(async () => {
  // Realiza la búsqueda inicial (opcional)
 await getCategories();
});
</script>

<style scoped>

.contenedor{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 15px 15px;
}

.card{
  margin: 15px;
}

h1{
  color: white;
}

.li-movie{
  border: 2px solid red;
  width: 100%;
  color: white;
}
/* Estilos opcionales */
.categories-container {
  display: flex;
}
.col-lg-2 {
  min-width: 200px;
  padding: 20px;
  background-color: #f8f9fa;
}

.movies-container {
  flex-grow: 1;
  padding: 20px;
}
.list-group-item {
  cursor: pointer;
}
</style>
