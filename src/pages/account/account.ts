import { Component } from '@angular/core';

import { AlertController, NavController } from 'ionic-angular';
import { FirebaseAuth } from '../../providers/firebase/firebase';

@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {
  user : any;
  constructor(public alertCtrl: AlertController, public nav: NavController, public fbAuth: FirebaseAuth) {
    this.user = fbAuth.currentUser;
  }

  ngAfterViewInit() {
  }

  updatePicture() {
    console.log('Clicked to update picture');
  }

  // Present an alert with the current username populated
  // clicking OK will update the username and display it
  // clicking Cancel will close the alert and do nothing
  changeUsername() {
    let alert = this.alertCtrl.create({
      title: 'Change Username',
      buttons: [
        'Cancel'
      ]
    });
    alert.addInput({
      name: 'username',
      value: this.username,
      placeholder: 'username'
    });
    alert.addButton({
      text: 'Ok',
      handler: (data: any) => { console.log(data);
      }
    });

    alert.present();
  }

  get username() : string {
    return this.fbAuth.currentUserDisplayName;
  }

  changePassword() {
    console.log('Clicked to change password');
    this.fbAuth.changePassword();
  }

  logout() {
    this.nav.setRoot('LoginPage');
  }

  support() {
    this.nav.push('SupportPage');
  }
}
