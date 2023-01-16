
import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/Index.vue'

const sitesRouter: Array<RouteRecordRaw> = [

  {
    path: '/books',
    component: Layout,
    redirect: '/books/bookNav',
    meta: {
      title: 'books',
      icon: '#iconexcel'
    },
    children: [

      {
        path: 'bookNav',
        component: () => import('@/views/book/bookNav.vue'),
        name: 'bookNav',
        meta: { title: 'bookNav' }
      },
      {
        path: 'bookEdit',
        component: () => import('@/views/book/bookEdit.vue'),
        name: 'bookEdit',
        meta: { title: 'bookEdit' }
      }

    ]
  }
]

export default sitesRouter
