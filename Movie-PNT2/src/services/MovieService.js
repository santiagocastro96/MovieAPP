import { ref } from "vue";

class MovieService {
    movies;
    movie;
    credits;
    director;
    actors;

    constructor(){
        this.movies = ref([])
        this.movie = ref("")
        this.credits = ref("")
        this.director = ref("");
        this.actors = ref([])
    }

    getMovies(){
        return this.movies
    }

    getMovie(){
        return this.movie
    }

    getCredits(){
        return this.credits
    }

    getDirector(){
        return this.director
    }

    getActors(){
        return this.actors;
    }

    async fetchPopularMovies(){
        try {
            const url = "https://api.themoviedb.org/3/movie/popular?api_key=b2dd2751da85c7ad32671ddb27a345d1";
            const response = await fetch(url);
          //  console.log(response);
            const json = await response.json()
            const data = await json.results;
            this.movies.value = data

        //    console.log(this.movies.value)

        } catch (error) {
            console.error(error);
        }
    }

    async getMovieById(id){
        try {
            const url = `https://api.themoviedb.org/3/movie/${id}?api_key=b2dd2751da85c7ad32671ddb27a345d1`;
            const response = await fetch(url)
           // console.log(response);
            const json = await response.json()
          //  console.log(json);
            this.movie.value = await json

           // console.log(this.movie.value)
        } catch (error) {
            console.error(error)
        }
    }

    async getCreditsOfMovie(idMovie){
        try {
            const url = `https://api.themoviedb.org/3/movie/${idMovie}/credits?api_key=b2dd2751da85c7ad32671ddb27a345d1`
            const response = await fetch(url)
            console.log(response);
            const json = await response.json()
            console.log(json);
            this.credits.value = await json

            const crew = json.crew.filter((departament) => departament.known_for_department == 'Directing' && departament.department == 'Writing' || departament.job == 'Director')

            this.director.value = { ...crew[0]}
           // console.log(json.crew.filter((departament) => departament.known_for_department == 'Directing' && departament.department == 'Writing'));
            for(let i = 0; i < 3; i++){
                this.actors.value.push(json.cast[i].name)
            }

            //console.log(this.actors.value);
        
        } catch (error) {
            console.error(error)
        }
    }
}

export default MovieService;