import { createRouter, createWebHistory } from 'vue-router'
import SearchResult from './SearchResult.vue'
import MovieDetail from './MovieDetail.vue'
import Home from './Home.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'Home',
      path: '/',
      component: Home,
    },
    {
      name: 'SearchResult',
      path: '/searchResult',
      component: SearchResult,
    },
    {
      name: 'MovieDetail',
      path: '/detail/:id',
      component: MovieDetail,
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/home',
    },
  ],
})
