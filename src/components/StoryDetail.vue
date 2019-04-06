<template lang="pug">
  md-dialog.english-font(
    :md-active="isShow"
    @md-closed="onClickClose"
    @md-clicked-outside="onClickClose"
  )
    md-dialog-title Story Detail
    md-tabs(md-dynamic-height)
      md-tab(md-label="Overview")
        p.japanese-font
          | 名称:
          | {{ story.product_name }}
        p.japanese-font
          | 時期:
          | {{ story.season_start.split('T')[0] }} 〜 {{ story.season_end.split('T')[0] }}
        p.japanese-font
          | 期間:
          | {{ story.period }}
        p.japanese-font
          | 業種:
          | {{ story.industry }}
        p.japanese-font
          | 規模:
          | {{ story.scale }} 人
        p.japanese-font
          | 担当範囲:
          | {{ story.scope }}
        p.japanese-font
          | 役割:
          | {{ story.role }}
      md-tab(md-label="Detail")
        p.japanese-font(style="line-height: 2")
          | 概要:
          | {{ story.overview }}
    md-dialog-actions
      md-button.md-primary(@click="onClickClose") Close
</template>

<script>
import MultiTag from './MultiTag'

export default {
  name: 'storyDetail',
  props: {
    story: {
      type: Object,
      required: true
    },
    isShow: {
      type: Boolean,
      required: true,
      default: true
    }
  },
  components: { MultiTag },
  methods: {
    onClickClose () {
      this.$eventHub.$emit('update-is-show', false)
    }
  }
}
</script>

<style lang="sass">
  .md-dialog
    max-width: 90%
    max-height: 90%

  @media screen and (min-width: 961px)
    .md-dialog
      max-width: 90%
      max-height: 90%

  @media screen and (max-width: 375px)
    .md-dialog
      max-width: 90%
      max-height: 80%

</style>
