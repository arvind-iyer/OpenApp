import { Component } from '@angular/core';

import { NavParams, ViewController } from 'ionic-angular';

import { FirebaseDatabase } from '../../providers/firebase/firebase';


@Component({
  selector: 'page-schedule-filter',
  templateUrl: 'schedule-filter.html'
})
export class ScheduleFilterPage {
  states: Array<{name: string, isChecked: boolean}> = [];

  constructor(
    public fbd: FirebaseDatabase,
    public navParams: NavParams,
    public viewCtrl: ViewController
  ) {
    // passed in array of track names that should be excluded (unchecked)
    let excludedTrackNames = this.navParams.data;
    console.log(excludedTrackNames);
    

    this.fbd.getStates().forEach(stateName => {
        this.states.push({
          name: stateName.charAt(0).toUpperCase() + stateName.slice(1),
          isChecked: (excludedTrackNames.indexOf(this.capitalize(stateName)) === -1)
        });
    });
  }

  private capitalize(s : string) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  resetFilters() {
    // reset all of the toggles to be checked
    this.states.forEach(track => {
      track.isChecked = true;
    });
  }

  applyFilters() {
    // Pass back a new array of track names to exclude
    let excludedTrackNames = this.states.filter(c => !c.isChecked).map(c => c.name);
    this.viewCtrl.dismiss(excludedTrackNames);
  }

  dismiss(data?: any) {
    // using the injected ViewController this page
    // can "dismiss" itself and pass back data
    this.viewCtrl.dismiss(data);
  }
}
