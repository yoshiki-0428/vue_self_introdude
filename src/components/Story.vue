<template>
  <div class="story">
    <h1>My story</h1>
    <md-table md-card>
      <md-table-row>
        <md-table-head>期間</md-table-head>
        <md-table-head>開発名称</md-table-head>
        <md-table-head>言語</md-table-head>
        <md-table-head>プラットフォーム／ツール</md-table-head>
      </md-table-row>

      <md-table-row>
        <md-table-cell>2016-04 ~ 2017-08</md-table-cell>
        <md-table-cell>Java開発</md-table-cell>
        <md-table-cell>Kotlin, Java, Node.js, Vue.js</md-table-cell>
        <md-table-cell>Watson API, SlackAPI, MySql, Doma2, AWS</md-table-cell>
      </md-table-row>
    </md-table>
    <br />
    <md-button>add</md-button>
  </div>
</template>

<script>
import firebaseDatabase from '../main.js'
import firebase from 'firebase'

export default {
  name: 'Story',
  created() {
    const story = firebase.database().ref('story')
  },
  data () {
    return {}
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
