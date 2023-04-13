<template>
    <h4>로그인 성공</h4>
    <p>
        {{ user }}님 반갑습니다.
        <a href="#" @click.prevent="logout">로그아웃</a>
    </p>
</template>
<script setup>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();
const router = useRouter();

const user = computed(() => { store.getters.getUser });

const logout = () => {
    localStorage.removeItem('accessToken');
    router.push("/jwt/login");
}

</script>
<style scoped></style>