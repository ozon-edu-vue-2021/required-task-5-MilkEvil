import { getProducts } from "@/api";

const images = require.context("@/assets/images/", true, /\.webp$/);

export default {
  namespaced: true,
  state: {
    products: [],
    imageList: [],
  },
  actions: {
    getProducts({ state, commit }) {
      return getProducts()
        .then(response => {
          if (response.status !== 200)
            return Promise.reject();

          return response;
        })
        .then(response => {
          commit("setImages", images);

          const products = response.data.map(product => {
            product.image = state.imageList[Math.round(Math.random() * (state.imageList.length - 1))];
            product.price = Math.round(Math.random() * 50) + 50;

            return product;
          });

          commit("setProducts", products);

          return true;
        })
        .catch(() => false);
    },
  },
  mutations: {
    setImages(state, images) {
      images.keys().forEach((key) => state.imageList.push(images(key)));
    },
    setProducts: (state, products) => state.products = products,
  }
};
