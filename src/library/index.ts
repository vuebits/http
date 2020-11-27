import { Http } from './http';
import { App } from 'vue';
import { HttpOptions } from '../models';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $http: Http;
  }
}

export function install (Vue: App, { baseURL }: HttpOptions): void {
  Vue.config.globalProperties.$http = new Http({
    baseURL
  });
}
