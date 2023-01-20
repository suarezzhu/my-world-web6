
import { RouteRecordRaw } from 'vue-router'
const UserManagerRouter: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "userManager" */'@/view/user-manager/login/Index.vue')
  }
]
export default UserManagerRouter
