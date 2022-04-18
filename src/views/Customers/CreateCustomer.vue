<template>
  <div class="container">
    <h1>Nouveau client</h1>
    <form method="post" @submit.prevent="submitCustomer">
      <div class="mb-3">
        <label for="libel_draw" class="form-label">Nom</label>
        <input
          type="text"
          class="form-control"
          required
          id="name"
          name="name"
          v-model="form.data.name"
          aria-describedby="nameHelp"
        />
        <div id="nameHelp" class="form-text">Nom du client.</div>
        <label for="libel_draw" class="form-label">Prénom</label>
        <input
          type="text"
          class="form-control"
          required
          id="firstName"
          name="firstName"
          v-model="form.data.firstName"
          aria-describedby="fNameHelp"
        />
        <div id="fNameHelp" class="form-text">Prénom du client.</div>
        <label for="libel_draw" class="form-label">Adresse</label>
        <input
          type="text"
          class="form-control"
          required
          id="address"
          name="address"
          v-model="form.data.address"
          aria-describedby="addHelp"
        />
        <div id="addHelp" class="form-text">Adresse de résidence.</div>
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
          name: "",
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
        .post("customers", this.form)
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
