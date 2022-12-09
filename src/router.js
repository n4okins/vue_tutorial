import Vue from 'vue';
import Router from 'vue-router';

import HomePage from "@/views/HomePage";
import SecondPage from "@/views/SecondPage";
import ThirdPage from "@/views/ThirdPage";

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage

        },
        {
            path: '/second',
            name: 'second',
            component: SecondPage
        },
        {
            path: '/third',
            name: 'third',
            component: ThirdPage
        }
    ]
})