<template>
    <h4>computed</h4>
    <input type="number" v-model="price"/>원 <input type="number" v-model="count"/>개
    <p>전체금액 : {{ totPrice }}</p>

    <p>20자 이내로 입력하세요.</p>
    <textarea v-model="message" cols="30" rows="10"></textarea>
    <p>입력 글자 수 : {{ countText }}</p>
    <p v-bind:class="calcColor">남은 글자 수 : {{ 20-countText }}</p>
</template>

<script>
export default {
    name : "ApiComponent3",
    data() {
        return {
            price : 1000,
            count : 1,
            message : '',
            myColor : 'green',
        }
    },
    // 컴포넌트의 상태값이 업데이트 되면 자동으로 계산된 결과를 출력
    computed: {
        totPrice : function () {
            return this.price * this.count
        },
        countText() {
            return this.message.length
        },
        calcColor() {
            if( 20 - this.message.length < 20 ) {
                this.myColor = 'green'
            }
            if( 20 - this.message.length < 15 ) {
                this.myColor = 'orange'
            }
            if( 20 - this.message.length < 5 ) {
                this.myColor = 'red'
            }
            return this.myColor
        }
    },
    methods: {
        
    },
}
</script>

<style scoped>
    .red { color: red; }
    .orange { color: orange; }
    .green { color: green; }
</style>