import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-match-detail',
  templateUrl: 'match-detail.html'
})
export class MatchDetailPage {
  match: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter() {
  }
}
