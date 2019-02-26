const functions = require('firebase-functions');
var fetch = require('node-fetch')

const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase);

exports.sendPushNotification = functions.database.ref('articles/Sports/').onWrite((change, context) => {

    console.log( change.before.val())
    console.log( change.after.val())
    // console.log(event)
    // const root = event.data.ref.root
// console.log('context')

// if (snap.before.exists()) {
//     console.log('data edited ')
//     return null;
// }

// if (!snap.after.exists()) {
//     console.log('data deleted ')
      
//     return null;
//   }
//   const original = snap.after.val();  
//   console.log('original', original)
console.log( 'context', context)

  console.log('snap.val() articles/Medical/' ,snap.val() )
  var nodeData = change.after.val()
  var nodeWithTitile = nodeData.title
  console.log(  " nodeWithTitile" , nodeWithTitile  )
  var fixText = "New Article Published \n"
  console.log(  " fixText" , fixText  )
  var completeNode = fixText.concat(nodeWithTitile)
  console.log(  " completeNode" , completeNode  )
//   console.log(  " nodeWithTitile" ,  nodeWithTitile )
//   console.log()
  
    const root = snap.ref.root
    // console.log('root')
    console.log('root', root)
    // console.log('snap')
    console.log('snap' ,snap)
    // console.log('snap.ref')
    console.log('snap.ref' , snap.ref)
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