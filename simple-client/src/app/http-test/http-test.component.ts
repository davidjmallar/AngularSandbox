import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { WeatherForecast } from '../models/WeatherForecast';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.scss']
})
export class HttpTestComponent implements OnInit, OnDestroy {

  constructor(private httpClient: HttpClient) {
    console.log('Ctor');
  }

  weathers: WeatherForecast[] = [];
  isLoading = false;
  apiSubscription: Subscription | undefined;

  ngOnInit(): void {
    console.log('OnInit');
    this.update();
  }
  ngOnDestroy(): void {
    console.warn('Destroy');
    this.cancelAll();
  }
  update() {
    console.log('Calling backend!');
    this.isLoading = true;
    this.apiSubscription = this.httpClient.get<WeatherForecast[]>("http://localhost:5000/weatherforecast").subscribe(res => {
      console.log('ok!');
      this.isLoading = false;
      console.table(res);
      this.weathers = res;
    }, err => {
      console.log('err!');
      this.isLoading = false;
      console.error(err.error.error);
    });
  }

  cancelAll(): void {
    this.apiSubscription?.unsubscribe();
    console.warn('Canceled');
    this.isLoading = false;
  }

}
