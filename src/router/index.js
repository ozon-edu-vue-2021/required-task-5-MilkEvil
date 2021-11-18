import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Catalog",
    component: () => import("@/components/catalog/CatalogList")
  },
  {
    path: "/basket",
    name: "Basket",
    component: () => import("@/components/basket/BasketMain")
  },
  {
    path: "/favorite",
    name: "Favorite",
    component: () => import("@/components/favorite/FavoriteMain")
  },
  {
    path: "/404",
    name: "404",
    component: {
      render: (h) => h("h1", [ "Страницы не существует" ])
    }
  },
  {
    path: "*",
    redirect: "/404"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  linkActiveClass: "active",
  routes
});

export default router;
