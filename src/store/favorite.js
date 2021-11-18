export default {
  namespaced: true,
  state: {
    favorites: [],
  },
  actions: {
    toggleFavorite({ commit }, payload) {
      (payload.status)
        ? commit("removeFavorite", payload.id)
        : commit("addFavorite", payload.id);
    }
  },
  mutations: {
    addFavorite: (state, payload) => state.favorites.push(payload),
    removeFavorite(state, payload) {
      state.favorites = state.favorites.filter(product => product !== payload);
    },
  }
};
