
<template>
  <div class="csvDialog">
    <md-dialog :md-active.sync="showDialog">
      <md-dialog-title>upload my stories</md-dialog-title>

      <md-field>
        <label>CSV File</label>
        <md-file accept="text/csv" @md-change="fileChangeEvent"/>
      </md-field>

      <md-dialog-actions>
        <md-button class="md-primary" @click="showDialog = false">Close</md-button>
        <md-button class="md-primary" @click="csvUpload()">Save</md-button>
      </md-dialog-actions>
    </md-dialog>

    <md-button class="md-primary md-raised" @click="showDialog = true">Upload Dialog</md-button>
  </div>
</template>

<script>
import firebase from 'firebase'
const csv = require('csv-parser')
const stream = csv()

export default {
  name: 'CsvDialog',
  data () {
    return {
      showDialog: false
    }
  },
  methods: {
    csvUpload() {
      // TODO keyは1つでも良い
      // TODO csv分更新しているクソコード -> まとめて更新
      // TODO 現状なんでもpushしてしまう -> validation
      stream.on('data', data => {
        var updates = {}
        var newPostKey = firebase.database().ref('story').push().key
        console.log(data)
        console.log(newPostKey)
        updates['/story/' + newPostKey + '/'] = {
          start_period: data.period.split('~')[0],
          end_period: data.period.split('~')[1],
          language: data.language,
          product_name: data.product_name,
          tools: data.tools
        }
        firebase.database().ref().update(updates)
      })
    },
		fileChangeEvent(fileList) {
      const reader = new FileReader
      if (fileList[0]) {
        const file = fileList[0]
        reader.readAsText(file)

        reader.onload = e => {
          stream.write(e.target.result)
        }
      }
    }
  }
}
</script>
