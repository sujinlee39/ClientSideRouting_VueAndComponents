// create a couple of components we can request and render
let SplashComponent = {
    template: `<h1>Welcom to my Super Awesome App!</h1>`
};

let AppComponent = {
    template: `<h1>This is the app page</h1>`
};

let ErrorComponent = {
    template: `<h1>That page doesn't exist!</h1>`
}

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