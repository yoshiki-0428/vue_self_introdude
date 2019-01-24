<template lang="pug">
  .story
    h1 My story
      |
    md-button.md-primary(@click='getStoriesByGas') test

</template>

<script>
import CsvDialog from './CsvDialog'
import MultiTag from './MultiTag'
import axios from 'axios'

export default {
  name: 'Story',
  data () {
    return {
      stories: [],
      url: 'https://script.google.com/macros/s/AKfycbwoDWgY7IDhIKYGsy6afqCM-lhcPvDcVUAaxMrh6p8DSoqTPQ/exec'
    }
  },
  created () {
    this.stories = this.getStoriesByGas()
  },
  components: {
    CsvDialog,
    MultiTag
  },
  methods: {
    getStoriesByGas () {
      axios
        .get(this.url)
        .then(res => {
          this.stories = res.data.filter(v => v.no !== '')
          console.log(this.stories)
        }).catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
.md-card {
  width: 100%;
  display: inline-block;
  vertical-align: top;
}

.md-table-cell-container {
  padding-left: 0px;
  padding-right: 0px;
}
</style>
