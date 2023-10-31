<template>
  <div>
    <h2>Holaaa</h2>
  </div>
</template>

<script setup>
import { defineProps, onMounted } from 'vue';

onMounted(() => {
    console.log(route.params.id);
})

</script>

<style scoped>

</style>