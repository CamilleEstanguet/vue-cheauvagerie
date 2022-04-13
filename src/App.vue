<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-main"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-between" id="navbar-main">
          <div class="navbar-nav">
            <router-link to="/" class="navbar-brand">Cheauvagerie</router-link>
          </div>
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/search" class="nav-link">Consulter</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/new" class="nav-link">Créer</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/page2" class="nav-link">Login</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container mt-4">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: "accueil",
    };
  },
  computed: {
    title() {
      return pages[this.currentPage].title;
    },
  },
  methods: {
    page(id) {
      this.currentPage = id;
    },
  },
};
</script>

<style></style>
