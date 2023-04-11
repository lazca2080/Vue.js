<template>
  <h4>Ch04.Composition API 실습</h4>

  <h4>1) setup</h4>
  <Component1></Component1>
  <Component2 name="홍길동" age=21 addr="부산"></Component2>
  <Component3 v-on:myEvent="receiveUser"></Component3>
  <hr />

  <h4>2) reactivity</h4>
  <MyComponent1></MyComponent1>
  <hr />

  <h4>3) LifeCycle Hooks</h4>
  <HooksComponent v-if="isShow"></HooksComponent>
  <button @click="btnToggle">컴포넌트 {{ status }}</button>
  <hr />

  <h4>4) Dependancy Inject</h4>
  <DIComponent1></DIComponent1>
  <hr />
</template>

<script>
/**
 * 날짜 : 2023/04/06
 * 이름 : 박종협
 * 내용 : 
 */

import Component1 from './components/sub1/Component1.vue';
import Component2 from './components/sub1/Component2.vue';
import Component3 from './components/sub1/Component3.vue';
import MyComponent1 from './components/sub2/MyComponent1.vue';
import HooksComponent from './components/sub3/HooksComponent.vue';
import DIComponent1 from './components/sub4/DIComponent1.vue';
import { ref, reactive, provide } from "vue";

export default {
  name: "App",
  components: { Component1, Component2, Component3, MyComponent1, HooksComponent, DIComponent1 },
  setup() {

    const isShow = ref(true);
    const status = ref("삭제");

    const user1 = reactive({
      name: "홍길동",
      age: 21,
      addr: "부산광역시"
    });
    // 하위 모든 컴포넌트로 상태공유
    provide("user1", user1);

    const receiveUser = (data) => {
      console.log("receiveUser name : " + data.name)
      console.log("receiveUser age : " + data.age)
    }

    const btnToggle = () => {
      if (isShow.value) {
        isShow.value = false;
        status.value = "생성"
      } else {
        isShow.value = true;
        status.value = "삭제"
      }
    }

    return {
      receiveUser, isShow, btnToggle, status
    }
  }

}
</script>
