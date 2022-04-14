<template>
  <div class="container">
    <h1>Rapports</h1>
    <div class="display">
      <div class="card" v-for="callout in callouts.data" :key="callout.id">
        <div class="card-block">
          <h4 class="card-title">
            {{ callout.title }}
          </h4>
          <p class="card-text p-y-1">
            Réalisée par le technicien {{ callout.techId }}
          </p>
          <router-link :to="{ name: 'Rapport', params: { id: callouts.id } }">{{ callouts.title }}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../../api.js";

export default {
  data() {
    return {
      loading: false,
      callouts: [],
    };
  },
  mounted() {
    this.refreshCallOuts();
  },
  methods: {
    refreshCallOuts() {
      this.loading = true;
      api
        .get("callouts")
        .then((response) => {
          this.callouts = response.data;
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>
