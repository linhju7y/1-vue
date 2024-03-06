<template>
  <div class="about">
    <h1 @click.prevent="onLogout">This is an about page</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  methods: {
    onLogout() {
      localStorage.removeItem("usr");
      this.$router.push("/login");
      console.log("!!!");
    },
  },
});
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
