import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BannerComponent } from './banner/banner.component';
import { CampaignComponent } from './campaign/campaign.component';
import { LogoutComponent } from './logout/logout.component';
import { UploadimageComponent } from './uploadimage/uploadimage.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path:'login', component: LoginComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'banner', component: BannerComponent},
  {path:'campaign', component: CampaignComponent},
  {path:'logout', component: LogoutComponent},
  {path:'uploadimage', component: UploadimageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }