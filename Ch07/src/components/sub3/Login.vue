<template>
    <h4>로그인</h4>
    <form v-on:submit.prevent="loginProc">
        <table border="1">
            <tr>
                <td>아이디</td>
                <td><input type="text" v-model="user.uid" /></td>
            </tr>
            <tr>
                <td>비밀번호</td>
                <td><input type="password" v-model="user.pass" /></td>
            </tr>
            <tr>
                <td colspan="2" align="right">
                    <input type="submit" value="로그인" />
                </td>
            </tr>
        </table>
    </form>
</template>

<script setup>
import axios from 'axios';
import { reactive, onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore();
const router = useRouter();

const user = reactive({
    uid: "",
    pass: ""
})

const loginProc = () => {
    store.dispatch("login", user);

    router.push("/jwt/loginSuccess");
}

</script>

<style scoped></style>