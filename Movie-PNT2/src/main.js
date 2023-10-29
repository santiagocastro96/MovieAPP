
import { createApp } from 'vue';
import App from './App.vue';
import router from './routes/router'; // vue-router
// import { pinia } from './store/auth'; debo descomentar esto cuando estes por usar pinia, si no no corre.

const app = createApp(App);

app.use(router); 
//app.use(pinia); lo mismo
app.mount('#app');
