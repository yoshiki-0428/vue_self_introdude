
<template>
  <div class="storyDetail">
    <h1>My story Detail</h1>

    <md-card class="top-card">
      <md-card-header>
        <h2>Over Views</h2>
      </md-card-header>
      <div class="over_views">
        <md-card md-with-hover class="inner-card">
          <md-card-area>
            <md-card-header>
              <span class="md-title">名称</span>
            </md-card-header>

            <md-card-content>
              {{ story.product_name }}
            </md-card-content>
          </md-card-area>
        </md-card>

        <md-card md-with-hover class="inner-card">
          <md-card-area>
            <md-card-header>
              <span class="md-title">時期</span><br />
            </md-card-header>

            <md-card-content>
              {{ story.start_season }} 〜 {{ story.end_season }}
            </md-card-content>
          </md-card-area>
        </md-card>

        <md-card md-with-hover class="inner-card">
          <md-card-area>
            <md-card-header>
              <span class="md-title">期間</span>
            </md-card-header>

            <md-card-content>
              {{ story.period }}
            </md-card-content>
          </md-card-area>
        </md-card>

        <md-card md-with-hover class="inner-card">
          <md-card-area>
            <md-card-header>
              <span class="md-title">業種</span>
            </md-card-header>

            <md-card-content>
              {{ story.industry }}
            </md-card-content>
          </md-card-area>
        </md-card>

        <md-card md-with-hover class="inner-card">
          <md-card-area>
            <md-card-header>
              <span class="md-title">規模</span>
            </md-card-header>

            <md-card-content>
              {{ story.scale }}
            </md-card-content>
          </md-card-area>
        </md-card>
      </div>

      <md-card-header>
        <h2>Work Views</h2>
      </md-card-header>
      <div class="work_views">
        <md-card md-with-hover class="inner-card">
          <md-card-area>
            <md-card-header>
              <span class="md-title">言語</span>
            </md-card-header>

            <md-card-content>
              <multi-tag :tags="story.language" />
            </md-card-content>
          </md-card-area>
        </md-card>

        <md-card md-with-hover class="inner-card">
          <md-card-area>
            <md-card-header>
              <span class="md-title">ツールなど</span>
            </md-card-header>

            <md-card-content>
              <multi-tag :tags="story.tools" />
            </md-card-content>
          </md-card-area>
        </md-card>

        <md-card md-with-hover class="inner-card">
          <md-card-area>
            <md-card-header>
              <span class="md-title">役割</span>
            </md-card-header>

            <md-card-content>
              {{ story.role }}
            </md-card-content>
          </md-card-area>
        </md-card>
      </div>

      <md-card-header>
        <h2>Work Contents</h2>
      </md-card-header>
      <div class="work_contents">
        <md-card md-with-hover class="inner-card">
          <md-card-area>
            <md-card-header>
              <span class="md-title">作業概要</span>
            </md-card-header>

            <md-card-content>
              {{ story.overview }}
            </md-card-content>
          </md-card-area>
        </md-card>
      </div>
    </md-card>
  </div>
</template>

<script>
import MultiTag from './MultiTag'
import firebase from 'firebase'

export default {
  name: 'storyDetail',
  data () {
    return {
      story: this.storyDetail.item
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
