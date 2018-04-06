import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ImageService {

  private _getUrl = "/getImages";

  constructor(private _http: Http) { }

  getImages() {
    return this._http.get(this._getUrl)
      .map((response: Response) => response.json());
  }
}
