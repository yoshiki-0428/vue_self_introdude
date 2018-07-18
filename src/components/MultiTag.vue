
<template>
  <div class="multiTag">
    <md-chip v-for="tag in tagArray" v-bind:key="tag" md-clickable>
      {{ tag }}
    </md-chip>
  </div>
</template>

<script>
export default {
  name: 'multiTag',
  data () {
    return {
      tagArray: this.tags.split('/n')
    }
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
