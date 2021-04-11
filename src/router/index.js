import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Plans from '../views/PlansView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Plans',
    component: Plans,
  },
  {
    path: '/answers',
    name: 'Questions',
    component: Home,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
