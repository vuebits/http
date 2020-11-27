<h1 align="center">Vue 3 http provider (based on Axios)</h1>

<h4 align="center">*** Maintainers & Contributors welcome ***</h4>

<h4 align="center">Simple implementation of <a href="https://github.com/axios/axios">axios</a> in Vue 3.x</h4>

---

## Table of Contents

* [Installation](#installation)
* [API](#api)
* [Examples](#examples)


## Installation

`npm i @vuebits/http` / `yarn add @vuebits/http`

And install in your entry file (e.g. `main.js`):

```javascript
import { createHttp } from '@vuebits/http';

createApp(App).use(createHttp({ /* your config here */ })).mount('#app');
```

## API

### Available functions:

* `createHttp (options: HttpOptions)`:

```ts
interface HttpOptions {
  baseURL?: string;
}
```

### Vue instance properties and methods:

* `$http`: `AxiosInstance`

To see full API documentation go to [axios](https://github.com/axios/axios) page.

## Examples

### GET request:

```vue
<template>
  <div>
    <h1>This is users page</h1>
    <table>
      <thead>
        <tr>
          <th>
            Avatar
          </th>
          <th>
            Last name
          </th>
          <th>
            First name
          </th>
          <th>
            Email
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="user in users"
          :key="user.id"
        >
          <td>
            <img :src="user.avatar">
          </td>
          <td>
            {{ user.first_name }}
          </td>
          <td>
            {{ user.last_name }}
          </td>
          <td>
            {{ user.email }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface User {
  avatar: string;
  email: string;
  first_name: string;
  id: number;
  last_name: string;
}

export default defineComponent({
  name: 'Users',
  data () {
    return {
      users: [] as User[]
    };
  },
  async created () {
    this.users = (await this.$http.get<User[]>('users')).data;
  }
});
</script>
```
