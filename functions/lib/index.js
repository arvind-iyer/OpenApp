"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
exports.newPlayerNotification = functions.database.ref("matches/{match_id}")
    .onUpdate((change, context) => __awaiter(this, void 0, void 0, function* () {
    if (change.before.exists()) {
        // return if item just created
        return null;
    }
    if (!change.after.exists()) {
        // return if item deleted
        return null;
    }
    const prevData = change.before.val();
    const currentData = change.after.val();
    if (currentData.participants.length > prevData.participants.length) {
        // new participant added
        const host_id = currentData.participants[0];
        const p_id = currentData.participants[currentData.participants.length - 1];
        const devicesRef = admin.database().ref("users/" + host_id + "/notifTokens").once('value');
        let tokens;
        yield devicesRef.then(function (snap) {
            tokens = snap.val();
        });
        //Notification content
        const payload = {
            notification: {
                title: "New player in your game",
                body: "${participantUser.displayName} has joined",
                icon: "https://arvind-iyer.github.io/OpenApp/assets/icon.png"
            }
        };
        return admin.messaging().sendToDevice(tokens, payload);
    }
    console.log(currentData.participants);
    return null;
}));
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
//# sourceMappingURL=index.js.map