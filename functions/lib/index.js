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
exports.newMatchNotification = functions.database.ref('matches/{match_id}')
    .onCreate((snapshot, context) => __awaiter(this, void 0, void 0, function* () {
    const data = snapshot.val();
    // const match_id = context.params.match_id;
    const host_id = data.participants[0];
    //Notification content
    const payload = {
        notification: {
            title: "New match open",
            body: "New ${data.sport} match created",
            icon: "https://arvind-iyer.github.io/OpenApp/assets/icon.png"
        }
    };
    //ref to the device collection for the user
    const db = admin.database();
    const devicesRef = db.ref("users/" + host_id + "/notifTokens").once('value');
    let tokens;
    yield devicesRef.then(function (snap) {
        tokens = snap.val();
    });
    return admin.messaging().sendToDevice(tokens, payload);
}));
//# sourceMappingURL=index.js.map