<template lang="pug">
  div
    .main_title.main_title__content
      | My story
    .md-card__list
      transition-group(
        appear
      )
        md-card(
          v-for="item in stories"
          :key="item.no"
        )
          md-card-header
            md-card-header-text
              .md-title
                | {{ item.season_end.split("T")[0] }}
                | 〜
                | {{ item.season_start.split("T")[0] }}
              .md-subhead.japanese-font
                | {{ item.product_name }}
              div(style="margin-top: 2%")
                md-icon(style="margin: 2px") build
                | Tech
                md-icon(style="margin: 2px") build
                multi-tag(
                  :tags="item.language.split('\\n')"
                )
              div(style="margin-top: 2%")
                md-icon(style="margin: 2px") work
                | Tools
                md-icon(style="margin: 2px") work
                multi-tag(
                :tags="item.tools.split('\\n')"
                )
              md-button(
                style="margin-top: 3%"
                class="md-raised"
                :to="'/story/'+item.no"
              ) Detail
            md-card-media-cover
              md-card-media(
                md-big
                v-if="item.image_url"
              )
                img(:src="item.image_url")
              md-card-media(
                style="padding-top: 3%"
                md-big
                v-if="item.image_url2"
              )
                img(:src="item.image_url2")
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
          this.stories = res.data.filter(v => v.no !== '').sort((a, b) => a.no < b.no ? 1 : -1)
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
  .md-card__list
    padding: 0

  .md-card
    margin: 0 2% 2% 2%
    width: 96%
    display: inline-block
    vertical-align: top

  .flex
    display: flex

  .v-enter-active
    transition: all .2s ease

  .v-leave-active
    transition: all .2s

  .v-enter, .v-leave-to
    transform: translateX(10px)
    opacity: 0
</style>
