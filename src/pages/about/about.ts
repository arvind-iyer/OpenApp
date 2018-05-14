import { FirebaseAuth } from '../../providers/firebase/firebase';
import { Component } from '@angular/core';
import { PopoverController } from 'ionic-angular';
import { AboutSettings } from '../../interfaces/match';
import { PopoverPage } from '../about-popover/about-popover';
import { TutorialPage } from './../tutorial/tutorial';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  data: AboutSettings = {
  };
  constructor(public popoverCtrl: PopoverController, private fbAuth : FirebaseAuth, public navCtrl: NavController) {
    const uid = this.fbAuth.currentUserId;
    this.fbAuth.db.afd.object("users/" + uid + "/about").valueChanges().subscribe(d => {
      this.data = d;
      console.log(d);
    });
   }

  presentPopover(event: Event) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({ ev: event });
  }

  updateInfo() {
    console.log(this.data);
    const uid = this.fbAuth.currentUserId;
    this.fbAuth.db.afd.object("users/" + uid).set({about: this.data});
    this.fbAuth.updateProfile(this.data.name);
  }
  goNextPage(){
    this.navCtrl.setRoot(TutorialPage);
  }

}
