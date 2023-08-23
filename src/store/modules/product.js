import axios from "axios";

const product = {
  namespaced: true,
  state: {
    productData: [],
  },
  getters: {
    getProduct: (state) => state.productData,
    //
    getProductBySlug: (state) => (productSlug) => {
        console.log("ProductSlug:", productSlug);
        console.log("ProductData:", state.productData);
        const product = state.productData.find((p) => p.slug == productSlug);
        console.log("Product:", product);
        return product;
  },
},
  actions: {
    async fetchProduct({ commit }) {
      try {
        const data = await axios.get("https://ecommerce.olipiskandar.com/api/v1/product/search");
        commit("SET_PRODUCT", data.data['products']['data']);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    //
    async fetchSingleProduct({ commit }, productSlug){
        try{
            const response = await axios.get(
                `https://ecommerce.olipiskandar.com/api/v1/product/details/${productSlug}`
            );
            commit("SET_SINGLE_PRODUCT", response.data['products']);
        }catch (error) {
            alert(error);
            console.log(error);
        }
    },
  },
  mutations: {
    SET_PRODUCT(state, product) {
      state.productData = product;
    },
    SET_SINGLE_PRODUCT(state, product) {
        state.singleProduct = product;
      },
  },
};

export default product;