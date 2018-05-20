import { Component, ViewChild, ElementRef } from '@angular/core';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
} from '@ionic-native/google-maps';


import { Platform } from 'ionic-angular';


// declare var google: any;


@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {

  @ViewChild('mapCanvas') mapElement: ElementRef;
  constructor(public platform: Platform) {
  }

  ionViewDidLoad() {

  //     // this.confData.getMap().subscribe((mapData: any) => {
  //     //   let mapEle = this.mapElement.nativeElement;

  //     //   let map = new google.maps.Map(mapEle, {
  //     //     center: mapData.find((d: any) => d.center),
  //     //     zoom: 16
  //     //   });

  //     //   mapData.forEach((markerData: any) => {
  //     //     let infoWindow = new google.maps.InfoWindow({
  //     //       content: `<h5>${markerData.name}</h5>`
  //     //     });

  //     //     let marker = new google.maps.Marker({
  //     //       position: markerData,
  //     //       map: map,
  //     //       title: markerData.name
  //     //     });

  //     //     marker.addListener('click', () => {
  //     //       infoWindow.open(map, marker);
  //     //     });
  //     //   });

  //     //   google.maps.event.addListenerOnce(map, 'idle', () => {
  //     //     mapEle.classList.add('show-map');
  //     //   });

  //     // });

  //     // loadMap() {

  //     //   let mapOptions: GoogleMapOptions = {
  //     //     camera: {
  //     //        target: {
  //     //          lat: 43.0741904,
  //     //          lng: -89.3809802
  //     //        },
  //     //        zoom: 18,
  //     //        tilt: 30
  //     //      }
  //     //    };
     
  //     //   this.map = GoogleMaps.create('map_canvas', mapOptions);
     
  //     //   // Wait the MAP_READY before using any methods.
  //     //   this.map.one(GoogleMapsEvent.MAP_READY)
  //     //     .then(() => {
  //     //        console.log('Map is ready!');
     
  //     //        // Now you can use all methods safely.
  //     //        this.map.addMarker({
  //     //          title: 'Ionic',
  //     //          icon: 'blue',
  //     //          animation: 'DROP',
  //     //          position: {
  //     //            lat: 43.0741904,
  //     //            lng: -89.3809802
  //     //          }
  //     //        })
  //     //        .then(marker => {
  //     //          marker.on(GoogleMapsEvent.MARKER_CLICK)
  //     //            .subscribe(() => {
  //     //              alert('clicked');
  //     //            });
  //     //        });
     
  //     //     });
  //     //  }
  // }


  
}

