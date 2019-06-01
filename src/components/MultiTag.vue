<template lang="pug">
  .multiTag
    md-chip(v-for="tag in tags" v-bind:key="tag")
      | {{ tag }}
</template>

<script>
export default {
  name: 'multiTag',
  data () {
    return {}
  },
  props: ['tags']
}

</script>

<style scoped>
.md-chip {
  margin-left: 1%;
  margin-top: 1%;
  margin-bottom: 1%;
}

small {
  font-weight: 500;
}
</style>
