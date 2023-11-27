import {defineStore} from 'pinia'
import {ref, computed} from 'vue'

export const useStatisticsStore = defineStore("statisticsStore",()=>{
    const film1 = {_name : ref(""), _searching : ref(0), _rented : ref(0), _rating : ref(0)}
    const film2 = {_name : ref(""), _searching  : ref(0), _rented : ref(0), _rating : ref(0)}
    const film3 = {_name : ref(""), _searching  : ref(0), _rented : ref(0), _rating : ref(0)}
    const film4 = {_name : ref(""), _searching  : ref(0), _rented : ref(0), _rating : ref(0)}
    const film5 = {_name : ref(""), _searching  : ref(0), _rented : ref(0), _rating : ref(0)}
    const film6 = {_name : ref(""), _searching  : ref(0), _rented : ref(0), _rating : ref(0)}
    const film7 = {_name : ref(""), _searching  : ref(0), _rented : ref(0), _rating : ref(0)}
    const film8 = {_name : ref(""), _searching  : ref(0), _rented : ref(0), _rating : ref(0)}
    const film9 = {_name : ref(""), _searching  : ref(0), _rented : ref(0), _rating : ref(0)}
    const film10 = {_name : ref(""), _searching  : ref(0), _rented : ref(0), _rating : ref(0)}

    const movies = computed(() => {
        return [film1, film2, film3, film4, film5, film6, film7, film8, film9, film10]
    })

    const mostSearchedMovies = computed(() => {
        return movies.value.sort((a, b) => b._searching.value - a._searching.value).slice(0, 10);
    })

    const mostRentedMovies = computed(() => {
        return movies.value.slice().sort((a, b) => b._rented.value - a._rented.value).slice(0, 10);
      });
      
    const topRatedMovies = computed(() => {
        return movies.value.slice().sort((a, b) => b._rating.value - a._rating.value).slice(0, 10);
    });
    

    
    function seBuscaPelicula(filmName){
      let seIncremento = false;
      for (let i = 0; i < movies.value.length; i++) {
        if(movies.value[i]._name.value === "" && !peliculaYaAgregada(filmName)) {
          movies.value[i]._name.value = filmName;
        }
        
        if(movies.value[i]._name.value == filmName && seIncremento == false){
          seIncremento = true;
          movies.value[i]._searching.value += 1;
        }
      }
      console.log("se busco la peli: " + filmName)
    }

    function alquilarPelicula(filmName){

      const foundMovie = movies.value.find((movie) => movie._name.value === filmName);
      
      if(foundMovie){
        console.log("se alquiló la pelicula: " + foundMovie._name.value);
        foundMovie._rented.value += 1;
        console.log(foundMovie._rented.value)
      }

    }

    function puntuarPelicula(filmName, puntaje){
      const foundMovie = movies.value.find((movie) => movie._name.value === filmName);
      
      if(foundMovie){
        console.log("se puntuo la pelicula: " + foundMovie._name.value);
        foundMovie._rating.value += puntaje;
        console.log(foundMovie._rating.value)
      }
    }


    //verifica que no se duplique una pelicula dentro de las ya existentes
    function peliculaYaAgregada(filmName){
      let peliculaAgregada = false;
      for (let i = 0; i < movies.value.length; i++) {
        if (movies.value[i]._name.value === filmName) {
          peliculaAgregada = true;
        }
      }
      return peliculaAgregada;
    }

    //que exponemos
    return {movies, mostSearchedMovies, mostRentedMovies, topRatedMovies, seBuscaPelicula, alquilarPelicula, puntuarPelicula}
})
