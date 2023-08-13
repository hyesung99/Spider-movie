import { createRouter, createWebHistory } from 'vue-router'
import SearchResult from './SearchResult.vue'
import MovieDetail from './MovieDetail.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: SearchResult,
    },
    {
      name: 'MovieDetail',
      path: '/detail/:id',
      component: MovieDetail,
    },
  ],
})
