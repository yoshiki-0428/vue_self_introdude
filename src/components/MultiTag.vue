
<template>
  <div class="multiTag">
    <md-chip v-for="tag in tags" v-bind:key="tag" md-clickable>
      {{ tag }}
    </md-chip>
  </div>
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
md-chip {
  margin-left: 1%;
  margin-top: 1%;
  margin-bottom: 1%;
  /* font-size: 10px; */
}

small {
  font-weight: 500;
}
</style>
