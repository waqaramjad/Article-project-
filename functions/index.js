const functions = require('firebase-functions');
var fetch = require('node-fetch')

const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase);

exports.sendPushNotification = functions.database.ref('articles/Sports/{id}').onWrite((change, context) => {
var titleValue = ""
    console.log( change.before.val())
    console.log( change.after.val())
console.log( 'context', context)
var counter = 0
if (change.before.exists()) {
    console.log('updtae')
    titleValue = "Previous Article Updated  \n"
    counter++
    
  }


  if (!change.after.exists()) {
    console.log('updtae')
    titleValue = " Previous Article Deleted \n"
    counter++

  }
  if(counter==0)
  titleValue = "New Article Published  \n"

  console.log('snap.val() articles/Medical/' )
  var nodeData = change.after.val()
  var nodeWithTitile = nodeData.title
  console.log(  " nodeWithTitile" , nodeWithTitile  )
  var fixText = "New Article Published \n"
  console.log(  " fixText" , fixText  )
  var completeNode = titleValue.concat(nodeWithTitile)
  console.log(  " completeNode" , completeNode  )
//   console.log(  " nodeWithTitile" ,  nodeWithTitile )
//   console.log()
  
  
    var messages = []
    // admin.database().ref('/').once('value').then((data)=>{
    // console.log('data.val()',data.val() )
    
    // })
    console.log( 'messages', messages)
   
    //return the main promise
  return admin.database().ref('users/Sports/').once('value').then(  (snapshot) => {
        
        // console.log( 'snapshot' )
        console.log( 'snapshot' , snapshot)
        console.log('snapshot.val() users' ,snapshot.val() )
        var mySnap = snapshot.val()
//         mySnap.forEach(function (childSnapshot) {
            
//             //   console.log( 'childSnapshot')
//             console.log('childSnapshot' ,  childSnapshot)
//             // console.log('childSnapshot.val()' ,childSnapshot.val() )
//             var expoToken = childSnapshot.expoToken
// // console.log( '')
//     console.log( 'expoToken', expoToken)
//             if (expoToken) {
// // console.log( )
//     console.log( 'expoToken inside' , expoToken)
//                 messages.push({
//                     "to": expoToken,
//                     "body": "New Note Added"
//                 })
//             }
//         })

        Object.keys(mySnap).map(function(key, index) {
            console.log(mySnap[key].expoTokens) 
             console.log(index)	  
            var expoToken = mySnap[key].pushToken

            // console.log('childSnapshot' ,  childSnapshot)
            // console.log('childSnapshot.val()' ,childSnapshot.val() )
            // var expoToken = childSnapshot.expoToken
// console.log( '')
    console.log( 'expoToken', expoToken)
            if (expoToken) {
// console.log( )
    console.log( 'expoToken inside' , expoToken)
                messages.push({
                    "to": expoToken,
                    "body": completeNode
                })
            }


          });

        return Promise.all(messages)

    }).then(messages => {
console.log('messages inside .then')
      console.log(messages)
      
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


