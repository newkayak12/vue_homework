import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import('@/views/index'),
  },
  {
    path: '/multiplicationTable/',
    name: 'multiplication_table',
    component: () => import('@/views/multiplicationTable/index'),
  },
  {
    path: '/findWord/',
    name: 'find_word',
    component: () => import('@/views/findWord/index'),
  },
  {
    path: '/trafficLight/',
    name: 'traffic_light',
    component: () => import('@/views/trafficLight/index'),
  },
  {
    path: '/endTalk/',
    name: 'end_talk',
    component: () => import('@/views/endTalk/index'),
  },
  {
    path: '/numberbaseball/',
    name: 'number_baseball',
    component: () => import('@/views/numberBaseball/index'),
  },
  {
    path: '/lottery/',
    name: 'lottery',
    component: () => import('@/views/lottery/index'),
  },
  {
    path: '/tictactoe/',
    name: 'tictactoe',
    component: () => import('@/views/tictactoe/index'),
  },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
