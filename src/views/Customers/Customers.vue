<template>
  <div class="container">
    <h1>Chaudières enregistrées</h1>
    <br />
    <div class="display">
      <h2>Chaudières</h2>
      <div class="card" v-for="boiler in boilers.data" :key="boiler.id">
        <div class="card-block">
          <h4 class="card-title">
            {{ boiler.attributes.model }}, {{ boiler.attributes.brand }}
          </h4>
          <p class="card-text p-y-1">
            Numéro de série : {{ boiler.attributes.serialNumber }}
          </p>
          <p class="card-text p-y-1">
            Année de mise en service : {{ boiler.attributes.startDate }}
          </p>
          <p class="card-text p-y-1">
            Appartenant au client :
            {{ boiler.attributes.customer.data.attributes.firstName }}
            {{ boiler.attributes.customer.data.attributes.name }}
          </p>
        </div>
      </div>
      <router-link to="/customers/new-boiler" class="btn btn-primary"
        >Créer une nouvelle chaudière</router-link
      >
    </div>
    <br />
    <br />
    <div class="display">
      <h2>Liste des clients</h2>
      <div class="card" v-for="customer in customers.data" :key="customer.id">
        <div class="card-block">
          <h4 class="card-title">
            {{ customer.attributes.name }} {{ customer.attributes.firstName }}
          </h4>
          <p class="card-text p-y-1">Adresse : {{ customer.attributes.address }}</p>
        </div>
      </div>
      <router-link to="/customers/new-customer" class="btn btn-primary"
        >Créer un nouveau Client</router-link
      >
    </div>
  </div>
</template>

<script>
import api from "../../api.js"

export default {
  data() {
    return {
      loading: false,
      customers: {},
      boilers: {},
    }
  },
  mounted() {
    this.refresh()
  },
  methods: {
    refresh() {
      this.loading = true
      api.get("boilers?populate=*").then((response) => {
        this.boilers = response.data
      })
      api
        .get("customers")
        .then((response) => {
          this.customers = response.data
        })
        .finally(() => {
          this.loading = false
        })
    },
  },
}
</script>

<style>
.btn-primary {
  margin-top: 3px;
}
.card {
  margin-top: 1px;
}
</style>
