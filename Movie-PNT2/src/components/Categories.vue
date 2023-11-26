<!-- Categories.vue -->
<template>
    <div>
      <h2>Categorías</h2>
      <ul>
        <li v-for="category in categories" :key="category.id" @click="navigateToMovies(category.id)" class="category-item">
          {{ category.name }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {

    data() {
        return {
            categories: [],
        };
  },
    mounted() {
      // Llamada a la API al cargar el componente
      this.fetchCategories();
    },
    methods: {
      async fetchCategories() {
        try {
          const apiKey = '7a6ee4c0ee234ad68d1c960e80c68d82'; 
          const response = await axios.get('https://api.themoviedb.org/3/genre/movie/list', {
            params: {
              language: 'es',
              api_key: apiKey,
            },
            headers: {
            Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YTZlZTRjMGVlMjM0YWQ2OGQxYzk2MGU4MGM2OGQ4MiIsInN1YiI6IjY1MzcwNGRjYzUwYWQyMDBjYTg4OGVjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fK3QuRBPznOu0qBRi7rGjHGcvpGlf-Pvs1cnbl9It6Y',
    
        },

          });
          this.categories = response.data.genres;
  
        } catch (error) {
          console.error('Error al cargar categorías:', error);
        }
      },
      navigateToMovies(categoryId) {
        // Redirige al usuario a la página de películas con el ID de la categoría como parámetro
        this.$router.push({ name: 'movies', params: { categoryId } });
     },
    },
  };
  </script>
  
  <style scoped>
  h2 {
    color: aliceblue;
  }

  .category-item {
    font-size: 16px;
    color: aliceblue;
    margin-bottom: 8px;
  }
  </style>
  