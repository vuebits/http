import { Http } from './http';
import { App } from 'vue';
import { HttpOptions } from '../models';

export function install (Vue: App, config: HttpOptions): void {
  Vue.config.globalProperties.$http = new Http(config);
}

export { Http };
