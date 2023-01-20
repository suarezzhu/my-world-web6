
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/Index.vue'
debugger
const constantFiles = require["context"]('./constantModules', true, /\.ts$/)
let constantModules: Array<RouteRecordRaw> = []
constantFiles.keys().forEach((key) => {
  if (key === './index.ts') return
  constantModules = constantModules.concat(constantFiles(key).default)
})

const asyncFiles = require["context"]('./newPermissionMoudles', true, /\.ts$/)
// const asyncFiles = require.context('./permissionModules', true, /\.ts$/)
let permissionModules: Array<RouteRecordRaw> = []
asyncFiles.keys().forEach((key) => {
  if (key === './index.ts') return
  permissionModules = permissionModules.concat(asyncFiles(key).default)
})

export const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: '/redirect',
    component: Layout,
    meta: { hidden: true },
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/view/redirect/Index.vue')
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/view/dashboard/Index.vue'),
        name: 'Dashboard',
        meta: {
          title: 'dashboard',
          icon: '#icondashboard',
          affix: true
        }
      }
    ]
  },
  ...constantModules
]
debugger
export const asyncRoutes: Array<RouteRecordRaw> = [
  ...permissionModules
]
const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes
})

export function resetRouter() {
  const newRouter = router;
  (router as any).matcher = (newRouter as any).matcher // reset router
}

export default router
