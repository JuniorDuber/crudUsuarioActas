import { createRouter, createWebHistory } from 'vue-router';

import dashboard from '../pages/master/dashboard.vue';
import login from '../pages/login.vue';
import register from '../pages/register.vue';
import people from '../pages/people.vue'



const routes = [
  {
    name: 'Dashboard',
    path: '/',
    component: dashboard,
    children: [
      {
        name: 'login',
        path: '/login',
        component: login
    
      },
      {
        name: 'register',
        path: '/register',
        component: register
      },
      {
        name: 'people',
        path: '/people',
        component: people
      }
  
    ]
  }
  
];

const router = Router();
export default router;
function Router(){
  const router = new createRouter({
    history: createWebHistory(),
    routes,
  });
  return router;
}


