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
    function FirebaseAuth(afAuth) {
        this.afAuth = afAuth;
    }
    FirebaseAuth.prototype.login = function (email, password) {
        this.afAuth.auth.signInWithEmailAndPassword(email, password);
    };
    FirebaseAuth.prototype.signup = function (email, password) {
        this.afAuth.auth.createUserWithEmailAndPassword(email, password);
    };
    FirebaseAuth.prototype.getCurrentUser = function () {
        return this.afAuth.auth.currentUser;
    };
    FirebaseAuth.prototype.logout = function () {
        this.afAuth.auth.signOut();
    };
    FirebaseAuth.prototype.loginGoogle = function () {
        this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    };
    FirebaseAuth.prototype.hasLoggedIn = function () {
        return this.getCurrentUser() != null;
    };
    FirebaseAuth = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [AngularFireAuth])
    ], FirebaseAuth);
    return FirebaseAuth;
}());
export { FirebaseAuth };
//# sourceMappingURL=firebase.js.map