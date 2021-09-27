<template>
  <div>
    <h1 class="display-1 text-center my-5">Dashboard</h1>

    <SalesGraph v-for="sale in sales" :key="`${sale.title}`" :sale="sale" />

    <EmployeesTable :employees="employees" @select-employee="setEmployee" />

    <v-snackbar v-model="snackbar" :timeout="timeout">
      You have selected {{ selectedEmployee.name }},
      {{ selectedEmployee.title }}
      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import SalesGraph from "../components/SalesGraph.vue";
import EmployeesTable from "../components/EmployeesTable.vue";

import salesData from "../data/sales.json";
import employeesData from "../data/employees.json";

export default {
  components: {
    SalesGraph,
    EmployeesTable,
  },
  data() {
    return {
      employees: employeesData,
      sales: salesData,
      snackbar: false,
      selectedEmployee: {},
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
    setEmployee(employee) {
      this.snackbar = true;
      this.selectedEmployee = {
        name: employee.name,
        title: employee.title,
      };
    },
  },
};
</script>

<style></style>
