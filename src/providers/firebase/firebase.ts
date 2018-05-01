// import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from "firebase/app";
import { Match } from "../../interfaces/match";
import { Events } from "ionic-angular";

@Injectable()
export class FirebaseDatabase {
  storage: AngularFireStorageReference;
  constructor(public afd: AngularFireDatabase, public afs: AngularFireStorage ) {
    this.storage = afs.ref("users")
   }

  getMatches() {
    return this.afd.list('/matches/').valueChanges();
  }
  getStates() {
    return ["joined", "hosted", "full", "available"];
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

  uploadProfileImage(user_id: string, file: any) {
    let task : AngularFireUploadTask = this.storage.child('${user_id}/profile_picture').put(file);
    return task; 

    // Use uploadProfileImage(x,y).downloadURL() to get file URL
  }
}


@Injectable()
export class FirebaseAuth {
  authState : any = null
  constructor(private events: Events, public afAuth: AngularFireAuth, public db: FirebaseDatabase) {
    afAuth.authState.subscribe( (auth)=> { 
      this.authState = auth
    });
  }

  login(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password);
    this.events.publish('user:login', this.currentUser, Date.now());    
  }

  signup(email: string, password: string) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password);
    this.events.publish('user:signup', this.currentUser, Date.now());
  }

  get authenticated() : boolean {
    return this.authState !== null;
  }
  get currentUser() : any {
    return this.authenticated ? this.authState : null;
  }
  get currentUserObservable() : any {
    return this.afAuth.authState;
  }
  get currentUserId() : string {
    return this.authenticated ? this.authState.uid : '';
  }
  get currentUserDisplayName() : string {
    if (!this.authState) {return 'Guest'; }
    else { return this.authState['displayName'] || 'User has not set name'; }
  }

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider()
    return this.socialSignIn(provider);
  }

  private socialSignIn(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) =>  {
          this.authState = credential.user
          this.updateUserData()
      })
      .catch(error => console.log(error));
  }
  
  private updateUserData(): void {
    // Writes user name and email to realtime db
    // useful if your app displays information about users or for admin features
      let path = `users/${this.currentUserId}`; // Endpoint on firebase
      let data = {
                    email: this.authState.email,
                    name: this.authState.displayName
                  }
  
      this.db.afd.object(path).update(data)
      .catch(error => console.log(error));
  
  }
  
  logout() {
    this.afAuth.auth.signOut();
    this.events.publish('user:logout', this.currentUser, Date.now());    
  }

  loginGoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  updatePassword (newPass: string) {
    this.afAuth.auth.currentUser.updatePassword(newPass)
  }

  updateProfile( newUserName: string, photoUrl: string) {
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
  }
}
