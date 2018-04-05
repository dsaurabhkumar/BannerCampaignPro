import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-uploadimage',
  templateUrl: './uploadimage.component.html',
  styleUrls: ['./uploadimage.component.css']
})
export class UploadimageComponent implements OnInit {

  message : string;
  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.service.currentMessage.subscribe(message => this.message = message);
  }

}
