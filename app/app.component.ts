import {Component} from 'angular2/core';
import {ANGULAR2_GOOGLE_MAPS_DIRECTIVES} from 'angular2-google-maps/core';

@Component({
    selector: 'my-app',
    directives: [ANGULAR2_GOOGLE_MAPS_DIRECTIVES],
    styles: [
      `.sebm-google-map-container {
         height: 300px;
       }`
    ],
    template: `
    <h1>My First angular2-google-maps App</h1>
    
    <sebm-google-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
    
    </sebm-google-map>
    `
})
export class AppComponent {
  lat: number = 52.520007;
  lng: number = 13.404954;
  zoom: number = 8; // initial zoom of the map
}