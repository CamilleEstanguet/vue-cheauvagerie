<template>
  <div class="container">
    <h1>Nouvelle chaudière</h1>
    <form method="post" @submit.prevent="submitCustomer">
      <div class="mb-3">
        <label for="libel_draw" class="form-label">Marque</label>
        <input
          type="text"
          class="form-control"
          required
          id="brand"
          name="brand"
          v-model="form.data.brand"
          aria-describedby="brandHelp"
        />
        <div id="nameHelp" class="form-text">Marque de la chaudière</div>
        <label for="libel_draw" class="form-label">Modèle</label>
        <input
          type="text"
          class="form-control"
          required
          id="model"
          name="model"
          v-model="form.data.model"
          aria-describedby="modelHelp"
        />
        <div id="fNameHelp" class="form-text">Modèle de la chaudière</div>
        <label for="libel_draw" class="form-label">Numéro de série</label>
        <input
          type="text"
          class="form-control"
          required
          id="num"
          name="num"
          v-model="form.data.serialNumber"
          aria-describedby="numHelp"
        />
        <div id="addHelp" class="form-text">Numéro de la chaudière</div>
        <label for="libel_draw" class="form-label">Date de mise en service</label>
        <input
          type="text"
          class="form-control"
          required
          id="start"
          name="start"
          v-model="form.data.startDate"
          aria-describedby="numHelp"
        />
        <div id="addHelp" class="form-text">Date</div>
      </div>
      <button type="submit" class="btn btn-primary">Créer</button>
    </form>
  </div>
</template>

<script>
import api from "../../api.js";
export default {
  data() {
    return {
      form: {
        data: {
          brand: "",
          firstName: "",
          address: "",
          phoneNumber: "",
        },
      },
    };
  },
  methods: {
    submitCustomer() {
      console.log(this.form);
      api
        .post("boilers", this.form)
        .then((response) => {
          this.$router.push("/customers");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
