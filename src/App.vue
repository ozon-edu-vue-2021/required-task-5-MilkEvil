<template>
  <div id="app">
    <custom-header />
    <div class="container">
      <router-view v-if="isLoaded === true" />
      <div v-else-if="isLoaded === false">Не удалось загрузить информацию</div>
      <div class="row" v-else>
        <div class="d-flex justify-content-center">
          <div class="spinner-border spinner-big"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomHeader from "@/components/layout/CustomHeader";

export default {
  name: "App",
  components: {
    CustomHeader
  },
  data() {
    return {
      isLoaded: null,
    }
  },
  created() {
    this.$store.dispatch('catalog/getProducts')
      .then(response => {
        this.isLoaded = response;
      });
  }
};
</script>

<style scoped>
.spinner-big {
  width: 200px;
  height: 200px;
}
</style>
