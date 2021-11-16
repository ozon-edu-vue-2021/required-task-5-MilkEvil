import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import catalog from "@/store/catalog";
import basket from "@/store/basket";
import favorite from "@/store/favorite";

const store = new Vuex.Store({
  strict: true,
  modules: {
    catalog,
    basket,
    favorite
  }
});

export default store;
