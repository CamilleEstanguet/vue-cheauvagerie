<template>
  <div class="container">
    <h1>Clients et chaudières</h1>
    <h2>Clients</h2>
    <ul>
      <li v-for="customer in customers.data" :key="customer.id">
        {{ customer.name }} {{ customer.firstName }}
      </li>
    </ul>
    <h2>Chaudières</h2>
    <ul>
      <li v-for="boiler in boilers.data" :key="boiler.id">
        {{ boiler.model }}
      </li>
    </ul>
  </div>
</template>

<script>
import api from "../api.js";

export default {
  data() {
    return {
      loading: false,
      customers: [],
      boilers: []
    };
  },
  mounted() {
    this.refreshCustomers();
    this.refreshBoilers();
  },
  methods: {
    refreshCustomers() {
      this.loading = true;
      api
        .get("customers")
        .then((response) => {
          this.customers = response.data;
        })
        .finally(() => {
          this.loading = false;
        });
    },
    refreshBoilers() {
      this.loading = true;
      api
        .get("boilers")
        .then((response) => {
          this.boilers = response.data;
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>
