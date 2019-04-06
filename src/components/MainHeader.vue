<template lang="pug">
  .header
    md-tabs(
      md-alignment='centered'
      :md-active-tab="tabId"
    )
      md-tab#tab-home(md-icon='home', md-label='top', to='/top')
      md-tab#tab-story(md-icon='play_arrow', md-label='story', to='/story')
      md-tab#tab-post(md-icon='pages', md-label='Posts', to='/post')
      md-tab#tab-contact(md-icon='contacts', md-label='Contact', to='/contact')
</template>

<script>
export default {
  name: 'MainHeader',
  data: () => ({
    tabId: 'tab-home'
  }),
  methods: {
    changeSelectTab (tabId) {
      this.tabId = tabId
    }
  },
  created () {
    this.$eventHub.$on('change-select-tab', this.changeSelectTab)
  },
  beforeDestroy () {
    this.$eventHub.$off('change-select-tab', this.changeSelectTab)
  }
}
</script>

<style scoped>

.header {
  top: 0;
  height: 72px;
  width: 100%;
}
</style>
