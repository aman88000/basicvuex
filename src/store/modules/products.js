import axios from "axios";
const state = {
  products: [],
};

const getters = {
  allProducts: (state) => state.products,
};

const actions = {
  async getProducts({ commit }) {
    const response = await axios.get("http://localhost:3000/products");
    commit("setProducts", response.data);
  },

  async addProduct({ commit }, product) {
    const response = await axios.post(
      "http://localhost:3000/products",
      product
    );
    commit("addProduct", response.data);
  },

  async deleteProduct({ commit }, id) {
    await axios.delete(`http://localhost:3000/products/${id}`);
    commit("removeProduct", id);
    //console.log("res", response);
  },
};

const mutations = {
  setProducts: (state, products) => (state.products = products),
  addProduct: (state, product) => state.products.push(product),
  removeProduct: (state, id) =>
    state.products.filter((product) => product.id !== id),
};

export default {
  state,
  getters,
  mutations,
  actions,
};
