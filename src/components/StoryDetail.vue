<template lang="pug">
  .storyDetail
    h1 My story Detail
      |
      md-card.top-card
        md-card-header
          h2 Over Views
        |
        .over_views
          md-card.inner-card(md-with-hover='')
            md-card-area
              md-card-header
                span.md-title &#x540D;&#x79F0;
              |
              md-card-content
                | {{ story.product_name }}
          |
          md-card.inner-card(md-with-hover='')
            md-card-area
              md-card-header
                span.md-title &#x6642;&#x671F;
                br
              |
              md-card-content
                | {{ story.start_season }} &#x301C; {{ story.end_season }}
          |
          md-card.inner-card(md-with-hover='')
            md-card-area
              md-card-header
                span.md-title &#x671F;&#x9593;
              |
              md-card-content
                | {{ story.period }}
          |
          md-card.inner-card(md-with-hover='')
            md-card-area
              md-card-header
                span.md-title &#x696D;&#x7A2E;
              |
              md-card-content
                | {{ story.industry }}
          |
          md-card.inner-card(md-with-hover='')
            md-card-area
              md-card-header
                span.md-title &#x898F;&#x6A21;
              |
              md-card-content
                | {{ story.scale }}
        |
        md-card-header
          h2 Work Views
        |
        .work_views
          md-card.inner-card(md-with-hover='')
            md-card-area
              md-card-header
                span.md-title &#x8A00;&#x8A9E;
              |
              md-card-content
                multi-tag(:tags='story.language')
          |
          md-card.inner-card(md-with-hover='')
            md-card-area
              md-card-header
                span.md-title &#x30C4;&#x30FC;&#x30EB;&#x306A;&#x3069;
              |
              md-card-content
                multi-tag(:tags='story.tools')
          |
          md-card.inner-card(md-with-hover='')
            md-card-area
              md-card-header
                span.md-title &#x5F79;&#x5272;
              |
              md-card-content
                | {{ story.role }}
        |
        md-card-header
          h2 Work Contents
        |
        .work_contents
          md-card.inner-card(md-with-hover='')
            md-card-area
              md-card-header
                span.md-title &#x4F5C;&#x696D;&#x6982;&#x8981;
              |
              md-card-content
                | {{ story.overview }}
</template>

<script>
import MultiTag from './MultiTag'
import firebase from 'firebase'

export default {
  name: 'storyDetail',
  data () {
    return {
      story: ''
    }
  },
  created () {
    firebase.database().ref('story/' + this.$route.params.id).on('value', snapshot => {
      this.story = snapshot.val()
    })
  },
  components: {
    'multi-tag': MultiTag
  }
}
</script>

<style scoped>
  .top-card {
    width: 80%;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }

  .inner-card {
    width: auto;
    display: inline-block;
    margin: 6px;
  }
</style>
