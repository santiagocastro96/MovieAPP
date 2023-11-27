<template>
  <form class="Search form-inline my-2 my-lg-2" @submit.prevent="searchMovies">
    <div class="position-relative">
      <input
        class="form-control mr-sm-2"
        type="text"
        placeholder="Search"
        aria-label="Search"
        v-model="searchString"
      />
      <!-- Lista de películas encontradas -->
      <div v-if="foundMovies.length" class="SearchResults">
        <ul class="list-group">
          <li
            v-for="movie in foundMovies"
            :key="movie.id"
            class="list-group-item"
            @click="selectMovie(movie)"
            
          >
          <router-link :to="{ name: 'movie', params: { id: movie.id } }" :exact="true" :force="true">
             {{ movie.title }}
          </router-link>
          

          </li>
        </ul>
      </div>
    </div>
  </form>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import MovieService from '../services/MovieService';
import { RouterLink } from 'vue-router';

import router from "../routes/router"
import { useRoute } from 'vue-router';
const route = useRoute()

const service = new MovieService();
const searchString = ref('');
const foundMovies = ref([]);

const searchMovies = async () => {
  console.log('searchMovie');
  foundMovies.value = await service.searchMovie(searchString.value);
};

const selectMovie = (movie) => {
  // Interactuar con la película seleccionada
  // Por ejemplo, podrías sumar +1 a una estadística (a implementar)
  
  
  console.log('Película seleccionada:', movie);
  location.reload();
  
};

watch(searchString, searchMovies);

//var isOnHomePage = true;

onMounted(() => {
  // Realiza la búsqueda inicial (opcional)
  searchMovies();
  //switchSearchBar();
});

/* para ocultar la barra si no estas en la home (no funciona porque siempre estas en la view home)
function switchSearchBar() {

      if(route.path === '/'){
        isOnHomePage = true;
      } else{
        isOnHomePage = false;
      }
    };

  */
</script>

<style scoped>
/* Estilos opcionales para la lista de películas encontradas */
.SearchResults {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: 200px; /* Establece la altura máxima según tus necesidades */
  overflow-y: auto; /* Agrega desplazamiento vertical si es necesario */
  border: 1px solid #ced4da; /* Bordes del menú */
  background-color: #fff; /* Color de fondo del menú */
  z-index: 999; /* Asegura que el menú esté por encima de otros elementos */
}

/* Estilos para la lista de resultados */
.list-group {
  margin: 0;
  padding: 0;
}

.list-group-item {
  cursor: pointer;
}
</style>
