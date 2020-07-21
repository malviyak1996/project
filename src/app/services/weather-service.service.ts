import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Options } from '../../../node_modules/@types/selenium-webdriver/safari';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService  {

  constructor(public http: HttpClient) {
   }

   getWeatherdata(cityId,apiKey){
     return this.http.get('https://api.openweathermap.org/data/2.5/weather?id='+cityId+'&appid='+apiKey,{ observe: 'response' });
   }
}
