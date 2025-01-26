import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductPageView from "../views/ProductPageView.vue";

const routes = [
    {
        path: "/my_paging",
        name: "home",
        component: HomeView,
        redirect: (to) => {
            return { name: "ProductPageView" };
        },
        children: [
            {
                path: "ProductPageView/:page?",
                name: "ProductPageView",
                component: ProductPageView,
                props: (route) => ({ page: Number(route.params.page) || 1 }),
            },
            {
                path: "/",
                redirect: {
                    name: "ProductPageView",
                    params: {
                        page: 1,
                    },
                },
            },
        ],
    },
];

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes,
});

export default router;
