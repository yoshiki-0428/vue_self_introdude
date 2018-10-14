<template>
  <div class="header">
    <md-tabs md-alignment="centered">
      <md-tab id="tab-home" md-icon="home" md-label="top" to="/top"></md-tab>
      <md-tab id="tab-pages" md-icon="play_arrow" md-label="story" to="/story"></md-tab>
      <md-tab id="tab-posts" md-icon="pages" md-label="Posts" to="/post"></md-tab>
      <md-tab id="tab-favorites" md-icon="contacts" md-label="Contact" to="/contact"></md-tab>
    </md-tabs>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>

.header {
  top: 0;
  height: 72px;
  width: 100%;
}
</style>
