'use strict';

const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();


exports.sendMatchJoinedNotification = functions.database.ref('/matches/{match_id}/participants/{uid}')
    .onCreate((change, context) => {
        const match_id = context.params.match_id;
        const uid = context.params.uid;
        

        if (!change.after.val) {
            return console.log('User ', uid, ' joined game ', match_id);
        }
        console.log("We have a new participant: ", uid, ' for match', match_id);        
        const getParticipantProfile = admin.auth().getUser(uid);
        const getDeviceTokensPromise = admin.database().ref("/users/${uid}/notifTokens").once('value');
        //snapshot of the user's tokens
        let tokensSnapshot;
        //array containing all the user's tokens
        let tokens;

        return Promise.all([getDeviceTokensPromise, getParticipantProfile]).then(results=> {
            tokensSnapshot = results[0];
            const participant = results[1];

            if(!tokensSnapshot.hasChildren()) {
                return console.log("There are no notification tokens to send to");
            }

            console.log("There are ", tokensSnapshot.numChildren(), 'tokens to send notifications to');
            console.log("Fetched participant profile", participant);

            //Notification details
            const payload = {
                notification: {
                    title: "New player joined",
                    body: "${participant.displayName} has now joined the game",
                }
            };

            // Listing all tokens as an array
            tokens = Object.keys(tokensSnapshot.val());

            //Send notification to all keys
            return admin.messaging().sendToDevice(tokens, payload);
        }).then((response) => {
            //For each message, check if there is an error
            const tokensToRemove = [];
            response.results.forEach((result, index) => {
                const error = result.error;
                if (error) {
                    console.error("Failure sending notification to", tokens[index], error);
                    //Cleanup unused tokens
                    if(error.code == 'messaging/invalid-registration-token' || error.code == 'messaging/registration-token-not-registered') {
                        tokensToRemove.push(tokensSnapshot.ref.child(tokens[index]).remove());
                    }
                }
            });
            return Promise.all(tokensToRemove);
        });
});