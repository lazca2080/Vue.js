<template>
    <li>{{ city }}</li>
    <li v-for="c in cities">{{ c }}</li>
</template>

<script>
export default {
    name : 'UComponent2',
    props : [ "city", "cities" ],
}
</script>
<style scoped>
    
</style>