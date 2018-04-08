import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-uploadimage',
  templateUrl: './uploadimage.component.html',
  styleUrls: ['./uploadimage.component.css']
})
export class UploadimageComponent implements OnInit {

  public images: any;
  message: string;
  constructor(private _imageService: ImageService) { }

  ngOnInit() {
    this._imageService.getImages().subscribe(response => this.images = response)
  }

}
