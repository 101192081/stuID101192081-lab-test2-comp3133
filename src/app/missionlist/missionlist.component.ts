import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {

  missions = [{
    "flight_number": 1,
    "mission_name": "PlaceHolder",
    "launch_year": 2000,
    "details": "PlaceHolder",
    "links": {"mission_patch_small": "https://images2.imgbox.com/40/e3/GypSkayF_o.png"}
  }];

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.sendGetRequest()
      .subscribe((res: any) => {
        this.missions = res;
      })
  }

  ngOnDestory(){
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
