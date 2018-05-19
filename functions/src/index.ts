import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

exports.newPlayerNotification = functions.database.ref("matches/{match_id}")
    .onUpdate(async (change, context) => {
        if(change.before.exists()) {
            // return if item just created
            return null;
        }
        if(!change.after.exists()) {
            // return if item deleted
            return null;
        }
        const prevData = change.before.val();
        const currentData = change.after.val();
        
        if (currentData.participants.length > prevData.participants.length) {
            // new participant added
            
            const host_id = currentData.participants[0];
            const p_id = currentData.participants[currentData.participants.length - 1];
            const devicesRef = admin.database().ref("users/"+host_id+ "/notifTokens").once('value');
            let tokens;
            await devicesRef.then(function(snap) {
                tokens = snap.val();
            });

            //Notification content
            const payload = {
                notification : {
                    title: "New player in your game",
                    body: "${participantUser.displayName} has joined",
                    icon: "https://arvind-iyer.github.io/OpenApp/assets/icon.png"
                }
            };

            return admin.messaging().sendToDevice(tokens, payload);
        }
        console.log(currentData.participants);
        return null;
    })


// exports.newPlayerNotification = functions.database.ref('matches/{match_id}/participants/{participant_id}')
//     .onCreate(async (snapshot, context) => {
//         const data = snapshot.val();
//         const match_id = context.params.match_id;
//         console.log(data.participants);
//         const host_id = data.participants[0];
//         const participant_id = context.params.participant_id;
//         //ref to the device collection for the user
//         const db = admin.database();
//         const participantRef = admin.auth().getUser(participant_id);
//         let participantUser;
//         await participantRef.then(pSnap => {
//             participantUser = pSnap;
//         });

//         // await db.ref("matches/" + match_id).once('value').then(mSnap => {
//         //     host_id = mSnap.val().participants.values()[0];
//         // })

//         const devicesRef = db.ref("users/"+host_id+ "/notifTokens").once('value');
//         let tokens;
//         await devicesRef.then(function(snap) {
//             tokens = snap.val();
//         });

//         //Notification content
//         const payload = {
//             notification : {
//                 title: "New player in your game",
//                 body: "${participantUser.displayName} has joined",
//                 icon: "https://arvind-iyer.github.io/OpenApp/assets/icon.png"
//             }
//         };
//         return admin.messaging().sendToDevice(tokens, payload);
        
//     })