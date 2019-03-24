import { Component } from '@angular/core';
import { ForecastService } from './Services/forecast-service.service' ;
import { GeolocationService } from './Services/geolocation.service' ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'MyWeather';

  // constructor( private forecastService : ForecastService ){ }

     constructor( private geolocationService : GeolocationService ){ }

  ngOnInit( ){
       // this.forecastService.weather$.subscribe( console.log ) ;
       this.geolocationService.requestGeolocation( ) ;
 }
}
