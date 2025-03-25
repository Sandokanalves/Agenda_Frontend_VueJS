import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Certifique-se de importar o router
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/lara-light-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

const app = createApp(App);

app.use(router); // Certifique-se de usar o router aqui
app.use(PrimeVue);
app.mount('#app');
