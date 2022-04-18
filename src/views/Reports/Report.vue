<template>
  <div class="container">
    <h1>Rapport</h1>
    <div class="display">
      <div class="card">
        <div class="card-block">
          <h4 class="card-title">Technicien en charge :</h4>
          <p class="card-text p-y-1">{{ tName }} {{ tFirstName }}</p>
        </div>
      </div>
      <div class="card">
        <div class="card-block">
          <h4 class="card-title">Client :</h4>
          <p class="card-text p-y-1">
            Nom et Prénom : {{ cName }} {{ cFirstName }}
          </p>
          <p class="card-text p-y-1">Adresse : {{ cAddress }}</p>
        </div>
      </div>
      <div class="card">
        <div class="card-block">
          <h4 class="card-title">Chaudière :</h4>
          <p class="card-text p-y-1">Marque : {{ bBrand }}</p>
          <p class="card-text p-y-1">Modèle : {{ bModel }}</p>
          <p class="card-text p-y-1">Numéro de série : {{ bSNum }}</p>
          <p class="card-text p-y-1">Mise en service : {{ bStart }}</p>
        </div>
      </div>
      <div class="card">
        <div class="card-block">
          <h4 class="card-title">Date :</h4>
          <p class="card-text p-y-1">Date : {{ coDate }}</p>
          <p class="card-text p-y-1">Durée : {{ coDuration }}</p>
        </div>
      </div>
      <div class="card">
        <div class="card-block">
          <h4 class="card-title">Détail de l'intervention :</h4>
          <p class="card-text p-y-1">{{ coDescription }}</p>
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
    this.idReport = this.id;
    console.log(this.idReport);
    this.refreshReport();
  },
  methods: {
    refreshReport() {
      this.loading = true;
      api
        .get("call-outs/" + this.idReport + "?populate[technician]=*")
        .then((response) => {
          this.callout = response.data;
          this.technician = this.callout.data.attributes.technician;
        });
      api
        .get(
          "call-outs/" +
            this.idReport +
            "?populate[boiler][populate][0]=customer"
        )
        .then((response) => {
          this.boiler = response.data;
        })
        .finally(() => {
          this.loading = false;
        });
      this.customer = this.boiler.data.attributes.customer;
      this.coDate = this.callout.data.attributes.date;
      this.coDuration = this.callout.data.attributes.duration;
      this.coDescription = this.callout.data.attributes.description;
      this.bBrand = this.boiler.data.attributes.brand;
      this.bModel = this.boiler.data.attributes.model;
      this.bSNum = this.boiler.data.attributes.serialNumber;
      this.bStart = this.boiler.data.attributes.startDate;
      this.cName = this.customer.data.attributes.name;
      this.cFirstName = this.customer.data.attributes.firstName;
      this.cAddress = this.customer.data.attributes.address;
      this.tName = this.technician.data.attributes.name;
      this.tFirstName = this.technician.data.attributes.firstName;
    },
  },
};
</script>
