import { ref } from "vue";

class MovieService {
    movies;

    constructor(){
        this.movies = ref([])
    }

    getMovies(){
        return this.movies
    }

    async fetchPopularMovies(){
        try {
            const url = "https://api.themoviedb.org/3/movie/popular?api_key=b2dd2751da85c7ad32671ddb27a345d1";
            const response = await fetch(url);
            console.log(response);
            const json = await response.json()
            const data = await json.results;
            this.movies.value = data

            console.log(this.movies.value)

        } catch (error) {
            console.error(error);
        }
    }
}

export default MovieService;