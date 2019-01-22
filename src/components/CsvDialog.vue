<template lang="pug">
  .csvDialog
    md-dialog(:md-active.sync='showDialog')
      md-dialog-title upload my stories
      |
      md-field
        label CSV File
        |
        md-file(accept='text/csv', @md-change='fileChangeEvent')
      |
      md-dialog-actions
        md-button.md-primary(@click='showDialog = false') Close
        |
        md-button.md-primary(@click='csvUpload()') Save
    |
    md-button.md-primary.md-raised(@click='showDialog = true') Upload Dialog
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
    csvUpload () {
      stream.on('data', data => {
        firebase.database().ref('story/' + data.no).set({
          no: data.no,
          start_season: data.season.split('~')[0],
          end_season: data.season.split('~')[1],
          period: data.period,
          product_name: data.product_name,
          industry: data.industry,
          scale: data.scale,
          language: data.language.split('\n'),
          tools: data.tools.split('\n'),
          overview: data.overview,
          role: data.role,
          scope: data.scope
        }, error => {
          if (error) {
            console.log(error)
          }
        })
      })
    },
    fileChangeEvent (fileList) {
      // TODO エラー処理
      const reader = new FileReader()
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
