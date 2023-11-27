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
    <div class="movies-container">
      <!-- Aquí puedes agregar el componente que muestra las películas -->
      <ul>
        <li v-for="movie in filteredMovies" :key="movie.id">
          {{ movie.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import MovieService from '../services/MovieService';

const service = new MovieService();
const categoriesList = ref([]);
const selectedCategory = ref(null);
const filteredMovies = ref([]);

const getCategories = async () => {
  categoriesList.value = await service.fetchCategories();
};

const selectCategory = (categoryId) => {
  // Al seleccionar una categoría, actualiza el estado y filtra las películas
  selectedCategory.value = categoriesList.value.find(category => category.id === categoryId);
  filterMoviesByGenre();
};

const filterMoviesByGenre = async () => {
  if (selectedCategory.value && selectedCategory.value.id) {
    try {
      const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${selectedCategory.value.id}`;
      const response = await fetch(url);
      const data = await response.json();
      filteredMovies.value = data.results || [];
    } catch (error) {
      console.error(error);
    }
  } else {
    // Muestra todas las películas si no hay categoría seleccionada
    filteredMovies.value = [];
  }
};

onMounted(() => {
  // Realiza la búsqueda inicial (opcional)
  getCategories();
});
</script>

<style scoped>
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
