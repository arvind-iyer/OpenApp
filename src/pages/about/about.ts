import { FirebaseAuth } from '../../providers/firebase/firebase';
import { Component } from '@angular/core';

import { AboutSettings } from '../../interfaces/match';
import { TabsPage } from '.././tabs-page/tabs-page';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  data: AboutSettings = {
  };
  constructor(private fbAuth : FirebaseAuth, public navCtrl: NavController) {
    const uid = this.fbAuth.currentUserId;
    this.fbAuth.db.afd.object("users/" + uid + "/about").valueChanges().subscribe(d => {
      this.data = d;
      console.log(d);
    });
   }
  updateInfo() {
    console.log(this.data);
    const uid = this.fbAuth.currentUserId;
    this.fbAuth.db.afd.object("users/" + uid).set({about: this.data});
    this.fbAuth.updateProfile(this.data.name);
    
  }
  goNextPage(){
    this.navCtrl.push(TabsPage);
  }


}
