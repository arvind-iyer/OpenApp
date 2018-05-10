import { Component } from '@angular/core';

import {
  Config,
  NavController,
  ModalController
} from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { Observable } from 'rxjs/Observable';
import { MatchDetailPage } from '../match-detail/match-detail';
import { FirebaseDatabase, FirebaseAuth, FirebaseMessaging } from '../../providers/firebase/firebase';


import { CreateMatchPage } from '../create-match/create-match'; 
import { ScheduleFilterPage } from '../schedule-filter/schedule-filter';
import { Match } from '../../interfaces/match';
import {LoginPage} from '../login/login';

@Component({
  selector: 'page-match-list',
  templateUrl: 'match-list.html'
})
export class MatchListPage {
  matches: Observable<any[]>;
  shownMatches : Match[] = [];
  currentUser : any;
  excludeStates: any = [];
  
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public fbDb: FirebaseDatabase,
    public fbAuth: FirebaseAuth,
    public fbm: FirebaseMessaging,
    public config: Config,
    public inAppBrowser: InAppBrowser
  ) {
    this.fbAuth.afAuth.authState.subscribe(auth=> {
      if (auth) {
        this.matches = fbDb.getMatches();
        this.matches.subscribe(matches => {
          this.shownMatches = matches;
        })
        console.log(this.matches);
      } else {
        this.fbAuth.logout();
        this.navCtrl.push(LoginPage);
      }
    })
    this.currentUser = fbAuth.currentUser;
  }

  ionViewDidLoad() {
    console.log(this.matches);
  }


  goToMatchDetail(match: any) {
    console.log(match);
    this.navCtrl.push(MatchDetailPage, match);
  }
  
  getTime(timestamp) {
    var time = new Date(timestamp);
    return  (
        ("0" + time.getHours()).slice(-2)   + ":" + 
        ("0" + time.getMinutes()).slice(-2)
      );
  }

  presentFilter() {
    let modal = this.modalCtrl.create(ScheduleFilterPage, this.excludeStates);
    modal.present();

    modal.onWillDismiss((data: any[]) => {
      if (data) {
        this.excludeStates = data;
        console.log(this.excludeStates);
        this.updateMatchList();
      }
    });

  }

  updateMatchList() {
    this.shownMatches = [];
    this.matches.subscribe( (matches) =>  {
      matches.forEach(m => {
        var s = this.getState(m);
        if (this.excludeStates.indexOf(this.capitalize(s)) === -1) {
          this.shownMatches.push(m);
        }
      });
    });
  }
  private capitalize(s : string) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }
  getDate(timestamp) {
    return (new Date(timestamp)).toDateString();
  }


  getState(match) {
    var state : string;
    if(this.currentUser == null) {
      return;
    }
    if(match.participants[0] == this.currentUser.uid) {
      state = "hosted";
    }
    else if(match.participants.indexOf(this.currentUser.uid) >= 0) {
      state = "joined";
    }
    else if(match.participants.length >= match.max_capacity) {
      state = "full";
    }
    else {
      state = "available";
    }
    if(match) {
      match.state = state;
    }
    return state;
  }

  openCreateMatchModal() {
    let cmModal = this.modalCtrl.create(CreateMatchPage);
    cmModal.present();
  }

  deleteMatch(match) {
    let ms : any[] = [];
    this.matches.subscribe(data => {
      ms = data;
      let x = ms.filter(function(x){
        return x.start_time == match.start_time && x.end_time == match.end_time
      });
      console.log(x.length > 0 && x.keys().next().value);
    })
  }
}
