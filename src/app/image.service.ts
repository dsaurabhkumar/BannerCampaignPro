import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IGetImages } from './intGetImages';
import { HttpClient } from '@angular/common/http';
import { IDeleteImage } from './intDeleteImage';

@Injectable()
export class ImageService {

  private _urlGetImages = "http://localhost:3000/uploadimage/getImages";
  private _urlDeleteImages = "http://localhost:3000/uploadimage/deleteImages/:id";

  constructor(private _http: Http, private httpClient: HttpClient) { }

  // getImages() {
  //   return this._http.get(this._getUrl)
  //     .map((response: Response) => response.json());
  // }

  getImages(): Observable<IGetImages> {
    return this.httpClient.get<IGetImages>(this._urlGetImages);
  }

  deleteImages(): Observable<IDeleteImage>{
    return this.httpClient.post<IDeleteImage>(this._urlDeleteImages, {id:"5acd94def1d0e23138fdf9aa"});
  }


}
