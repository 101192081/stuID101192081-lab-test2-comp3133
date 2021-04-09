import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MissionlistComponent } from './missionlist/missionlist.component';
import { MissiondetailsComponent } from './missiondetails/missiondetails.component';

const routes: Routes = [
  { path: '', redirectTo: 'missionlist', pathMatch: 'full'},
  { path: 'missionlist', component: MissionlistComponent },
  { path: 'missiondetails/:flight_number', component: MissiondetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
