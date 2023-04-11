<template>
    <h4>DIComponent2</h4>
    <p>
        App >> DIComponent2<br />
        name : {{ user1.name }}<br />
        age : {{ user1.age }}<br />
        addr : {{ user1.addr }}<br />
    </p>
    <p>
        DIComponent1 > DIComponent2<br />
        name : {{ user2.name }}<br />
        age : {{ user2.age }}<br />
        addr : {{ user2.addr }}<br />
    </p>
</template>

<script setup>
import { inject } from "vue";

const user1 = inject("user1");
const user2 = inject("user2");
sdfsdf
</script>

<style scoped></style>