import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

exports.newMatchNotification = functions.database.ref('matches/{match_id}')
    .onCreate(async (snapshot, context) => {
        const data = snapshot.val();
        // const match_id = context.params.match_id;
        const host_id = data.participants[0];

        //Notification content
        const payload = {
            notification : {
                title: "New match open",
                body: "New ${data.sport} match created",
                icon: "https://arvind-iyer.github.io/OpenApp/assets/icon.png"
            }
        }

        //ref to the device collection for the user
        const db = admin.database();
        const devicesRef = db.ref("users/"+host_id+ "/notifTokens").once('value');
        let tokens;
        await devicesRef.then(function(snap) {
            tokens = snap.val();
        });
        return admin.messaging().sendToDevice(tokens, payload);
        
    })