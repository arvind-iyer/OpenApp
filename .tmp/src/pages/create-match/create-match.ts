import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Match } from '../../interfaces/match';
/**
 * Generated class for the CreateMatchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-match',
  templateUrl: 'create-match.html',
})
export class CreateMatchPage {
  match : Match = {
    curr_capacity: 0,
    host_id: "",
    location: "",
    max_capacity: 0,
    start_time: 0,
    end_time: 0,
    participants: [],
    skill_level: 0,
    sport: "",
    date : ""
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
     
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateMatchPage');
  }

  
}
