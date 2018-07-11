
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
      stream.on('data', data => console.log(data))
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
