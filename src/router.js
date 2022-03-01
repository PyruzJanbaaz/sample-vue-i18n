import { createWebHistory, createRouter } from "vue-router";
import Home from "@/view/Home";
import AboutUs from "@/view/AboutUs";
import ContactUs from "@/view/ContactUs";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        component: AboutUs,
    },
    {
        path: "/contact",
        name: "Contact",
        component: ContactUs,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;