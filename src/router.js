import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/config",
      name: "config",
      component: () => import("./views/Config.vue")
    },
    {
      path: "/level-menu",
      name: "level-menu",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("./views/LevelMenu.vue")
    },
    {
      path: "/console",
      name: "console",
      component: () => import("./views/Console.vue")
    },
    {
      // will match everything
      path: "*",
      name: "404"
    }
  ]
});
