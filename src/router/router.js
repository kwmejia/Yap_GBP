
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: '/', component: () => import("@/components/ContentsComponent.vue") },
  { path: '/estadisticas', component: () => import("@/components/SeeMoreComponent.vue") },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;