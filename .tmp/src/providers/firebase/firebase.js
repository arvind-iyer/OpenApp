var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireStorage } from 'angularfire2/storage';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from "firebase/app";
import { Events } from "ionic-angular";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import 'rxjs/add/operator/take';
var FirebaseDatabase = (function () {
    function FirebaseDatabase(afd, afs) {
        this.afd = afd;
        this.afs = afs;
        this.storage = afs.ref("users");
    }
    FirebaseDatabase.prototype.getMatches = function () {
        return this.afd.list('/matches/', function (ref) { return ref.orderByChild("start_time"); }).valueChanges();
    };
    FirebaseDatabase.prototype.getStates = function () {
        return ["joined", "hosted", "full", "available"];
    };
    FirebaseDatabase.prototype.createMatch = function (match) {
        var promise = this.afd.list('/matches/').push(match);
        match.id = promise.key;
        this.afd.list('/matches/').update(promise.key, match);
    };
    FirebaseDatabase.prototype.deleteMatch = function (id) {
        this.afd.list('/matches/').remove(id);
    };
    FirebaseDatabase.prototype.updateMatch = function (match) {
        this.afd.list('/matches/').update(match.id, match);
    };
    FirebaseDatabase.prototype.uploadProfileImage = function (user_id, file) {
        console.log(user_id); // just to suppress the non-usage error
        var task = this.storage.child('${user_id}/profile_picture').put(file);
        return task;
        // Use uploadProfileImage(x,y).downloadURL() to get file URL
    };
    FirebaseDatabase = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [AngularFireDatabase, AngularFireStorage])
    ], FirebaseDatabase);
    return FirebaseDatabase;
}());
export { FirebaseDatabase };
var FirebaseAuth = (function () {
    function FirebaseAuth(events, afAuth, db) {
        var _this = this;
        this.events = events;
        this.afAuth = afAuth;
        this.db = db;
        this.authState = null;
        afAuth.authState.subscribe(function (auth) {
            _this.authState = auth;
        });
    }
    FirebaseAuth.prototype.login = function (email, password) {
        this.afAuth.auth.signInWithEmailAndPassword(email, password);
        this.events.publish('user:login', this.currentUser, Date.now());
    };
    FirebaseAuth.prototype.signup = function (email, password) {
        this.afAuth.auth.createUserWithEmailAndPassword(email, password);
        this.events.publish('user:signup', this.currentUser, Date.now());
    };
    Object.defineProperty(FirebaseAuth.prototype, "authenticated", {
        get: function () {
            return this.authState !== null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirebaseAuth.prototype, "currentUser", {
        get: function () {
            return this.authenticated ? this.authState : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirebaseAuth.prototype, "currentUserObservable", {
        get: function () {
            return this.afAuth.authState;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirebaseAuth.prototype, "currentUserId", {
        get: function () {
            return this.authenticated ? this.authState.uid : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirebaseAuth.prototype, "currentUserDisplayName", {
        get: function () {
            if (!this.authState) {
                return 'Guest';
            }
            else {
                return this.authState['displayName'] || 'User has not set name';
            }
        },
        enumerable: true,
        configurable: true
    });
    FirebaseAuth.prototype.googleLogin = function () {
        var provider = new firebase.auth.GoogleAuthProvider();
        return this.socialSignIn(provider);
    };
    FirebaseAuth.prototype.socialSignIn = function (provider) {
        var _this = this;
        return this.afAuth.auth.signInWithPopup(provider)
            .then(function (credential) {
            _this.authState = credential.user;
            _this.updateUserData();
        })
            .catch(function (error) { return console.log(error); });
    };
    FirebaseAuth.prototype.updateUserData = function () {
        // Writes user name and email to realtime db
        // useful if your app displays information about users or for admin features
        var path = "users/" + this.currentUserId; // Endpoint on firebase
        var data = {
            email: this.authState.email,
            name: this.authState.displayName
        };
        this.db.afd.object(path).update(data)
            .catch(function (error) { return console.log(error); });
    };
    FirebaseAuth.prototype.logout = function () {
        this.afAuth.auth.signOut();
        this.events.publish('user:logout', this.currentUser, Date.now());
    };
    FirebaseAuth.prototype.loginGoogle = function () {
        this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    };
    FirebaseAuth.prototype.updatePassword = function (newPass) {
        this.afAuth.auth.currentUser.updatePassword(newPass);
    };
    FirebaseAuth.prototype.updateProfile = function (newUserName, photoUrl) {
        if (newUserName == "") {
            newUserName = this.currentUserDisplayName;
        }
        if (photoUrl == "") {
            photoUrl = this.afAuth.auth.currentUser.photoURL;
        }
        this.afAuth.auth.currentUser.updateProfile({
            displayName: newUserName,
            photoURL: photoUrl
        });
    };
    FirebaseAuth = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Events, AngularFireAuth, FirebaseDatabase])
    ], FirebaseAuth);
    return FirebaseAuth;
}());
export { FirebaseAuth };
var FirebaseMessaging = (function () {
    function FirebaseMessaging(db, auth) {
        this.db = db;
        this.auth = auth;
        this.currentMessage = new BehaviorSubject(null);
        // this.m = firebase.messaging();
    }
    FirebaseMessaging.prototype.updateToken = function (token) {
        var _this = this;
        this.auth.authState.take(1).subscribe(function (user) {
            if (!user)
                return;
            var data = (_a = {}, _a[user.uid] = token, _a);
            _this.db.object('notifTokens/').update(data);
            var _a;
        });
    };
    FirebaseMessaging.prototype.getPermission = function () {
        var _this = this;
        this.m.requestPermission()
            .then(function () {
            console.log('Notification permission granted');
            return _this.m.getToken();
        })
            .then(function (token) {
            console.log(token);
            _this.updateToken(token);
        })
            .catch(function (err) {
            console.log("Unable to get permission to notify", err);
        });
    };
    FirebaseMessaging.prototype.receiveMessage = function () {
        var _this = this;
        this.m.onMessage(function (payload) {
            console.log("Message received: ", payload);
            _this.currentMessage.next(payload);
        });
    };
    FirebaseMessaging = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [AngularFireDatabase, AngularFireAuth])
    ], FirebaseMessaging);
    return FirebaseMessaging;
}());
export { FirebaseMessaging };
//# sourceMappingURL=firebase.js.map