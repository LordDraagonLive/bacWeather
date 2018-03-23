import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {
  apiKey='070013a06abbee6d';
  url;

  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
    this.url='http://api.wunderground.com/api/'+this.apiKey+'/conditions/q';
  }


//check for errors
  getWeather(city,state){
    return this.http.get(this.url+'/'+state+'/'+city+'.json')
      .map(res=>res);
  }

}
