// config/routes.ts

export default [
  {
    exact: true,
    path: '/',
    component: '@/layouts/index',
    routes: [
      { path: '/', component: '@/pages/index' }
    ],
  },
];