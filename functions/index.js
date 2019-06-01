const functions = require('firebase-functions')
const admin = require('firebase-admin')
const axios = require('axios')
admin.initializeApp()
const db = admin.database()

exports.updateStories = functions.https.onRequest((req, res) => {
  const url = 'https://script.google.com/macros/s/AKfycbwoDWgY7IDhIKYGsy6afqCM-lhcPvDcVUAaxMrh6p8DSoqTPQ/exec'
  console.log(db.ref('/stories'))
  axios
    .get(url)
    .then(res => {
      const stories = res.data.filter(v => v.no !== '')
      console.log('Update Start')
      console.log(stories)
      db.ref('stories').set(stories)
      db.ref('stories').on('value', (snapshot) => {
        console.log(snapshot.val())
        console.log('Update Finish')
      })
      return stories
    })
    .catch(err => {
      console.log(err)
    })
});
