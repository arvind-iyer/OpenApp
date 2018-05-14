import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NavController, ToastController, Events, MenuController } from 'ionic-angular';
import { FirebaseAuth } from '../../providers/firebase/firebase';

import { UserOptions } from '../../interfaces/user-options';

import { TabsPage } from '../tabs-page/tabs-page';
import { SignupPage } from '../signup/signup';


@Component({
  selector: 'page-user',
  templateUrl: 'login.html'
})
export class LoginPage {
  login: UserOptions = { email: '', password: '' };
  submitted = false;

  constructor(public navCtrl: NavController, 
    public fbAuth: FirebaseAuth, 
    private toastCtrl : ToastController, 
    private menu: MenuController,
    private events: Events) {
    this.checkLoggedIn();
     
  }

  onPageDidEnter() {
    this.menu.enable(false);
  }

  onPageDidLeave() {
    this.menu.enable(true);
  }

  onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.fbAuth.login(this.login.email, this.login.password);
      this.navCtrl.push(TabsPage);
    }
  }
  ionViewDidLoad() {

    this.menu.enable(false);
    
  }

  async checkLoggedIn() {
    const user  = await this.fbAuth.isLoggedIn();
    if (user) {
      this.toastCtrl.create({
        message: 'Already Logged In',
        duration: 1500,
        position: 'bottom'
      }).present();
      this.events.publish('user:login', user, Date.now());
      // this.navCtrl.push(TabsPage);
    }
  }

  onSignup() {
    this.navCtrl.push(SignupPage);
  }
}
