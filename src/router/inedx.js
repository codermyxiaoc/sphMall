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
        redirect: '/home',
        
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
        },
        beforeEnter: (to, from, next) => {
            if(localStorage.getItem('token')) {
                return next({path: '/home'})
            }
            return next()
        }
    },
    {
        path: '/register',
        component: () => import('views/Register/Register.vue'),
        meta: {
            isfooterxshow: false
        }
    },
    {
        path: '/detail/:id',
        component: () => import('views/Detail/Detail.vue'),
        meta: {
            isfooterxshow: true
        }
    },
    {
        path: '/AddCartSuccess',
        component: () => import('views/AddCartSuccess/AddCartSuccess.vue'),
        meta: {
            isfooterxshow: true
        },
        
    },
    {
        path: '/ShopCart',
        component: () => import('views/ShopCart/ShopCart.vue'),
        meta: {
            isfooterxshow: true
        }
    },
    {
        path: '/Trade',
        component: () => import('views/Trade/Trade.vue'),
        beforeEnter: (to, from, next) => {
            if (from.fullPath == '/ShopCart') {
                return next()
            }
            next({
                path: from.fullPath
            })
        }
    },
    {
        path: '/Pay',
        component: () => import('views/Pay/Pay.vue'),
        beforeEnter: (to, from, next) => {
            if (from.fullPath == '/Trade') {
                return next()
            }
            next({
                path: from.fullPath
            })
        }
    },
    {
        path: '/PaySuccess',
        component: () => import('views/PaySuccess/PaySuccess.vue')
        
    },
    {
        path: '/Center',
        component: () => import('../views/Center/Center.vue'),
        children: [
            {
                path: '/Center/',
                redirect: '/Center/myorder',
               
            },
            {
                path: '/Center/myorder',
                component: () => import('../views/Center/chilcomps/myorder.vue')
            },
            {
                path: '/Center/grpuporder',
                component: () => import('../views/Center/chilcomps/grpuporder.vue')
            }
        ]
    }

]

const router = new VueRouter({
    routes,
    mode: 'hash',
    scrollBehavior() {
        // 始终滚动到顶部
        return { y: 0 }
    },
 })
const routerarray = ['/PaySuccess', '/Center/myorder', '/Center/grpuporder', '/Pay', '/Trade']
router.beforeEach((to, from, next) => {
    //#region 
    /* if (to.fullPath === '/PaySuccess' || to.fullPath 
        === '/Center/myorder' || to.fullPath === '/Center/grpuporder' || to.fullPath ==='/Pay/:id'
        || to.fullPath === '/Trade') */ {
    //#endregion
        let topath = to.fullPath
        if (routerarray.indexOf(topath) !== -1) {
        if (localStorage.getItem('token')) {
            return next()
         } else {
            return next({
                path: '/login',
                query: {
                    redirect: topath
                }
            })
        }
    }
    next()
}

}) 

export default router