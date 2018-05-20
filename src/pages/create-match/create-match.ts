import { Match } from './../../interfaces/match';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { Match } from '../../interfaces/match';
import { FirebaseDatabase, FirebaseAuth } from '../../providers/firebase/firebase';

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
    host_id: "",
    location: "",
    max_capacity: 0,
    start_time: 0,
    end_time: 0,
    participants: [],
    skill_level: 0,
    sport: "",
    state: "",
    title: ""
  };

  start_time : any;
  end_time : string = "";
  date : string = "";
  currentUser : any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public fbAuth : FirebaseAuth, 
    public fbDb : FirebaseDatabase) {
      this.currentUser = this.fbAuth.currentUser;
      console.log(this.currentUser);
      
      var start_date = new Date();
      this.match.start_time = start_date.getTime();
      start_date.setHours(start_date.getHours() + 1);
      this.match.end_time = start_date.getTime();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateMatchPage');
  }

  setDate() {
    let mDate = new Date(this.date);
    var f = this.start_time.indexOf(":");
    let hh = parseInt(this.start_time.substr(0, f));
    let mm = parseInt(this.start_time.substr(f+1));
    mDate.setHours(hh);
    mDate.setMinutes(mm);
    this.match.start_time = mDate.getTime();
    
    console.log(this.date, mDate, this.match.start_time, hh, mm);
    
    f = this.end_time.indexOf(":");
    hh = parseInt(this.end_time.substr(0, f));
    mm = parseInt(this.end_time.substr(f+1));
    mDate.setHours(hh);
    mDate.setMinutes(mm);
    this.match.end_time = mDate.getTime();

  }

  validateMatch() {
    return (this.match.start_time > 0 &&
      this.match.end_time > this.match.start_time && 
      this.match.location != "" &&
      this.match.max_capacity > 0);
  }

  createMatch() {
    this.setDate();
    this.match.host_id = this.currentUser.uid;
    this.match.participants.push(this.currentUser.uid);

    console.log(this.match);
    if (this.validateMatch()){
      console.log("Pushing to firebase");
      this.fbDb.createMatch(this.match);
    }

    this.navCtrl.pop();
  }

typeSport(){
  if(this.match.sport == "Basketball"){
    return 1;
  }
  else if(this.match.sport == "Football"){
    return 2;
  }
  else if(this.match.sport == "Squash"){
    return 3;
  }
  else if(this.match.sport == "Table-Tennis"){
    return 4;
  }
  else if(this.match.sport == "Tennis"){
    return 5;
  }
}

}
