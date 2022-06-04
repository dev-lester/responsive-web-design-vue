import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import SpecsComponent from '../components/SpecsComponent.vue'
import ProductsComponent from '../components/ProductsComponent.vue'
import AboutComponent from '../components/AboutComponent.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/specs',
    name: 'Specs',
    component: SpecsComponent
  },
  {
    path: '/products',
    name: 'Products',
    component: ProductsComponent
  },
  {
    path: '/about',
    name: 'About',
    component: AboutComponent
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router