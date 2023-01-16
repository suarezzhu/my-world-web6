
import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/Index.vue'

const sitesRouter: Array<RouteRecordRaw> = [

  {
    path: '/sites',
    component: Layout,
    redirect: '/sites/company',
    meta: {
      title: 'siteNav',
      icon: '#iconexcel'
    },
    children: [

      {
        path: 'company',
        component: () => import('@/view/sites/company.vue'),
        name: 'companySite',
        meta: { title: 'companySite' }
      },
      {
        path: 'favourite',
        component: () => import('@/view/sites/favourite.vue'),
        name: 'favourite',
        meta: { title: 'favouriteSite' }
      },
      {
        path: 'edit',
        component: () => import('@/view/sites/edit.vue'),
        name: 'edit',
        meta: { title: 'edit' }
      }
    ]
  }
]

export default sitesRouter
