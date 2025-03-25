import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ContactForm from '../components/ContactForm.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/add', component: ContactForm },
  { path: '/edit/:id', component: ContactForm, props: true }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
