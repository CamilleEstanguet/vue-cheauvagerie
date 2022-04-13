<template>
  <div class="container">
    <h1>Nouveau client</h1>
    <form method="post" @submit.prevent="submitDoodle">
      <div class="mb-3">
        <label for="libel_draw" class="form-label">Nom</label>
        <input
          type="text"
          class="form-control"
          required
          id="name"
          name="name"
          v-model="form.name"
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
          v-model="form.firstName"
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
          v-model="form.address"
          aria-describedby="addHelp"
        />
        <div id="addHelp" class="form-text">Adresse de résidence.</div>
        <label for="libel_draw" class="form-label">Numéro de téléphone</label>
        <input
          type="text"
          class="form-control"
          required
          id="phoneNumber"
          name="phoneNumber"
          v-model="form.phoneNumber"
          aria-describedby="phoneHelp"
        />
        <div id="phoneHelp" class="form-text">Téléphone du client.</div>
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
        name: "",
        firstName: "",
        address: "",
        phoneNumber: "",
      },
    };
  },
  methods: {
    submitDoodle() {
      api
        .post("customers", this.form)
        .then((response) => {
          // renvoie le dessin créé
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
      //this.$router.push("/customers");
    },
  },
};
</script>
