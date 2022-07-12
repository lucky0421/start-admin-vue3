import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const constantRoute: RouteRecordRaw[] = [
  {
    path: "/login",
    name: "Login",
    meta: {
      title: "登录",
    },
    component: () => import("../views/sys/login/index.vue"),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes: constantRoute,
});
export default router;
