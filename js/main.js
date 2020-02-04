// create a couple of components we can request and render
import SplashComponent from "./modules/SplashComponent.js";
import AppComponent from "./modules/AppComponent.js";
import ErrorComponent from "./modules/ErrorComponent.js";

// these are the same as Express routes -> router.get('/', ... do something with the request)
const routes = [
    { path: '/', name: 'splash', component: SplashComponent },
    { path: '/app', name: 'app', component: AppComponent },
    { path: '*', name: 'error', component: ErrorComponent }
]

const router = new VueRouter({
    routes // short for routes: routes
})

const vm = new Vue({
    data: {

    },

    methods: {

    },

    router
}).$mount("#app");