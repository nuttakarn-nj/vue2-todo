<template>
  <div class="login">
    <v-expansion-panels v-model="panel" multiple>
      <h1>{{ panel }}</h1>
      <v-expansion-panel>
        <v-expansion-panel-header>
          Item 1
          <template v-slot:actions>
            <v-icon color="primary"> $expand </v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header disable-icon-rotate>
          Item 2
          <template v-slot:actions>
            <v-icon color="teal"> mdi-check </v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header disable-icon-rotate>
          Item 3
          <template v-slot:actions>
            <v-button @click="clearError">
              <v-icon color="error">mdi-close-box</v-icon>
            </v-button>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";

interface ITodo {
  test: string;
  panel: number[];
}

const Component = Vue.extend({
  name: "Todo",
  data: (): ITodo => ({
    test: "",
    panel: [],
  }),
  methods: {
    // remove fn
    clearError(): void {
      this.test = "ddd";
      this.panel = []; // close all panel
      // alert("wthhh!!");
    },
  },
});

export default Component;
</script>
