import { App } from 'vue';
import { install } from './library';
import { HttpOptions } from './models';

export function createHttp (options: HttpOptions): {install: (T: App) => void} {
  return {
    install: (app: App) => install(app, options)
  };
}
