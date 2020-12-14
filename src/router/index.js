import {createRouter, createWebHistory} from 'vue-router'
//import EventList from '../views/EventList.vue'
//import About from '../views/About.vue'
import FeatureView from "@/views/FeatureView";

const routes = [
    {
        path: '/',
        name: 'FeatureView',
        component: FeatureView
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
