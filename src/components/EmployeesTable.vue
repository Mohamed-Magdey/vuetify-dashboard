<template>
  <v-data-table
    :headers="headers"
    :items="employees"
    :items-per-page="5"
    class="elevation-1"
    multi-sort
    @click:row="selectRow"
  ></v-data-table>
</template>

<script>
export default {
  props: {
    employees: {
      type: Array,
      required: true,
    },
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
      const employee = {
        name: event.name,
        title: event.title,
      };

      this.$emit("select-employee", employee);
    },
  },
};
</script>

<style></style>
