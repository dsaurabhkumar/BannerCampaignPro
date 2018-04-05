import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import "rxjs/add/operator/map";
import { Observable } from 'rxjs/Observable';
import {  FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { Http, Response } from '@angular/http';

const URL = 'http://localhost:3000/banner/';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  //To upload image
  public uploader:FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});

  onBack(){
    this.router.navigate(['/dashboard']);
  }

  constructor(private router: Router, private service: ServiceService, private http: HttpClient) { }

  ngOnInit() {
    //To upload image
    this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
      console.log("ImageUpload:uploaded:", item, status, response);
    }
  }

  
}
