import { createStore } from "vuex";
import transaksi from "./modules/transaksi";
import auth from "./modules/auth";
import brand from "./modules/brand";
import kategori from "./modules/kategori"
import product from "./modules/product";
import user from "./modules/user"

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
        user
    }
})
export default store;