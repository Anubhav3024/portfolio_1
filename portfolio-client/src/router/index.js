import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Login from "../pages/Login.vue";
import AdminDashboard from "../pages/AdminDashboard.vue";
import { useAuthStore } from "../store/authStore";

const routes = [
  { path: "/", component: Home },
  { path: "/admin/login", component: Login },
  {
    path: "/admin",
    component: AdminDashboard,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) return { el: to.hash, behavior: "smooth" };
    return savedPosition || { top: 0 };
  },
});

router.beforeEach((to, from, next) => {
  const auth = useAuthStore();
  if (to.meta.requiresAuth && !auth.isAuthenticated) {
    next("/admin/login");
  } else {
    next();
  }
});

export default router;
