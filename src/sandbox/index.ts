import { createApp } from 'vue';
import App from './App.vue';
import { createHttp } from '@/index';
import { apiURL } from './api/config';

createApp(App).use(createHttp({ baseURL: apiURL })).mount('#app');
