
<template>
  <div class="storyDetailDialog">
    <md-dialog :md-active.sync="showDialog">

      <md-dialog-title>Over Views</md-dialog-title>
      <div class="over_views">
        <md-card md-with-hover>
          <md-card-area>
            <md-card-header>
              <span class="md-title">名称</span>
            </md-card-header>

            <md-card-content>
              {{ story.product_name }}
            </md-card-content>
          </md-card-area>
        </md-card>

        <md-card md-with-hover>
          <md-card-area>
            <md-card-header>
              <span class="md-title">時期</span><br />
            </md-card-header>

            <md-card-content>
              {{ story.start_season }} 〜 {{ story.end_season }}
            </md-card-content>
          </md-card-area>
        </md-card>

        <md-card md-with-hover>
          <md-card-area>
            <md-card-header>
              <span class="md-title">期間</span>
            </md-card-header>

            <md-card-content>
              {{ story.period }}
            </md-card-content>
          </md-card-area>
        </md-card>

        <md-card md-with-hover>
          <md-card-area>
            <md-card-header>
              <span class="md-title">業種</span>
            </md-card-header>

            <md-card-content>
              {{ story.industry }}
            </md-card-content>
          </md-card-area>
        </md-card>

        <md-card md-with-hover>
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

      <md-dialog-title>Work Views</md-dialog-title>
      <div class="work_views">
        <md-card md-with-hover>
          <md-card-area>
            <md-card-header>
              <span class="md-title">言語</span>
            </md-card-header>

            <md-card-content>
              <multi-tag :tags="story.language" />
            </md-card-content>
          </md-card-area>
        </md-card>

        <md-card md-with-hover>
          <md-card-area>
            <md-card-header>
              <span class="md-title">ツールなど</span>
            </md-card-header>

            <md-card-content>
              <multi-tag :tags="story.tools" />
            </md-card-content>
          </md-card-area>
        </md-card>

        <md-card md-with-hover>
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

      <md-dialog-title>Work Contents</md-dialog-title>
      <div class="work_contents">
        <md-card md-with-hover>
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

      <md-dialog-actions>
        <md-button class="md-primary" @click="showDialog = false">Close</md-button>
      </md-dialog-actions>
    </md-dialog>

    <md-button class="id_button" :md-dense="true" @click="showDialog = true">{{ story.no }}</md-button>
  </div>
</template>

<script>
import MultiTag from './MultiTag'

export default {
  name: 'storyDetailDialog',
  data () {
    return {
      showDialog: false,
      story: this.storyDetail.item
    }
  },
  props: ['storyDetail'],
  components: {
    'multi-tag': MultiTag
  },
}
</script>

<style scoped>
.md-dialog {
  width: 60%;
}

.md-card {
  width: auto;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}
</style>
