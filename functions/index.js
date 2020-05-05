const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp()

exports.addPost = functions.https.onCall(async (data, context) => {

  admin.firestore().collection('posts').add({

    post: data.post,
    name: data.name,
    createdAt: new Date(),
    published: false

  }).then(() => {

    console.log('Added post to firestore from cloud function')
  })
})