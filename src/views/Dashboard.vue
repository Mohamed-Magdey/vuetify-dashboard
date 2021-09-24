<template>
  <v-container>
    <h1 class="display-1 text-center my-5">Dashboard</h1>
    <v-data-table
      :headers="headers"
      :items="employees"
      :items-per-page="5"
      class="elevation-1"
      multi-sort
      @click:row="selectRow"
    ></v-data-table>
    <v-snackbar v-model="snackbar" :timeout="timeout">
      You have selected {{ currentItem.name }}, {{ currentItem.title }}

      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
import employeesData from "../data/employees.json";

export default {
  data() {
    return {
      employees: employeesData,
      snackbar: false,
      currentItem: {},
      timeout: 2000,
    };
  },
  computed: {
    headers() {
      return [
        {
          text: "Employee ID",
          align: "start",
          sortable: false,
          value: "id",
        },
        { text: "Name", value: "name" },
        { text: "Title", value: "title" },
        { text: "Salary", value: "salary" },
      ];
    },
  },
  methods: {
    selectRow(event) {
      this.snackbar = true;
      this.currentItem = {
        name: event.name,
        title: event.title,
      };
    },
  },
};
</script>

<style></style>
