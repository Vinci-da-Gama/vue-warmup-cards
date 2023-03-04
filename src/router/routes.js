import HomeView from "../views/HomeView.vue";
import { routerRelated } from "../constants/routesRelated";

export const routes = [
  {
    ...routerRelated.home,
    component: HomeView,
  },
  {
    ...routerRelated.about,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/:notFound(.*)",
    component: () => import("../views/NoFound.vue"),
  },
];
