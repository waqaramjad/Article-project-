const functions = require('firebase-functions');
var fetch = require('node-fetch')

const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase);

exports.sendPushNotification = functions.database.ref('articles/Sports/{id}').onWrite((change, context) => {
var titleValue = ""
var counter = 0
if (change.before.exists()) {
    titleValue = "Previous Article Updated  \n"
    counter++
    
  }


  if (!change.after.exists()) {
    titleValue = " Previous Article Deleted \n"
    counter++
return null 
  }
  if(counter==0)
  titleValue = "New Article Published  \n"
  var nodeData = change.after.val()
  var nodeWithTitile = nodeData.title
  var completeNode = titleValue.concat(nodeWithTitile)
    var messages = []
  return admin.database().ref('users/Sports/').once('value').then(  (snapshot) => {
        var mySnap = snapshot.val()

        Object.keys(mySnap).map(function(key, index) {
            var expoToken = mySnap[key].pushToken
            if (expoToken) {
                messages.push({
                    "to": expoToken,
                    "body": completeNode
                })
            }


          });

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


