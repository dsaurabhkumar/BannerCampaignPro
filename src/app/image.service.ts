import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IGetImages } from './intGetImages';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ImageService {

  private _urlGetImages = "http://localhost:3000/uploadimage/getImages";

  constructor(private _http: Http, private httpClient: HttpClient) { }

  // getImages() {
  //   return this._http.get(this._getUrl)
  //     .map((response: Response) => response.json());
  // }

  getImages(): Observable<IGetImages> {
    return this.httpClient.get<IGetImages>(this._urlGetImages);
  }


}
