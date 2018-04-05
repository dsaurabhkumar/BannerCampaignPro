import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { IActiveHours } from './IntActiveHours';
import { Observable } from 'rxjs/Observable';
import { IDummyActiveHours } from './IntActiveHours.1';
import { IDevice } from './intDevice';
import { ICountry } from './intCountry';
import { IMobileOs } from './intMobileOs';
import { IMobileBrowser } from './intMobileBrowser';
import { IDesktopOs } from './intDesktopOs';
import { IDesktopBrowser } from './intDesktopBrowser';

@Injectable()
export class DataService {

  private campTitle = new BehaviorSubject<string>("Default Title");
  currentCampTitle = this.campTitle.asObservable();
  private _urlActiveHours: string = "assets/data/activeHoursList.json";
  private _urlDeviceLIst: string = "assets/data/deviceList.json";
  private _urlCountryLIst: string = "assets/data/geoList.json";
  private _urlMobileOsLIst: string = "assets/data/mobileOs.json";
  private _urlMobileBrowserLIst: string = "assets/data/mobileBrowser.json";
  private _urlDesktopOsLIst: string = "assets/data/desktopOs.json";
  private _urlDesktopBrowserLIst: string = "assets/data/desktopBrowser.json";

  // declare HttpClientModule as dependency
  constructor(private httpClient: HttpClient, private http: Http) { }

  changeMessage(message: string) {
    this.campTitle.next(message);
  }

  getHours(): Observable<IActiveHours[]> {
    return this.httpClient.get<IActiveHours[]>(this._urlActiveHours);
  }

  getDeviceList(): Observable<IDevice[]> {
    return this.httpClient.get<IDevice[]>(this._urlDeviceLIst);
  }

  getCountryList(): Observable<ICountry[]> {
    return this.httpClient.get<ICountry[]>(this._urlCountryLIst);
  }

  getMobileOsList(): Observable<IMobileOs[]> {
    return this.httpClient.get<IMobileOs[]>(this._urlMobileOsLIst);
  }

  getMobileBrowserList(): Observable<IMobileBrowser[]> {
    return this.httpClient.get<IMobileBrowser[]>(this._urlMobileBrowserLIst);
  }

  getDesktopOsList(): Observable<IDesktopOs[]> {
    return this.httpClient.get<IDesktopOs[]>(this._urlDesktopOsLIst);
  }

  getDesktopBrowserList(): Observable<IDesktopBrowser[]> {
    return this.httpClient.get<IDesktopBrowser[]>(this._urlDesktopBrowserLIst);
  }


}
