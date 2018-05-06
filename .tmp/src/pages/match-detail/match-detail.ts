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

  
  ionViewWillEnter() {
  }
}
