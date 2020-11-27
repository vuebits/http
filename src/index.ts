import { App } from 'vue';
import { install } from './library';

export function createApi (): {install: (T: App) => void} {
  return {
    install: (): void => install()
  };
}
