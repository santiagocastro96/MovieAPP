
import { createApp } from 'vue';

import App from './App.vue';
import router from './routes/router'; // vue-router


const app = createApp(App);

app.use(router); 

app.mount('#app');

// import { pinia } from './store/auth'; debo descomentar esto cuando estes por usar pinia, si no no corre.
//app.use(pinia); lo mismo