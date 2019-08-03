<template lang="pug">
  div
    .main_title.main_title__content
      | My story
      md-button(
        alt="Excelファイル形式でダウンロードする"
        href="https://docs.google.com/spreadsheets/d/1Lq5fGNVhV08ykZ2mWyA0TGvijqfmDRxu_R8ce08V_SE/export?gid=2107304566&amp;format=xlsx&amp;sheetnames=true"
        style="background: white"
        class="md-fab md-plain md-fab-bottom-right md-fixed"
      )
        .md-icon(
          class="md-size-2x"
        ) get_app

    .search_chips
      md-chips(
        v-model="searchChips"
        @md-delete="deleteChips"
        @md-insert="insertChips"
      )

    .md-card__list
      transition-group(
        appear
      )
        md-card(
          v-for="item in stories"
          :key="item.no"
        )
          .md_card
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
            .img_space
              img.imgFix(
                v-if="item.image_url"
                :src="item.image_url"
              )
              img.imgFix(
                v-if="item.image_url2"
                :src="item.image_url2"
              )
            .button_space
              md-button(
                style="margin-bottom: 3%"
                class="md-raised"
                @click="onClickShowDetail(item.no)"
              ) Detail
    story-detail(
      v-if="isShow"
      :story="story"
      :is-show="isShow"
    )
</template>

<script>
import CsvDialog from './CsvDialog'
import MultiTag from './MultiTag'
import StoryDetail from './StoryDetail'
import firebase from 'firebase'

export default {
  name: 'Story',
  data () {
    return {
      storiesPrincipal: [],
      stories: [],
      story: null,
      isShow: false,
      searchChips: ['Java', 'Kotlin']
    }
  },
  created () {
    this.getStoriesByFirebase()
    this.$eventHub.$emit('change-select-tab', 'tab-story')
    this.$eventHub.$on('update-is-show', this.updateIsShow)
  },
  beforeDestroy () {
    this.$eventHub.$off('update-is-show', this.updateIsShow)
  },
  components: {
    CsvDialog,
    MultiTag,
    StoryDetail
  },
  methods: {
    getStoriesByFirebase () {
      const _this = this
      firebase.database().ref('stories').on('value', function (snapshot) {
        _this.storiesPrincipal = snapshot.val()
        _this.stories = snapshot.val()
          .filter(v => v.no !== '')
          .sort((a, b) => a.no < b.no ? 1 : -1)
      })
    },
    onClickShowDetail (no) {
      this.story = this.stories.filter(v => v.no === no)[0]
      this.isShow = true
    },
    updateIsShow (isShow) {
      this.isShow = isShow
    },
    insertChips (chips) {
      this.stories = this.storiesPrincipal.filter(s => s.language.indexOf(chips) !== -1)
    },
    deleteChips () {
      this.stories = this.storiesPrincipal
    }
  }
}
</script>

<style lang="sass" scoped>
  .md-card__list
    padding: 0

    span
      display: flex
      flex-wrap: wrap

  .md-card
    display: inline-block
    vertical-align: top
    border-radius: 15px

  @media screen and (min-width: 961px)
    .md-card
      margin: 0 1% 2% 1%
      width: 31%
      min-height: 30%

  @media screen and (max-width: 375px)
    .md-card
      margin: 0 4% 2% 4%
      width: 92%

  .flex
    display: flex

  .imgFix
    width: 30%
    padding: 2%

  .v-enter-active
    transition: all .4s ease

  .v-leave-active
    transition: all .4s

  .v-enter, .v-leave-to
    transform: translateX(10px)
    opacity: 0
</style>
