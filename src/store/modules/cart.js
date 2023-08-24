import axios from "axios";

const cart = {
    namespaced: true,
    state: {
        cartData: [],
    },

    getters: {
        detCart: (state) => state.cartData,
    },
    actions: {
        async fetchCart ({commit}) {
            try {
                const dataCart = await axios.post(
                    "https://ecommerce.olipiskandar.com/api/v1/carts",
                    {
                        temp_user_id: null
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("token")}`,
                        }
                    },
                );
                console.log(dataCart.data["cart_items"]);
                commit("SET_CART", dataCart.data["cart_items"]);
            } catch (error) {
                alert(error);
                console.log(error)
            }
        }
    },
    mutations: {
        SET_CART(state, cart) {
            state.cartData = cart;
        },
    },
};

export default cart;