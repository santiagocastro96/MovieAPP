<template>
  <div>
      <h1 class="title">{{ movie.title }}</h1>
      <div class="divDescription">
        <p class="description">{{ movie.overview }}</p>
      </div>
      
      <div class="div-front-IMG">
        <img class="frontImg" :src="currentImage" alt="Imagen" @click="cambiarImagen">
    
      </div>
      
      
    
      
  </div>
</template>

<script>
const img = null; //agregar foto de 'Imagen no encontrada'
const img2 = null;



export default {
  data() {
      return {
          movie: {},
          img1: "",
          img2: "",
          currentImage: "",
      };
  },
  mounted() {
      this.fetchMovieData();
  },
  methods: {
      async fetchMovieData() {
          try {
              const apiKey = 'e8b0e3c18471ac19d8c83810d4ccb27b';
              const response = await fetch(
                  `https://api.themoviedb.org/3/movie/440?api_key=${apiKey}`
              );
              if (response.ok) {
                  this.movie = await response.json();
                  this.img = "https://image.tmdb.org/t/p/w500/" + this.movie.poster_path;
                  this.img2 = "https://image.tmdb.org/t/p/w500/" + this.movie.backdrop_path;
                  this.currentImage = this.img;
                  
              } else {
                  console.error('Error al cargar los datos de la película.');
              }
          } catch (error) {
              console.error('Error al conectar con la API:', error);
          }
      },
      cambiarImagen() {
      // Cambia entre las dos imágenes alternativamente al hacer clic
      if (this.currentImage === this.img) {
        this.currentImage = this.img2;
      } else {
        this.currentImage = this.img;
      }
    }
  }
};


</script>

<style scoped>
.div-front-IMG {
  border: 2px solid #000;
  padding: 1px;
  margin: 0;
  float: left;
  position: relative;
  width: 500px; 
  height: 500px; 
  overflow: hidden;
  cursor: pointer; /* Cambia cursor */
}

.frontImg {
  position: absolute;
  width: 100%;
  height: 100%;
  transition: transform 0.2s;
  cursor: pointer; 
}

.title {
  font-size: 28px;
  color: #333;
  font-weight: bold;
  text-transform: uppercase;
  margin: 0; 
  text-align: center;
}
</style>