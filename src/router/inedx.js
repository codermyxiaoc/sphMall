import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
let originPush = VueRouter.prototype.push


VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this.location, resolve, reject)
    } else {
        originPush.call(this,location, () => { }, () => { })
    }
} 



const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path : '/home',
        component: () => import('views/Home/Home.vue'),
        meta: {
            isfooterxshow: true
        }
    },
    {
        path: "/search/:keyword?",
        name: "search",
        component: () => import('../views/Search/Search.vue'),
        meta: {
            show: true,
        },
        props: ($route) => ({
            keyword: $route.params.keyword,
            k: $route.query.k,
        }),
    },
    {
        path: '/login',
        component: () => import('views/Login/Login.vue'),
        meta: {
            isfooterxshow: false
        }
    },
    {
        path: '/register',
        component: () => import('views/Register/Register.vue'),
        meta: {
            isfooterxshow: false
        }
    }


]

const router = new VueRouter({
    routes,
    mode: 'history'  
})

export default router