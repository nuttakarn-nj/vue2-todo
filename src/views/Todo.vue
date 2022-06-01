<template>
  <div class="login">
    <v-row>
      <v-col cols="12" sm="6" md="3">
        <v-text-field label="New task" outlined v-model="input"></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-btn depressed color="primary" @click="create"> Create </v-btn>
      </v-col>
    </v-row>

    <v-expansion-panels v-model="panel" multiple>
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
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import {
  findAllTasks,
  removeTaskByID,
  createTask,
  ITask,
} from "../apiServices";

interface ITodo {
  token: string;
  error: string;
  tasks: ITask[];
  input: string;
}

const Component = Vue.extend({
  name: "Todo",
  data: (): ITodo => ({
    token: "",
    tasks: [],
    error: "",
    input: "",
  }),
  // Note: beforeCreate can not access data this.xxxx
  created(): void {
    this.token = this.$route.params.token;
    console.log("beforeCreate: ", "keep token");

    if (!this.token) {
      this.$router.push({
        name: "Login",
      });
    } else {
      this.findAll();
    }
  },
  methods: {
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
    async create(): Promise<void> {
      const result = await createTask({
        taskName: this.input,
        token: this.token,
      });

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
