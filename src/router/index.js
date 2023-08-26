import { createWebHistory, createRouter} from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue"
import Product from "../views/Product.vue"
import Cart from "../views/Cart.vue"
import Checkout from "../views/Checkout.vue"
import Contact from "../views/Contact.vue"
import Navbar from "../components/Navbar.vue"
import Brand from "../views/Brand.vue"
import Kategori from "../views/Kategori.vue"
import SingleProduct from "../views/SingleProduct.vue"
import Profile from "../views/Profile.vue"

const routes = [
    {
        path: "/navbar",
        name: "Navbar",
        component:Navbar,
    },
    {
        path: "/",
        name: "Home",
        component:Home,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/product",
        name: "Product",
        component:Product,
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
        meta: { requiresGuest : false},
    },
    {
        path: "/cart",
        name: "Cart",
        component: Cart,
        meta: { requiresLogin: false },
      },
    {
        path: "/checkout",
        name: "Checkout",
        component: Checkout
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact
    },
    {
        path: "/brand",
        name: "Brand",
        component: Brand
    },
    {
        path: "/kategori",
        name: "Kategori",
        component: Kategori
    },
    {
        path: "/product/:slug",
        name: "SingleProduct",
        component: SingleProduct,
        props: true
    },
    {
        path: "/profile",
        name: "Profile",
        component: Profile,
        beforeEnter: cekToken,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.meta.requiresGuest && store.getters["auth/isAuthenticated"]) {
        next("/");
    } else{
        next();
    }
})

router.beforeEach((to, from, next) => {
    if (to.meta.requiresLogin && !store.getters["auth/isAuthenticated"]) {
        next("/login");
    } else{
        next();
    }
})
function cekToken(to, from, next) {
    var isAuthenticated = false;
    if (localStorage.getItem("token")) isAuthenticated = true;
    else isAuthenticated = false;
    if (isAuthenticated) {
      next();
    } else {
      next("/login");
    }
  }

export default router;