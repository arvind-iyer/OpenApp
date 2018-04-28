import { Component } from '@angular/core';

import {
  Config,
  NavController,
  ModalController
} from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { Observable } from 'rxjs/Observable';
import { MatchDetailPage } from '../match-detail/match-detail';
import { FirebaseDatabase, FirebaseAuth } from '../../providers/firebase/firebase';


import { CreateMatchPage } from '../create-match/create-match'; 

@Component({
  selector: 'page-match-list',
  templateUrl: 'match-list.html'
})
export class MatchListPage {
  matches: Observable<any[]>;
  currentUser : any;
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public fbDb: FirebaseDatabase,
    public fbAuth: FirebaseAuth,
    public config: Config,
    public inAppBrowser: InAppBrowser
  ) {
    this.matches = fbDb.getMatches();
    console.log(this.matches);
    this.currentUser = fbAuth.getCurrentUser();
  }

  ionViewDidLoad() {
    console.log(this.matches);
  }


  goToMatchDetail(match: any) {
    console.log(match);
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
    var state : string;
    if(this.currentUser == null) {
      return;
    }
    if(match.host_id == this.currentUser.displayName) {
      
      state = "hosted";
    }
    else if(match.participants.length >= match.max_capacity) {
      state = "full";
    }
    else if(match.participants.indexOf(this.currentUser.uid) >= 0) {
      state = "joined";
    }
    else {
      state = "available";
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
