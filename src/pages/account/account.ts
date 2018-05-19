import { Component } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';
import { FirebaseAuth } from '../../providers/firebase/firebase';

@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})

export class AccountPage {
  user : any;
  constructor(public alertCtrl: AlertController, 
    public nav: NavController, 
    public fbAuth: FirebaseAuth) {
    this.user = fbAuth.currentUser;
  }

  // updatePicture() {
  //   console.log('Clicked to update picture');
  // }
  

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
      handler: (data: any) => { 
        this.fbAuth.updateProfile(data.username, "");
      }
    });

    alert.present();
  }

  get username() : string {
    return this.fbAuth.currentUserDisplayName;
  }

  changePassword() {

  }

  logout() {
    this.fbAuth.logout();
    
  }

  support() {
    this.nav.push('SupportPage');
  }

  openGallery() {
    console.log('Clicked to update picture');
  }
}
