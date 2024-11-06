import type { RouteRecordRaw } from 'vue-router'
import AddView from './views/AddView.vue'
import ListView from './views/ListView.vue'

export const stockRoute: RouteRecordRaw[] = [
  {
    path: '/stock',
    name: 'stock',
    children: [
      {
        path: '',
        name: 'stock-list',
        component: ListView,
      },
      {
        path: 'add',
        name: 'stock-add',
        component: AddView,
      },
    ],
  },
]
