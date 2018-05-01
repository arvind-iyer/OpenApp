var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from "firebase/app";
var FirebaseDatabase = (function () {
    function FirebaseDatabase(afd) {
        this.afd = afd;
    }
    FirebaseDatabase.prototype.getMatches = function () {
        return this.afd.list('/matches/').valueChanges();
    };
    FirebaseDatabase.prototype.getStates = function () {
        return ["joined", "hosted", "full", "available"];
    };
    FirebaseDatabase.prototype.createMatch = function (match) {
        this.afd.list('/matches/').push(match);
    };
    FirebaseDatabase.prototype.deleteMatch = function (id) {
        this.afd.list('/matches/').remove(id);
    };
    FirebaseDatabase.prototype.updateMatch = function (id, match) {
        this.afd.list('/matches/').update(id, match);
    };
    FirebaseDatabase = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [AngularFireDatabase])
    ], FirebaseDatabase);
    return FirebaseDatabase;
}());
export { FirebaseDatabase };
var FirebaseAuth = (function () {
    function FirebaseAuth(afAuth, db) {
        var _this = this;
        this.afAuth = afAuth;
        this.db = db;
        this.authState = null;
        afAuth.authState.subscribe(function (auth) {
            _this.authState = auth;
        });
    }
    FirebaseAuth.prototype.login = function (email, password) {
        this.afAuth.auth.signInWithEmailAndPassword(email, password);
    };
    FirebaseAuth.prototype.signup = function (email, password) {
        this.afAuth.auth.createUserWithEmailAndPassword(email, password);
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
    };
    FirebaseAuth.prototype.loginGoogle = function () {
        this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    };
    FirebaseAuth = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [AngularFireAuth, FirebaseDatabase])
    ], FirebaseAuth);
    return FirebaseAuth;
}());
export { FirebaseAuth };
//# sourceMappingURL=firebase.js.map