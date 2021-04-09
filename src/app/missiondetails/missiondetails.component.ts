import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent implements OnInit {

  mission = {
    "mission_name": "PlaceHolder",
    "launch_year": 2000,
    "links": {"mission_patch": "", "article_link": "", "wikipedia": "", "video_link": ""},
    "rocket": {"rocket_name": "PlaceHolder", "rocket_type": "PlaceHolder"},
    "launch_site": {"site_name_long": "PlaceHolder"},
    "details": "PlaceHolder"
  };

  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let flight_number = this.activatedRoute.snapshot.paramMap.get('flight_number')
    this.dataService.sendGetRequestByFlightNumber(flight_number)
      .subscribe((res: any) => {
        this.mission = res;
      })
  }

  ngOnDestory(){
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
