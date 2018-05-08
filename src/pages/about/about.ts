import { FirebaseAuth } from '../../providers/firebase/firebase';
import { Component } from '@angular/core';
import { PopoverController } from 'ionic-angular';
import { AboutSettings } from '../../interfaces/match';
import { PopoverPage } from '../about-popover/about-popover';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  data: AboutSettings = {
  };
  constructor(public popoverCtrl: PopoverController, private fbAuth : FirebaseAuth) {
    this.data.name = this.fbAuth.currentUserDisplayName;
   }

  presentPopover(event: Event) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({ ev: event });
  }

  updateInfo() {
    console.log(this.data);

  }
}
