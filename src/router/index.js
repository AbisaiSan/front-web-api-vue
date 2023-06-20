import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/auth/LoginView.vue'
import ProductsView from '../views/admin/products/ProductsView.vue'
import AdminView from '../views/layouts/AdminView.vue'
import ProductsCreateView from '../views/admin/products/ProductsCreateView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/auth/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/admin',
      component: AdminView,
      children: [
        {
          path: 'products',
          name: 'admin.products',
          component: ProductsView
        },
        {
          path: 'products/create',
          name: 'admin.products.create',
          component: ProductsCreateView
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
