import { createApp } from 'vue';
import App from './App.vue';
import { createHttp } from '@/index';

createApp(App).use(createHttp({})).mount('#app');
