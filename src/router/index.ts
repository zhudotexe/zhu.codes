import Home from '@/views/Home.vue'
import NotFound from '@/views/NotFound.vue'
import {nextTick} from "vue";
import {createRouter, createWebHistory} from 'vue-router'

const DEFAULT_TITLE = "zhu.codes";

const routes = [
    {path: '/', name: 'Home', component: Home},
    {
        path: '/paissa',
        name: 'PaissaViewer',
        component: () => import(/* webpackChunkName: "paissa" */ '../views/paissa/PaissaViewer.vue'),
        meta: {title: 'PaissaDB - zhu.codes'}
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound,
        meta: {title: '404 - zhu.codes'}
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})


router.afterEach((to) => {
    nextTick(() => {
        document.title = (to.meta.title as string) || DEFAULT_TITLE;
    });
});

export default router
