import { Component } from '@angular/core';

import {
  Config,
  NavController
} from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { Observable } from 'rxjs/Observable';
import { MatchDetailPage } from '../match-detail/match-detail';
import { FirebaseDatabase } from '../../providers/firebase/firebase';

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
    public config: Config,
    public inAppBrowser: InAppBrowser
  ) {
    this.matches = fbDb.getMatches();
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

  goToMatchTwitter(match: any) {
    this.inAppBrowser.create(
      `https://twitter.com/${match.host_id}`,
      '_blank'
    );
  }

  openmatchShare() {
  }

  openContact() {
  }
}
