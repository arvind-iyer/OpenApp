import { FirebaseDatabase, FirebaseAuth } from './../../providers/firebase/firebase';
import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { Match, AboutSettings } from '../../interfaces/match';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-match-detail',
  templateUrl: 'match-detail.html'
})

export class MatchDetailPage {
  match: Match;
  host: AboutSettings = {name: ""};
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private toast: ToastController,
    private db: FirebaseDatabase,
    private au: FirebaseAuth) {
    this.match = navParams.data;
    this.checkLoggedIn();
    console.log(this.match.participants.length);
    this.db.afd.object("users/" + this.match.participants[0] + "/about").valueChanges().subscribe(
      data => {
        this.host = data;
      });
  }

  async checkLoggedIn() {
    const user = await this.au.isLoggedIn();
    if (user == null) {
      this.au.logout();
      this.navCtrl.push(LoginPage);
    }
  }

  leaveMatch() {
    console.log("TODO: Leave Match");
    const uid = this.au.currentUserId;
    this.match.participants = this.match.participants.filter(p => p !== uid);
    console.log(this.match, uid);
    // this.db.updateMatch(this.match);
    this.toast.create({
      message: 'Exited game',
      duration: 1500,
      position: 'bottom'
    }).present();
    this.match.state = "available";
  }

  openWhatsapp() {
    console.log(this.host.phone);
    window.open("whatsapp://send?text=Hello&phone=" + this.host.phone, "_system", "location=yes");
  }

  deleteMatch() { 
    console.log("TODO: Delete match");
    this.db.deleteMatch(this.match);
    this.toast.create({
      message: 'Deleted game',
      duration: 1500,
      position: 'bottom'
    }).present();
    this.navCtrl.pop();
  }

  getTime(timestamp) {
    var time = new Date(timestamp);
    return  (
        ("0" + time.getHours()).slice(-2)   + ":" + 
        ("0" + time.getMinutes()).slice(-2)
      );
  }


  getDate(timestamp) {
    var time = new Date(timestamp);
    return time.toDateString();
  }

  hasSpots(match: Match) {
    return match.max_capacity - match.participants.length; 
  }
  canJoin() {
    return !(this.match.state == "joined" || this.match.state == "hosted")
  }
  joinMatch() {
    const userid = this.au.currentUserId;
    if (this.match.participants.indexOf(userid) < 0) {
      this.match.participants.push(userid);
      this.db.updateMatch(this.match);
      console.log("joined game");
      this.match.state = "joined";
    }
    else {
      console.log("already joined");
    }
  }

  skillLevel(match) {
    if(match.skill_level == 1) {
      return "Beginner";
    }
    else if(match.skill_level == 2){
      return "Intermediate";
    }
    else if(match.skill_level == 3){
      return "Professional";
    }
    else {
      return "Open to All"
    }
  }

  ionViewWillEnter() {
    console.log(this.match.state);
  }
}
