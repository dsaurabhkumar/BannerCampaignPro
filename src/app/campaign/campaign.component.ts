import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css']
})
export class CampaignComponent implements OnInit {

  createCampBtn: Boolean = true;
  newCampInput: string = '';
  message: string;

  constructor(private router: Router, private data: DataService) { }

  ngOnInit() {
    // subscribe the data service
    this.data.currentCampTitle.subscribe(message => this.message = message);
  }

  onCampInput(event: any) {
    this.createCampBtn = false;
  }

  campView() {
    this.data.changeMessage(this.newCampInput);
    // this.router.navigate(['camp-view'], { queryParams: { newCampaign: this.newCampInput } });
    this.router.navigate(['camp-view']);
  }


}
