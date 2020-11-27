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
import { URI_USERS } from '../api/endpoints';

export interface User {
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
    this.users = (await this.$http.get<{data: User[]}>(URI_USERS)).data.data;
  }
});
</script>
