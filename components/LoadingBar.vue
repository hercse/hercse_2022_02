<template>
  <div v-if="loading" class="loading-page">
    <p>Loading...</p>
  </div>
</template>

<script>
  export default {
    data: () => ({
      loading: false
    }),
    methods: {
      start() {
        setTimeout(() => {
          this.loading = true
        }, 2000);
      },
      finish() {
        setTimeout(() => {
          this.loading = false
        }, 2000);
      }
    }
  }
</script>

<style scoped>
  .loading-page {
    position: fixed;
    z-index: 1000000000;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 0, 0, 1);
    text-align: center;
    padding-top: 200px;
    font-size: 30px;
    font-family: sans-serif;
  }
</style>