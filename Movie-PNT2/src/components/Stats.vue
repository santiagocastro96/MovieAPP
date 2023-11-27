<template>

    <div class="wrapper">
      <h1 class="title">Estadísticas</h1>
  
      <!-- Películas más buscadas -->
      <div class="statistic-box">
        <h2>Películas más buscadas</h2>
        <li v-for="(movie, index) in mostSearchedMovies" :key="index">{{ movie._name.value }}</li>

        <div>
            <canvas id="searchChart"></canvas>
        </div>
      </div>
  
      <!-- Películas más alquiladas -->
      <div class="statistic-box">
        <h2>Películas más alquiladas</h2>
        <li v-for="(movie, index) in mostRentedMovies" :key="index">{{ movie._name.value }}</li>
        <div>
            <canvas id="rentedChart"></canvas>
        </div>
      </div>
  
      <!-- Películas mejor puntuadas -->
      <div class="statistic-box">
        <h2>Películas mejor puntuadas</h2>
        <li v-for="(movie, index) in topRatedMovies" :key="index">{{ movie._name.value }}</li>
        <div>
            <canvas id="ratedChart"></canvas>
        </div>
      </div>
    </div>
  
  </template>
  <script setup>
  
  
  import { useStatisticsStore } from '../Stores/statisticsStore';
  import {storeToRefs} from 'pinia';
  import { ref, onMounted } from 'vue';
  import router from "../routes/router";
  import Chart from 'chart.js/auto';
  
  
  const statisticsStore = useStatisticsStore()

  const {movies} = statisticsStore
  const {mostSearchedMovies} = statisticsStore
  const {mostRentedMovies} = statisticsStore
  const {topRatedMovies} = statisticsStore
  


  onMounted(() => {
      mostSearchedMovies.value = statisticsStore.mostSearchedMovies;
      mostRentedMovies.value = statisticsStore.mostRentedMovies;
      topRatedMovies.value = statisticsStore.topRatedMovies;

      // chart para más vistas
      new Chart(
        document.getElementById('searchChart'),
        {
          type: 'bar',
          data: {
            labels: mostSearchedMovies.value.map(movie => movie._name.value),
            datasets: [
              {
                barPercentage: 1,
                label: 'Most Searched Movies',
                data: mostSearchedMovies.value.map(movie => movie._searching.value),
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 1,  // Ajusta según tus necesidades
                },
              },
            },
          },
        }
      );


      // chart para más alquiladas
      new Chart(
        document.getElementById('rentedChart'),
        {
          type: 'polarArea',
          data: {
            labels: mostRentedMovies.value.map(movie => movie._name.value),
            datasets: [
              {
                label: 'Most Searched Movies',
                data: mostRentedMovies.value.map(movie => movie._searching.value),
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
                            ticks: {
                    stepSize: 1,  // Ajusta según tus necesidades
                },
              },
            },
          },
        }
      );

      // chart para más puntuadas
      new Chart(
        document.getElementById('ratedChart'),
        {
          type: 'bar',
          data: {
            labels: topRatedMovies.value.map(movie => movie._name.value),
            datasets: [
              {
                label: 'Most Searched Movies',
                data: topRatedMovies.value.map(movie => movie._searching.value),
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
                            ticks: {
                    stepSize: 1,  // Ajusta según tus necesidades
                },
              },
            },
          },
        }
      );




    });


  



  
    </script>
    
    <style scoped>
  
  body{
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background: url("../../public/img/FondoLogin.jpg") no-repeat;
      background-size: cover;
      background-position: center;
  }
  
  
  .pError p{
      color: crimson;
      text-align: center;
      position: relative;
      top: 25px;
  }
  .title{
      color:rgb(255, 255, 255); 
      border-bottom: 1px white solid;
      padding-bottom: 10px;
  }
  
  .wrapper{
  /* Puedes ajustar el ancho máximo según tu preferencia */
      width: 100%;
      text-align: center;
      background: transparent;
      border: 2px solid rgba(255, 255, 255, .2);
      backdrop-filter: blur(20px);
      color: black;
      border-radius: 10px;
      padding: 30px 40px;
  }
  
  .wrapper h1{
      font-size: 36px;
      text-align: center;
  }
  .statistic-box {
    background-color: #f5f5f5; /* Puedes ajustar el color de fondo de las cajas según tu preferencia */
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    margin-top: 20px; /* Puedes ajustar el margen superior según tu preferencia */
  }
  
  .wrapper .input-box{
      position: relative;
      width: 100%;
      height: 50px;
      margin: 30px 0;
  }
  
  .input-box input{
      width: 100%;
      height: 100%;
      background: transparent;
      border: none;
      outline: none;
      border: 2px solid rgba(255, 255, 255, .2);
      border-radius: 40px;
      font-size: 16px;
      color: #fff;
      padding: 20px 45px 20px 20px;
      transition: border-color 0.4s ease;
  }
  
  .input-box input::placeholder{
      color: #fff;
  }
  
  .input-box i{
      position: absolute;
      right: 20px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 20px;
  }
  
  .wrapper .remember-forget{
      display: flex;
      justify-content: space-between;
      font-size: 14.5px;
      margin: -15px 0 15px;
  }
  
  .remember-forget label input{
      accent-color: #fff;
      margin-right: 3px;
  }
  
  .remember-forget a{
      color: #fff;
      text-decoration: none;
  }
  
  .remember-forget a:hover{
      text-decoration: underline;
  }
  
  .wrapper .btn{
      width: 100%;
      height: 45px;
      background: #fff;
      border: none;
      outline: none;
      border-radius: 40px;
      box-shadow: 0 0 10px rgba(0, 0, 0, .1);
      cursor: pointer;
      font-size: 16px;
      color: #333;
      font-weight: 600;
  }
  
  .wrapper .register-link{
      font-size: 14.5px;
      text-align: center;
      margin-top: 20px 0 15px;
  }
  
  .register-link p a{
      color: #fff;
      text-decoration: none;
      font-weight: 600;
  }
  
  .register-link p a:hover{
      text-decoration: underline;
  }
    </style>
    
    