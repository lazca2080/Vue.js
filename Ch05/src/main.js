import { createApp } from 'vue'
import App from './App.vue'
import router from './routers/index.js';


const app = createApp(App);

// Router 등록
app.use(router);

app.mount('#app');

