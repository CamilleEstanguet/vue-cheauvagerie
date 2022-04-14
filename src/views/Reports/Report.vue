<template>
  <div class="container">
    <h1>{{ callout.name }}</h1>
  </div>
</template>

<script>
import api from '../../api';

export default {
  props: ['id'],
  data() {
    return {
      loading: false,
      callout: {}
    };
  },
  mounted() {
    this.refreshDoodle();
  },
  methods: {
    refreshDoodle() {
      this.loading = true;
      api.get('callouts/' + this.id)
        .then(response => {
          this.doodle = response.data;
        })
        .finally(() => {
          this.loading = false;
        });
    }
  }
};
</script>