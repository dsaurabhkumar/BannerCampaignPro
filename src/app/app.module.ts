import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FileSelectDirective } from 'ng2-file-upload';
import {ProgressBarModule} from "angular-progress-bar";

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BannerComponent } from './banner/banner.component';
import { CampaignComponent } from './campaign/campaign.component';
import { LogoutComponent } from './logout/logout.component';
import { UploadimageComponent } from './uploadimage/uploadimage.component';
import { DataService } from './data.service';
import { CampViewComponent } from './camp-view/camp-view.component';
import { RegisterComponent } from './register/register.component';
import { ImageService } from './image.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    BannerComponent,
    CampaignComponent,
    LogoutComponent,
    UploadimageComponent,
    FileSelectDirective,
    CampViewComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    ProgressBarModule,
    BrowserAnimationsModule
  ],
  providers: [DataService, ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
