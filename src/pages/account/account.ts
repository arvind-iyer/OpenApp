import { Component } from '@angular/core';
// import { Camera } from 'ionic-native';
import { AlertController, NavController } from 'ionic-angular';
import { FirebaseAuth } from '../../providers/firebase/firebase';

@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})

export class AccountPage {
  user : any;
  // private imageSrc: string;
  constructor(public alertCtrl: AlertController, public nav: NavController, public fbAuth: FirebaseAuth) {
    this.user = fbAuth.currentUser;
  }

  // private openGallery(): void {
  //   console.log('Clicked to update picture')
  //   let cameraOptions = {
  //     sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
  //     destinationType: Camera.DestinationType.FILE_URI,      
  //     quality: 100,
  //     targetWidth: 1000,
  //     targetHeight: 1000,
  //     encodingType: Camera.EncodingType.JPEG,      
  //     correctOrientation: true
  //   }
  
  //   Camera.getPicture(cameraOptions)
  //     .then(file_uri => this.imageSrc = file_uri, 
  //     err => console.log(err));   
  // }

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
}
