<template>
  <div class="container">
    <h1>Clients et chaudières</h1>
    <div class="display">
      <h2>Clients</h2>
      <div class="card" v-for="customer in customers.data" :key="customer.id">
        <div class="card-block">
          <h4 class="card-title">
            {{ customer.name }} {{ customer.firstName }}
          </h4>
          <p class="card-text p-y-1">Giga chaudière :</p>
        </div>
      </div>
      <router-link to="/customers/new-customer" class="btn btn-primary">Créer un nouveau Client</router-link>
    </div>
    <div class="display">
      <h2>Chaudières</h2>
      <div class="card" v-for="boiler in boilers.data" :key="boiler.id">
        <div class="card-block">
          <h4 class="card-title">
            {{ boiler.model }}, {{ boiler.brand }}
          </h4>
          <p class="card-text p-y-1">{{ boiler.serialNumber }}</p>
        </div>
      </div>
      <router-link to="/customers/new-boiler" class="btn btn-primary">Créer une nouvelle chaudière</router-link>
    </div>
  </div>
</template>

<script>
import api from "../../api.js";

export default {
  data() {
    return {
      loading: false,
      customers: [],
      client: {
        name: "",
        firstName: "",
        adress: "",
      },
      boilers: [],
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
