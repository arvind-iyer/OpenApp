import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NavController } from 'ionic-angular';

import { FirebaseAuth } from '../../providers/firebase/firebase';

import { UserOptions } from '../../interfaces/user-options';

import { TabsPage } from '../tabs-page/tabs-page';


@Component({
  selector: 'page-user',
  templateUrl: 'signup.html'
})
export class SignupPage {
  signup: UserOptions = { email: '', password: '' };
  submitted = false;

  constructor(public navCtrl: NavController, public fbAuth: FirebaseAuth) {}

  onSignup(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.fbAuth.signup(this.signup.email, this.signup.password);
      // this.fbAuth.login(this.signup.email, this.signup.password);
      this.navCtrl.push(TabsPage);
    }
  }
}
