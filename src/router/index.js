import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('../views/Layout.vue'),
    // ! 使用redeirect讓首頁不會一直被active
    redirect: { name: 'Home' },
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('../views/fronted/Home.vue'),
      },
      {
        path: 'about',
        name: '關於寒舍',
        component: () => import('../views/fronted/About.vue'),
      },
      {
        path: 'products',
        name: 'Products',
        component: () => import('../views/fronted/Products.vue'),
        children: [
          {
            path: 'category',
            name: '寒舍商品',
            component: () => import('../views/fronted/Category.vue'),
          },
          {
            path: 'product/:id',
            name: '商品細節',
            component: () => import('../views/fronted/SingleProduct.vue'),
          },
        ],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active',
  scrollBehavior() {
    // 始终滚动到顶部
    return { top: 0 };
  },
});

export default router;
