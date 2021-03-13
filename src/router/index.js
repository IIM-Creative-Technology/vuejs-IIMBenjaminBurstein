import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Admin from '../views/Admin'
import Create from '../views/Create'
import Edit from '../views/Edit'
import Show from '../views/Show'



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/create',
    name: 'create',
    component: Create
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    children: [{
      path: 'edit/:id',
      component: Edit
    }]
  },
  {
    path: '/show/:id',
    name: 'show',
    component: Show
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
