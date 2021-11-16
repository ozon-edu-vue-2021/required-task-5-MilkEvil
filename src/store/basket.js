import Vue from "vue";

export default {
  namespaced: true,
  state: {
    products: {}
  },
  getters: {
    getCountProducts(state) {
      return Object.values(state.products).reduce((sum, count) => {
        return sum + +count;
      }, 0);
    }
  },
  actions: {
    addProduct: ({ commit }, id) => commit("addProduct", id),
    deleteProduct: ({ commit }, id) => commit("deleteProduct", id),
    clearBasket: ({ commit }) => commit("clearBasket"),
    changeCountProduct({ commit }, payload) {
      commit("changeCountProduct", payload);
    }
  },
  mutations: {
    addProduct(state, id) {
      state.products = { ...state.products, ...{ [id]: 1 } };
    },
    deleteProduct: (state, id) => Vue.delete(state.products, id),
    clearBasket: (state) => state.products = {},
    changeCountProduct(state, payload) {
      state.products[payload.id] = payload.count;
    },
  }
};
