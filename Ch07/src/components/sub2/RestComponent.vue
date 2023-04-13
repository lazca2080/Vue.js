<template>
    <h4>Rest 실습</h4>
    <h4>GET</h4>
    <table border="1">
        <tr>
            <th>아이디</th>
            <th>이름</th>
            <th>휴대폰</th>
            <th>나이</th>
        </tr>
        <tr v-for="user in users">
            <td>{{ user.uid }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.hp }}</td>
            <td>{{ user.age }}</td>
        </tr>
    </table>

    <h4>POST</h4>
    <form v-on:submit.prevent="registerUser">
        <table border="1">
            <tr>
                <td>아이디</td>
                <td><input type="text" v-model="user.uid"></td>
            </tr>
            <tr>
                <td>이름</td>
                <td><input type="text" v-model="user.name"></td>
            </tr>
            <tr>
                <td>휴대폰</td>
                <td><input type="text" v-model="user.hp"></td>
            </tr>
            <tr>
                <td>나이</td>
                <td><input type="text" v-model="user.age"></td>
            </tr>
            <tr>
                <td colspan="2" align="right">
                    <input type="submit" value="등록" />
                </td>
            </tr>
        </table>
    </form>

    <h4>PUT</h4>
    <input type="text" v-model="inputText" />
    <button @click="btnGetUser">수정 데이터 출력</button>
    <form v-on:submit.prevent="modifyUser">
        <table border="1">
            <tr>
                <td>아이디</td>
                <td><input type="text" v-model="user.uid" readonly></td>
            </tr>
            <tr>
                <td>이름</td>
                <td><input type="text" v-model="user.name"></td>
            </tr>
            <tr>
                <td>휴대폰</td>
                <td><input type="text" v-model="user.hp"></td>
            </tr>
            <tr>
                <td>나이</td>
                <td><input type="text" v-model="user.age"></td>
            </tr>
            <tr>
                <td colspan="2" align="right">
                    <input type="submit" value="수정" />
                </td>
            </tr>
        </table>
    </form>

    <h4>DELETE</h4>
    <input type="text" v-model="inputText" />
    <button @click="btnDeleteUser">User 삭제</button>
</template>

<script setup>
import axios from "axios";
import { ref, reactive, onBeforeMount, computed } from "vue";

const inputText = ref(null);
const users = ref([]);
const user = reactive({
    uid: "",
    name: "",
    hp: "",
    age: 0,
});

onBeforeMount(() => {
    axios({
        url: "http://localhost:8080/Ch09/user1s",
        method: "get",
        responseType: "json"
    }).then((response) => {
        users.value = response.data;
    }).catch((error) => {
        console.log(error)
    });
});

const btnGetUser = async () => {
    try {
        const response = await axios.get(`http://localhost:8080/Ch09/user1/${inputText.value}`);

        user.uid = response.data.uid;
        user.name = response.data.name;
        user.hp = response.data.hp;
        user.age = response.data.age;

    } catch (error) {
        console.log(error)
    }
}

const registerUser = () => {

    axios.post("http://localhost:8080/Ch09/user1", user)
        .then((response) => {
            console.log(response.data.result);
            if (response.data.result = 1) {
                alert('입력 성공');
                users.value.push(user);
            } else {
                alert('입력 실패');
            }
        }).catch((error) => {
            console.log(error)
        });
}

const modifyUser = () => {
    axios.put("http://localhost:8080/Ch09/user1", user)
        .then((response) => {
            console.log(response);
            users.value = response.data;

        }).catch((error) => {
            console.log(error)
        });
}

const btnDeleteUser = () => {
    axios.delete(`http://localhost:8080/Ch09/user1/${inputText.value}`)
        .then((response) => {
            if (response.data != null) {
                alert('수정 성공');
                users.value = response.data;
            } else {
                alert('수정 실패');
            }

        }).catch((error) => {
            console.log(error);
        });
}

</script>

<style scoped></style>