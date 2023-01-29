import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import haveRoleGuard from './role-guard';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/products',
    name: 'products',
    //beforeEnter: [haveRoleGuard],
    component: () =>
      import(/* webpackChunkName: "productsView" */ "../views/ProductsView.vue"),
  },
  {
    path: '/login',
    name: 'login',
    component: () =>
      import(/* webpackChunkName: "loginView" */ "../views/LoginView.vue"),
  },
  {
    path: '/detail/:id',
    name: 'detail',
    //beforeEnter: [haveRoleGuard],
    component: () =>
      import(/* webpackChunkName: "detailView" */ "../views/DetailView.vue"),
      
    props: (route) => {
      const id = Number(route.params.id);
      const userRole = localStorage.getItem('userRole');
      return isNaN(id) ? { id: null, userRole } : { id, userRole };
    }  
    
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
