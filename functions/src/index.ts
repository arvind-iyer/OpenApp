import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

exports.newPlayerNotification = functions.database.ref("matches/{match_id}/participants/{index}")
    .onCreate(async (snapshot, context) => {
        const data = snapshot.val();         
        const match_id = context.params.match_id;
        const participantsRef = admin.database().ref("matches/" + match_id + "/participants").once('value');
        let participants;
        await participantsRef.then((snap) => {
            participants = snap.val();
        });

        const newP_id = participants[participants.length - 1];
        const host_id = participants[0];

        const devicesRef = admin.database().ref("users/"+host_id+ "/notifTokens").once('value');
        let tokens;
        await devicesRef.then(function(snap) {
            tokens = snap.val();
        });
        if (!tokens) {
            tokens = ["f4VJ0QIWC6s:APA91bGoCR_5ZQgUths6rY3zGhhorejucVxDEwek74yAG00pIrnyG66aVbLNVZrmPm_Hgs2F-2MgXHLuLVtl5Say77F6hSqPF0rHlSjE5ePSh4gZ0JTpehUW_CG0TzBgDQR2Yhz7ROpJ"];
        }
        //Notification content
        const payload = {
            notification : {
                title: "New player in your game",
                body: newP_id + " has joined",
                icon: "https://arvind-iyer.github.io/OpenApp/assets/icon.png"
            }
        };

        return admin.messaging().sendToDevice(tokens, payload);
        // }
        // console.log(currentData.participants);
        // return null;
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