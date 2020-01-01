<template>
    <div id="nav">
      <nav class="navbar is-transparent" v-bind:class="{'is-fixed-bottom':menuPosition}">
        <div>
          <div class="navbar-start">
            <router-link class="navbar-item" to="/">Home</router-link>
            <router-link class="navbar-item" to="/about">About</router-link>
          </div>
          <div class="navbar-end">
            <Authentication />
          </div>
        </div>
      </nav>
    </div>
</template>
<script>
import Authentication from "@/components/Authentication.vue";
export default {
  name: "navigation",
  components: {
    Authentication
  },
  created() {
    if (window.innerWidth < 920) {
      this.menuPosition = !this.menuPosition;
    }
  },
  data() {
    return {
      menuActive: false,
      menuPosition: false
    };
  },
  methods: {
    menuToggle() {
      this.menuActive = !this.menuActive;
    }
  }
};
</script>
<style scoped>
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #555;
}
#nav a.router-link-exact-active {
  color: #3273dc;
}
</style>