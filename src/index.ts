import { App } from 'vue';
import { install, Http } from './library';
import { HttpOptions } from './models';

export function createHttp (options: HttpOptions): {install: (T: App) => void} {
  return {
    install: (app: App) => install(app, options)
  };
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $http: Http;
  }
}
