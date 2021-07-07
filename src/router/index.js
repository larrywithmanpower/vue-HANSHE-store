import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  // fronted
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
          {
            path: 'cart',
            name: '購物車',
            component: () => import('../views/fronted/Cart.vue'),
          },
        ],
      },
    ],
  },
  // admin
  {
    path: '/admin',
    name: '後台',
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: 'adminProducts',
        name: 'AdminProducts',
        component: () => import('../views/admin/Products.vue'),
      },
      {
        path: 'order',
        name: 'Order',
        component: () => import('../views/admin/Order.vue'),
      },
      {
        path: 'coupon',
        name: 'Coupon',
        component: () => import('../views/admin/Coupon.vue'),
      },
      {
        path: 'article',
        name: 'Article',
        component: () => import('../views/admin/Article.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/NotFound.vue'),
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
