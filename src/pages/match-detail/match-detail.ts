import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Match } from '../../interfaces/match';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-match-detail',
  templateUrl: 'match-detail.html'
})
export class MatchDetailPage {
  match: Match;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.match = navParams.data;
    if (!this.match.start_time) {
      navCtrl.push(LoginPage);
    }
    console.log(this.match.participants.length);
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
      return "Any"
    }
  }

  ionViewWillEnter() {
  }
}
