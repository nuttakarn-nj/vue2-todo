<template>
  <div class="login">
    <v-expansion-panels v-model="panel" multiple>
      <v-expansion-panel>
        <v-expansion-panel-header disable-icon-rotate>
          Item for test
          <template v-slot:actions>
            <v-btn @click="clearError">
              <v-icon color="error">mdi-close-box</v-icon>
            </v-btn>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel v-for="task in tasks" :key="task.ID">
        <v-expansion-panel-header>
          <h2>{{ task.text }}</h2>
          <template v-slot:actions>
            <v-icon color="primary"> $expand </v-icon>
            <v-icon color="error" @click="removeByID(task.ID)"
              >mdi-close-box</v-icon
            >
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <p>ID: {{ task.ID }}</p>
          <p>CreatedAt: {{ task.CreatedAt }}</p>
          <p>UpdatedAt:{{ task.UpdatedAt }}</p>
          <p>DeletedAtAt: {{ task.DeletedAtAt }}</p>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <v-btn depressed color="primary" @click="login"> LOGIN </v-btn>
    <v-btn depressed color="primary" @click="findAll"> GET ALL TASKS </v-btn>

    <h1>Panel: {{ panel }}</h1>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import { login, findAllTasks, removeTaskByID, ITask } from "../apiServices";

interface ITodo {
  panel: number[];
  token: string;
  error: string;
  tasks: ITask[];
}

const Component = Vue.extend({
  name: "Todo",
  data: (): ITodo => ({
    panel: [],
    token: "",
    tasks: [],
    error: "",
  }),
  methods: {
    // control panel
    clearError(): void {
      this.panel = []; // close all panel
    },
    async login(): Promise<void> {
      const result = await login();

      if (result.data) {
        this.token = result.data.token;
      } else {
        this.error = JSON.stringify(result.error);
        alert(`Error: ${this.error}`);
      }
    },
    async findAll(): Promise<void> {
      const result = await findAllTasks(this.token);

      if (result.data) {
        this.tasks = result.data.tasks;
      } else {
        this.error = JSON.stringify(result.error);
        alert(`Error: ${this.error}`);
      }
    },
    async removeByID(ID: number): Promise<void> {
      const result = await removeTaskByID({ ID, token: this.token });

      if (result.data?.success) {
        await this.findAll();
      } else {
        this.error = JSON.stringify(result.error);
        alert(`Error: ${this.error}`);
      }
    },
  },
});

export default Component;
</script>
