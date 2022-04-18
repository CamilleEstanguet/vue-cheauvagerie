<template>
  <div class="container">
  <i v-if="loading" class="fas fa-spinner fa-pulse"></i>
    <h1>Rapport</h1>
    <div class="display">
      <div class="card">
        <div class="card-block">
          <h4 class="card-title">Technicien en charge :</h4>
          <p class="card-text p-y-1">{{ this.technician.firstName }} {{ this.technician.name }}</p>
        </div>
      </div>
      <div class="card">
        <div class="card-block">
          <h4 class="card-title">Client :</h4>
          <p class="card-text p-y-1">
            Nom et Prénom : {{ this.customer.firstName }} {{ this.customer.name }}
          </p>
          <p class="card-text p-y-1">Adresse : {{ this.customer.address }}</p>
        </div>
      </div>
      <div class="card">
        <div class="card-block">
          <h4 class="card-title">Chaudière :</h4>
          <p class="card-text p-y-1">Marque : {{ this.boiler.brand }}</p>
          <p class="card-text p-y-1">Modèle : {{ this.boiler.model }}</p>
          <p class="card-text p-y-1">Numéro de série : {{ this.boiler.serialNumber }}</p>
          <p class="card-text p-y-1">Mise en service : {{ this.boiler.startDate }}</p>
        </div>
      </div>
      <div class="card">
        <div class="card-block">
          <h4 class="card-title">Date :</h4>
          <p class="card-text p-y-1">Date : {{ this.callout.date }}</p>
          <p class="card-text p-y-1">Durée : {{ this.callout.duration }}</p>
        </div>
      </div>
      <div class="card">
        <div class="card-block">
          <h4 class="card-title">Détail de l'intervention :</h4>
          <p class="card-text p-y-1">{{ this.callout.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../../api";

export default {
  props: ["id"],
  data() {
    return {
      loading: false,
      callout: {},
      boiler: {},
      customer: {},
      technician: {},
      tName: "",
      tFirstName: "",
      cName: "",
      cFirstName: "",
      cAddress: "",
      bBrand: "",
      bModel: "",
      bSNum: "",
      bStart: "",
      coDate: "",
      coDuration: "",
      coDescription: "",

      idReport: 0,
    };
  },
  mounted() {
    this.refreshReport();
  },
  methods: {
    refreshReport() {
      this.loading = true;
      api
        .get("call-outs/" + this.idReport + "?populate[technician]=*")
        .then((response) => {
          this.callout = response.data.data.attributes;
          this.technician = this.callout.technician.data.attributes;
          console.log(this.callout)
          console.log(this.technician)

        });
      api
        .get(
          "call-outs/" +
            this.idReport +
            "?populate[boiler][populate][0]=customer"
        )
        .then((response) => {
          this.boiler = response.data.data.attributes.boiler.data.attributes;
          this.customer = this.boiler.customer.data.attributes;
          console.log(this.boiler)
          console.log(this.customer)
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>
