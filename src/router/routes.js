
const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue'), meta: { skeleton: true } },
      { path: 'cash', component: () => import('pages/Account.vue'), meta: { skeleton: true } },
      { path: 'wealth', component: () => import('pages/Wealth.vue'), meta: { skeleton: true } },
      { path: 'trade', component: () => import('pages/Trade.vue'), meta: { skeleton: true } }
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
