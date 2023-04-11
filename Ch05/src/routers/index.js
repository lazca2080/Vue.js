/**
 * Router 모듈파일 정의
 */

import { createRouter, createWebHistory } from "vue-router";
import Hello from "../components/sub1/Hello.vue";
import Welcome from "../components/sub1/Welcome.vue";
import Greeting from "../components/sub1/Greeting.vue";

// Router 인스턴스 생성
const router = createRouter({
    history: createWebHistory(),
    routes: [ 
        {path: "/hello", name:"Hello", component: Hello},
        {path: "/welcome", name:"Welcome", component: Welcome},
        {path: "/greeting", name:"Greeting", component: Greeting},
    ],
});

// Router 인스턴스 내보내기
export default router;
