<template>
  <div class="container">
    <h1>Clients et chaudières</h1>
    <ul>
      <li v-for="customer in customers" :key="customer.id">{{ customer.name }}</li>
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
    };
  },
  mounted() {
    this.refreshDoodles();
  },
  methods: {
    refreshDoodles() {
      this.loading = true;
      api
        .get("customer")
        .then((response) => {
          this.customers = response.data;
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>
