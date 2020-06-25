import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  //Assignment
  name = '';

  //
  latitude = 16.948176;
  longitude = 82.233675;
  locationChosen = false;

  onChoseLocation(event){
    // console.log(event);
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lon;
    this.locationChosen = true;
  }

}
