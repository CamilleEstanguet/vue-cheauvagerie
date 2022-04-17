<template>
  <div class="container">
    <h1>{{callout.data.attributes.title}}</h1>
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
    };
  },
  mounted() {
    this.refreshDoodle();
  },
  methods: {
    refreshDoodle() {
      this.loading = true;
      api
        .get("call-outs/" + this.id)
        .then((response) => {
          this.callout = response.data;
          console.log(this.callout.data.attributes.title);
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>
