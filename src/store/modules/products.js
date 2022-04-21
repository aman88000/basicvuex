const state = {
  products: [
    {
      id: 1,
      title: "A",
      Des: "AAAAAAAAAA",
    },
    {
      id: 2,
      title: "B",
      Des: "BBBBBBBBBBB",
    },
    {
      id: 3,
      title: "C",
      Des: "CCCCCCCCCCCC",
    },
  ],
};

const getters = {
  allProducts: (state) => state.products,
};

const mutations = {};

const actions = {};

export default {
  state,
  getters,
  mutations,
  actions,
};
