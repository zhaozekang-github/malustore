import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
    meta: {
      index: 1,
      isShow: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/Login.vue'),
    meta: {
      index: 1,
      isShow: false
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
    meta: {
      index: 2,
      isShow: false
    }
  },
  {
    path: '/category',
    name: 'category',
    component: () => import(/* webpackChunkName: "category" */ '@/views/Category.vue'),
    meta: {
      index: 1,
      isShow: true
    }
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import(/* webpackChunkName: "cart" */ '@/views/Cart.vue'),
    meta: {
      index: 1,
      isShow: true
    }
  },
  {
    path: '/user',
    name: 'user',
    component: () => import(/* webpackChunkName: "user" */ '@/views/User.vue'),
    meta: {
      index: 1,
      isShow: true
    }
  },
  {
    path: '/product/:id',
    name: 'product',
    component: () => import(/* webpackChunkName: "productname" */'@/views/ProductDetail'),
    meta: {
      index: 1,
      isShow: false
    }
  },
  {
    path: '/address',
    name: 'address',
    component: () => import(/* webpackChunkName: "address" */ '@/views/Address'),
    meta: {
      index: 2,
      isShow: false
    }
  },
  {
    path: '/address-edit',
    name: 'address-edit',
    component: () => import(/* webpackChunkName: "address-edit" */ '@/views/AddressEdit'),
    meta: {
      index: 2,
      isShow: false
    }
  },
  {
    path: '/setting',
    name: 'setting',
    component: () => import(/* webpackChunkName: "address-edit" */ '@/views/Setting'),
    meta: {
      index: 2,
      isShow: false
    }
  },
  {
    path: '/create-order',
    name: 'create-order',
    component: () => import(/* webpackChunkName: "Create-Order" */ '@/views/CreateOrder'),
    meta: {
      index: 2,
      isShow: false
    }
  },
  {
    path: '/order',
    name: 'order',
    component: () => import(/* webpackChunkName: "order" */ '@/views/Order'),
    meta: {
      index: 2,
      isShow: false
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
