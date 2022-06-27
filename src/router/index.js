import Vue from 'vue'
import VueRouter from 'vue-router'
// import home from '../views/home'
// import fullTime from '../views/fullTime'
// import partTime from '../views/partTime'
// import user from '../views/user'

const home = (resolve) => {
  import('../views/home').then((module) => {
    resolve(module)
  })
}
const Detail = (resolve) => {
  import('../views/Detail').then((module) => {
    resolve(module)
  })
}
const fullTime = (resolve) => {
  import('../views/fullTime').then((module) => {
    resolve(module)
  })
}
const partTime = (resolve) => {
  import('../views/partTime/partTime').then((module) => {
    resolve(module)
  })
}
const partTimeProcess = (resolve) => {
  import('../views/partTime/partTimeProcess').then((module) => {
    resolve(module)
  })
}
const user = (resolve) => {
  import('../views/user').then((module) => {
    resolve(module)
  })
}
const userDetail = (resolve) => {
  import('../views/user/userDetail').then((module) => {
    resolve(module)
  })
}
Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home' },
  {
    path: '/home',
    component: home,
    children: [
      {
        path: 'detail/:id',
        component: Detail
      }
    ]
  },
  { path: '/fullTime', component: fullTime },
  { path: '/partTime',
    component: partTime,
    children: [

  ]
  },
  {
    path: '/user',
    component: user,
    children: [
      {
        path: 'userDetail/',
        component: userDetail
      },
      {
        path: 'partTimeProcess/',
        component:partTimeProcess
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
