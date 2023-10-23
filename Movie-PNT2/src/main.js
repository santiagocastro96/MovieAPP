
import { createApp } from 'vue';
import App from './App.vue';
import router from './routes/router'; // Importa tu enrutador

const app = createApp(App);

app.use(router); // Utiliza el enrutador

app.mount('#app');
