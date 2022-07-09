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
const login = (resolve) => {
  import('../views/login').then((module) => {
    resolve(module)
  })
}
const Detail = (resolve) => {
  import('../views/detail/Detail').then((module) => {
    resolve(module)
  })
}
const business = (resolve) => {
  import('../views/detail/business').then((module) => {
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
  import('../views/user/user').then((module) => {
    resolve(module)
  })
}
const userDetail = (resolve) => {
  import('../views/user/userDetail').then((module) => {
    resolve(module)
  })
}
const userPay = (resolve) => {
  import('../views/user/userPay').then((module) => {
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
      },
      {
        path: 'business/:id',
        component: business
      }
    ]
  },
  { path: '/login',component: login,},
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
      },
      {
        path: 'userPay/',
        component:userPay
      }
    ]
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  // 如果访问登录放行
  if (to.path === '/login'){
    return next()
  }
  //获取当前登录状态
  // console.log("token", sessionStorage.getItem("token"))
  const token = localStorage.getItem('token');
  // console.log(!token)
  //3.如果方位的是其他路由 判断是否已经登录
  //如果已经登陆 放行，没登陆 强制跳转登录
  if (!token){
    return next('/login')
  }
  return next()
})
export default router
