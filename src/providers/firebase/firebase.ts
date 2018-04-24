import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from "firebase/app";
import { Match } from "../../interfaces/match";

@Injectable()
export class FirebaseDatabase {

  constructor(public afd: AngularFireDatabase) { }

  getMatches() {
    return this.afd.list('/matches/').valueChanges();
  }

  createMatch(match : Match) {
    this.afd.list('/matches/').push(match);
  }

  deleteMatch(id) {
    this.afd.list('/matches/').remove(id);
  }

  updateMatch(id, match) {
    this.afd.list('/matches/').update(id, match);
  }
}


@Injectable()
export class FirebaseAuth {
  constructor(public afAuth: AngularFireAuth) {

  }

  login(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  signup(email: string, password: string) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  getCurrentUser() {
    return this.afAuth.auth.currentUser;
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  loginGoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  hasLoggedIn() {
    return this.getCurrentUser() != null;
  }

}