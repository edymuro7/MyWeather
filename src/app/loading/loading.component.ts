import { Component, OnInit } from '@angular/core';
import { loadingAnimation } from '../animations/loading.animation' ;
import { CurrentWeatherService } from '../Services/current-weather.service' ;

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.sass'],
  animations : [loadingAnimation()]
})
export class LoadingComponent implements OnInit {

     _elements : string[ ] = [ 'Blue', '#FB47FF',  '#F9007C', '#FF2828', 'yellow', '#4AFF47',   '#00F4F0' ] ;

     public elements : string[ ] ;

  constructor( private currentWeatherService : CurrentWeatherService ) { }

  ngOnInit() {
       this.set( ) ;
  }

  set( ){
       this.elements = this._elements ;
       this.scheduleNextIteration( ) ;
 }

 scheduleNextIteration( ){
      setTimeout(( )=>{

           if( this.elements.length == 0 ) return this.set( ) ;

           this.clear( ) ;

      }, 100 * this._elements.length + 300 ) ;
}

     clear( ){
          this.elements = [ ] ;
          this.scheduleNextIteration( ) ;
     }

}
