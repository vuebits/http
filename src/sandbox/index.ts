import { createApp } from 'vue';
import App from './App.vue';
import { createApi } from '@/index';

createApp(App).use(createApi()).mount('#app');
