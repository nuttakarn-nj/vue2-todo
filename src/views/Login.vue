<template>
  <div class="login">
    <h1>Login</h1>
    <form @submit.prevent="submit">
      <v-text-field
        label="Username"
        outlined
        v-model.trim="input.username"
      ></v-text-field>

      <v-text-field
        label="Password"
        outlined
        v-model.trim="input.password"
      ></v-text-field>

      <v-btn depressed color="primary" @click="login"> Login </v-btn>
    </form>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";

import { login } from "../apiServices";

interface ILogin {
  token: string;
  error: string;
  input: {
    username: string;
    password: string;
  };
}

const Component = Vue.extend({
  name: "Login",
  data: (): ILogin => ({
    token: "",
    error: "",
    input: {
      username: "",
      password: "",
    },
  }),
  methods: {
    async login(): Promise<void> {
      const result = await login();

      if (result.data) {
        this.token = result.data.token;

        this.$router.push({
          name: "Todo",
          params: {
            token: this.token,
          },
        });
      } else {
        this.error = JSON.stringify(result.error);
        alert(`Error: ${this.error}`);
      }
    },
  },
});

export default Component;
</script>
