<template lang="pug">
  .main_title.main_title__content
    | My story
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
      story: this.stories,
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
          this.story = this.stories[0]
          console.log(this.story)
        }).catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style lang="sass" scoped>
</style>
