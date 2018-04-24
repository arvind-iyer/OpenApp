import { Component } from '@angular/core';

import {
  Config,
  NavController
} from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { Observable } from 'rxjs/Observable';
import { MatchDetailPage } from '../match-detail/match-detail';
import { FirebaseDatabase, FirebaseAuth } from '../../providers/firebase/firebase';

import { SessionDetailPage } from '../session-detail/session-detail';



@Component({
  selector: 'page-match-list',
  templateUrl: 'match-list.html'
})
export class MatchListPage {
  matches: Observable<any[]>;

  constructor(
    public navCtrl: NavController,
    public fbDb: FirebaseDatabase,
    public fbAuth: FirebaseAuth,
    public config: Config,
    public inAppBrowser: InAppBrowser
  ) {
    this.matches = fbDb.getMatches();
    console.log(this.matches);
  }

  ionViewDidLoad() {
    console.log(this.matches);
  }

  goToSessionDetail(session: any) {
    this.navCtrl.push(SessionDetailPage, { sessionId: session.id });
  }

  goToMatchDetail(match: any) {
    this.navCtrl.push(MatchDetailPage, { matchId: match.id });
  }
  
  getTime(timestamp) {
    var time = new Date(timestamp);
    return  (
        ("0" + time.getHours()).slice(-2)   + ":" + 
        ("0" + time.getMinutes()).slice(-2)
      );
  }

  getDate(timestamp) {
    return (new Date(timestamp)).toDateString();
  }

  getState(match) {
    var current_user= this.fbAuth.getCurrentUser();
    if(match.host_id == current_user.displayName) {
      return "hosted";
    }
    else if(match.participants.length >= match.max_capacity) {
      return "full";
    }
    else if(match.participants.indexOf(current_user.uid) >= 0) {
      return "joined";
    }
    else {
      return "available";
    }
  }
}
