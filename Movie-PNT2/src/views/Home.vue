<template>

<h1>Populares</h1>
<AllMovies />

<RouterView></RouterView>
</template>

<script setup>
import { RouterView } from 'vue-router';
import AllMovies from '../components/AllMovies.vue';
</script>

<style scoped>
h1{
      color: aliceblue;
}
</style>