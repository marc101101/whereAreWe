import {
  Component,
  OnInit,
  NgZone,
  Renderer
} from '@angular/core';

import {
  DataService
} from './services/index';
import {
  Http,
  Response,
  Headers,
  RequestOptions
} from '@angular/http';
import 'rxjs/add/operator/map'


declare var require: any;
declare var $: any

var GoogleMapsLoader = require('google-maps');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  map: any;
  google: any;
  globalData: any;
  styleData: any;
  dataUrl: string = "/assets/data/local_all_result_final.json";
  mapStyleUrl: string = "/assets/data/map-style.json";
  cityClicked: boolean = false;
  currentCity: any;
  currentCircle: any;
  autoCompleteResults: any;
  autoCompleteAvailable: boolean = true;
  inputValue:string = "";
  activeElement: number = -1;
  circleClicked: boolean = false;

  constructor(private zone: NgZone, private dataService: DataService, private renderer: Renderer) {}

  ngOnInit() {
    var data = "";
    this.getRadius("");
    let localThis = this;

    this.dataService.requestData(this.dataUrl).subscribe(
      data => {
        localThis.globalData = data;
        localThis.dataService.requestData(localThis.mapStyleUrl).subscribe(
          data_style => {
            localThis.styleData = data_style;
            localThis.initMap(localThis);
          }
        )
      }
    )
  }

  keyDownFunction(event): void {
    if(event.key == "ArrowDown"){
      if(this.activeElement < 3){
        this.activeElement = this.activeElement + 1;
      }
    }
    if(event.key == "ArrowUp"){
      if(this.activeElement > 0){
        this.activeElement = this.activeElement - 1;
      }
    }
    
    if (event.key == "Enter") {
      console.log(this.autoCompleteResults[this.activeElement][0]);
      
      this.autoCompleteClicked({"value": this.autoCompleteResults[this.activeElement][0]})
    } else {
      this.autoCompleteResults = [];
      if (event.target.value.length > 0) {
        this.globalData.migration_data.forEach(element => {
          if (element.city.includes(event.target.value)) {
            this.autoCompleteResults.push([element.city, element.sum_over_all]);
          }
        });
        this.autoCompleteResults.sort(function(a, b){         
            var keyA = a[1],
                keyB = b[1];
            // Compare the 2 dates
            if(keyA < keyB) return 1;
            if(keyA > keyB) return -1;
            return 0;
        });
        this.autoCompleteResults = this.autoCompleteResults.slice(0,4);
        this.autoCompleteAvailable = true;        
      }
    }
  }

  autoCompleteClicked(event): void{
    try {
      var cityClicked = event.getAttribute('data-city');      
    } catch (error) {
      var cityClicked = event.value;      
    }
    this.inputValue = cityClicked;

    this.globalData.migration_data.forEach(element => {
      if(element.city.includes(cityClicked)){
        this.currentCity = element;
        this.map.setCenter({
          lat: this.currentCity.geo_data.lat,
          lng: this.currentCity.geo_data.lng
        });
        this.map.setZoom(8);
        this.cityClicked = true;
      }
    });
    this.autoCompleteAvailable = false;         
    
  }

  getRadius(data): any {
    return Math.sqrt(data.sum_over_all) * 350;
  }

  initMap(localThis): void  {
    GoogleMapsLoader.REGION = 'DE';
    GoogleMapsLoader.KEY = "AIzaSyDwU05qbxFs_--e_4Quvi8GOTGvYVrH-Io";
    GoogleMapsLoader.load((google) => {
      localThis.map = new google.maps.Map(document.getElementById("mapContainer"), {
        center: {
          lat: 51.8134297,
          lng: 12.1016236
        },
        zoom: 6,
        mapTypeControl: false,
        streetViewControl: false,
        styles: localThis.styleData
      });

      for (var i = 0; i < localThis.globalData.migration_data.length; i++) {
        var data = localThis.globalData;

        // Add the circle for this city to the map.
        try {
          GoogleMapsLoader.load(function (google) {
            var cityCircle = new google.maps.Circle({
              strokeColor: '#026384',
              strokeOpacity: 0.8,
              strokeWeight: 2,
              fillColor: '#026384',
              fillOpacity: 0.35,
              map: localThis.map,
              center: {
                lat: data.migration_data[i].geo_data.lat,
                lng: data.migration_data[i].geo_data.lng
              },
              radius: localThis.getRadius(data.migration_data[i]),
              data_obj: data.migration_data[i]
            });

            cityCircle.addListener('click', function (e) {
              localThis.currentCity = cityCircle.data_obj;
              localThis.cityClicked = true;
              localThis.zone.run(() => { // <== added
              });
              localThis.map.setCenter({
                lat: localThis.currentCity.geo_data.lat,
                lng: localThis.currentCity.geo_data.lng
              });
              localThis.map.setZoom(10);
            });

            cityCircle.addListener('mouseover', function (e) {
              cityCircle.setOptions({
                fillColor: '#d7490b',
                strokeColor: '#026384'
              });
            });

            cityCircle.addListener('mouseout', function (e) {
              cityCircle.setOptions({
                fillColor: '#026384',
                strokeColor: '#026384'
              });
            });
          }, localThis);
        } catch (error) {
          console.log(error)
        }
      }
    }, localThis);
  }

  
}
