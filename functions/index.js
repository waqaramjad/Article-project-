const functions = require('firebase-functions');
var fetch = require('node-fetch')

const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase);

exports.sendPushNotification = functions.database.ref('articles/').onCreate((snap, context) => {

    // console.log( event.datat)
    // console.log(event)
    // const root = event.data.ref.root
// console.log('context')
console.log( 'context', context)
  
  console.log('snap.val()' ,snap.val() )
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
  return admin.database().ref('users/').once('value').then(  (snapshot) => {
        
        // console.log( 'snapshot' )
        console.log( 'snapshot' , snapshot)
        console.log('snapshot.val()' ,snapshot.val() )
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
            var expoToken = mySnap[key].expoTokens

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
                    "body": "New Note Added"
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