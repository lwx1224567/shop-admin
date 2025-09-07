import{
    createRouter,
    createWebHashHistory
}from 'vue-router'

import Index from '~/pages/index.vue'
import NotFound from '~/pages/404.vue'
import Login from '~/pages/login.vue'
import Register from '~/pages/register.vue'

const routes = [{
    path: "/",
    component: Index
},
{
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
},
{ 
    path: '/login',  
    component: Login
},
{
    path: '/register',
    component: Register
}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router