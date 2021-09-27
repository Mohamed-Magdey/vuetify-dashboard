<template>
  <v-container>
    <h1 class="display-1 text-center my-5">Dashboard</h1>

    <v-row>
      <v-col v-for="sale in sales" :key="`${sale.title}`">
        <SalesGraph :sale="sale" />
      </v-col>
    </v-row>

    <v-row>
      <v-col v-for="statistic in statistics" :key="`${statistic.title}`">
        <StatisticCard :statistic="statistic" />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="8">
        <EmployeesTable :employees="employees" @select-employee="setEmployee" />
      </v-col>
      <v-col cols="4">
        <EventTimeline :timeline="timeline" />
      </v-col>
    </v-row>

    <v-snackbar v-model="snackbar" :timeout="timeout">
      You have selected {{ selectedEmployee.name }},
      {{ selectedEmployee.title }}
      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
import SalesGraph from "../components/SalesGraph.vue";
import StatisticCard from "../components/StatisticCard.vue";
import EmployeesTable from "../components/EmployeesTable.vue";
import EventTimeline from "../components/EventTimeline.vue";

import salesData from "../data/sales.json";
import statisticsData from "../data/statistics.json";
import employeesData from "../data/employees.json";
import timelineData from "../data/timeline.json";

export default {
  components: {
    SalesGraph,
    StatisticCard,
    EmployeesTable,
    EventTimeline,
  },
  data() {
    return {
      employees: employeesData,
      sales: salesData,
      statistics: statisticsData,
      timeline: timelineData,
      snackbar: false,
      selectedEmployee: {},
      timeout: 2000,
    };
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
