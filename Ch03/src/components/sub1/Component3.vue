<template>
    <h4>Component3</h4>
    <p>사용자 정의 컴포넌트</p>
    <Component4></Component4>
</template>
<script>
import Component4 from './Component4.vue';

export default {
    name: "Component3",
    components: { Component4 }
}
</script>

<style scoped>
    h4 { color: green; }
</style>