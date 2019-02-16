const functions = require('firebase-functions');
var fetch = require('node-fetch')

const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase);

exports.sendPushNotification = functions.database.ref('articles/{id}').onCreate((snap, context) => {

    // console.log( event.datat)
    // console.log(event)
    // const root = event.data.ref.root
console.log('context')
console.log(context)
    const root = snap.ref.root
    console.log('root')
    console.log(root)
    console.log('snap')
    console.log(snap)
    console.log('snap.ref')
    console.log(snap.ref)
    var messages = []
    
    console.log( 'messages')
    console.log( messages)
    //return the main promise
    return root.child('/users').once('value').then(function (snapshot) {
        
        console.log( 'snapshot' )
        console.log( 'snapshot' , snapshot)
        snapshot.forEach(function (childSnapshot) {

            var expoToken = childSnapshot.val().expoToken

            if (expoToken) {

                messages.push({
                    "to": expoToken,
                    "body": "New Note Added"
                })
            }
        })

        return Promise.all(messages)

    }).then(messages => {

        fetch('https://exp.host/--/api/v2/push/send', {

            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(messages)
        })
    })

})