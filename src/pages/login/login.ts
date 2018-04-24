import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NavController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public fbAuth: FirebaseAuth) { 
  }

  onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.fbAuth.login(this.login.email, this.login.password);
      this.navCtrl.push(TabsPage);
    }
  }

  onSignup() {
    this.navCtrl.push(SignupPage);
  }
}