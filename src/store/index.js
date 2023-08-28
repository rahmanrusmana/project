import { createStore } from "vuex";
import transaksi from "./modules/transaksi";
import auth from "./modules/auth";
import brand from "./modules/brand";
import kategori from "./modules/kategori"
import product from "./modules/product";
import user from "./modules/user";
import cart from "./modules/cart";
import order from "./modules/order";

const store = createStore({
    state: {
        isLoading:false
    },
    modules:{
        transaksi,
        auth,
        brand,
        kategori,
        product,
        user,
        cart,
        order
    }
})
export default store;