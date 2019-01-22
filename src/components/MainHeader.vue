<template lang="pug">
  .header
    md-tabs(md-alignment='centered')
      md-tab#tab-home(md-icon='home', md-label='top', to='/top')
      md-tab#tab-pages(md-icon='play_arrow', md-label='story', to='/story')
      md-tab#tab-posts(md-icon='pages', md-label='Posts', to='/post')
      md-tab#tab-favorites(md-icon='contacts', md-label='Contact', to='/contact')
</template>

<script>
export default {
  name: 'MainHeader'
}
</script>

<style scoped>

.header {
  top: 0;
  height: 72px;
  width: 100%;
}
</style>
