<!-- Categories.vue -->
<template>
    <div>
      <h2>Categorías</h2>
      <ul>
        <li v-for="category in categories" :key="category.id">
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
          // Reemplaza la URL con la API de categorías real
          const response = await axios.get('https://api.themoviedb.org/3/genre/movie/list?language=en');
          this.categories = response.data;
        } catch (error) {
          console.error('Error al cargar categorías:', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  h2{
      color: aliceblue;
    }
  </style>
  