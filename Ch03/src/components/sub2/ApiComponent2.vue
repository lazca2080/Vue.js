<template>
    <h4>method</h4>
    <button @click="btn1Click">button1</button>
    <button @click="btn2Click">button2</button>
    <button @click="btn3Click">button3</button>
</template>

<script>

export default {
    name : 'ApiComponent2',
    methods : {
        btn1Click() {
            alert('button1 click!');
        },
        btn2Click() {
            alert('button2 click!');
        },
        btn3Click() {
            alert('button3 click!');
        },
    }
}
</script>

<style scoped>
    
</style>