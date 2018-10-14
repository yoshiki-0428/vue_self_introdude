<template>
  <div class="story">
    <h1>My story</h1>
    <md-table v-model="stories" md-card>
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="時期" md-sort-by="start_season">
          {{ item.start_season }} ~ {{ item.end_season }}
        </md-table-cell>
        <md-table-cell md-label="期間" md-sort-by="">
          {{ item.period }}
        </md-table-cell>
        <md-table-cell md-label="開発名称" md-sort-by="product_name">
          {{ item.product_name }}
        </md-table-cell>
        <md-table-cell md-label="言語" md-sort-by="language">
          <multi-tag :tags="item.language" />
        </md-table-cell>
        <md-table-cell md-label="ツールなど" md-sort-by="tools">
          <multi-tag :tags="item.tools" />
        </md-table-cell>
        <md-table-cell md-label="詳細">
          <md-button class="id_button" :to="'/story/'+item.no">→</md-button>
        </md-table-cell>
      </md-table-row>
    </md-table>

    <csv-dialog/>

  </div>
</template>

<script>
import firebase from 'firebase'
import CsvDialog from './CsvDialog'
import StoryDetailDialog from './StoryDetailDialog.vue'
import MultiTag from './MultiTag'

export default {
  name: 'Story',
  data () {
    return {
      stories: []
    }
  },
  created () {
    this.stories = this.getStories()
  },
  components: {
    'csv-dialog': CsvDialog,
    'story-detail-dialog': StoryDetailDialog,
    'multi-tag': MultiTag
  },
  methods: {
    getStories () {
      const stories = []
      firebase.database().ref('story').on('value', snapshot => {
        Object.values(snapshot.val()).forEach(storyRef => stories.push(this.shapeStory(storyRef)))
      },
      error => {
        if (error) {
          console.log(error)
        }
      })
      return stories
    },
    shapeStory (storyRef) {
      storyRef.end_season = storyRef.end_season.replace(/\r?\n/g, '')
      return storyRef
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
