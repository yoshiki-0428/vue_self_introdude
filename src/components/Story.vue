<template>
  <div class="story">
    <h1>My story</h1>
    <md-table v-model="stories" md-card>
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="期間" md-sort-by="start_period">
          {{ item.start_period }} ~ {{ item.end_period }}
        </md-table-cell>
        <md-table-cell md-label="開発名称" md-sort-by="product_name">
          {{ item.product_name }}
        </md-table-cell>
        <md-table-cell md-label="言語" md-sort-by="language">
          <!-- TODO 言語の量に応じて分タグ付け -->
          <md-chip>
            {{ item.language }}
          </md-chip>
        </md-table-cell>
        <md-table-cell md-label="ツールなど" md-sort-by="tools">
          <!-- TODO ツールの量に応じて分タグ付け -->
          <md-chip>
            {{ item.tools }}
          </md-chip>
        </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Story',
  data () {
    return {
      stories: this.getStories()
    }
  },
  methods: {
    getStories: function () {
      var stories = []
      firebase.database().ref('story').on('value', snapshot => {
        snapshot.val().forEach(storyRef => stories.push(this.toStory(storyRef)))
      })
      return stories
    },
    toStory: function (storyRef) {
      return {
        start_period: storyRef.start_period,
        end_period: storyRef.end_period,
        language: storyRef.language,
        product_name: storyRef.product_name,
        tools: storyRef.tools
      }
    }
  }
}
</script>

<style scoped>
.md-card {
    width: 80%;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
}
</style>