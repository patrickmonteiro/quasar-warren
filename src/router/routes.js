import Index from 'pages/Index.vue'
import Account from 'pages/Account.vue'
import Wealth from 'pages/Wealth.vue'
import Trade from 'pages/Trade.vue'
const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('pages/Login')
  },
  {
    path: '/app',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'dashboard', component: Index, meta: { skeleton: true } },
      { path: 'cash', name: 'cash', component: Account, meta: { skeleton: true } },
      { path: 'wealth', name: 'wealth', component: Wealth, meta: { skeleton: true } },
      { path: 'trade', name: 'trade', component: Trade, meta: { skeleton: true } }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
