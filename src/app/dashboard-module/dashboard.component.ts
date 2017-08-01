import { Component, OnInit, OnDestroy } from '@angular/core';

import { SimPROServiceService } from './../sim-proservice.service';
import { Observable, Subscription } from 'rxjs/Rx';


import { JobVO } from './../vo/job-vo';
import { CustomData } from './../vo/custom-data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  tableData: CustomData[];
  timer;
  subscription: Subscription;



  constructor(private _httpService: SimPROServiceService) { }

  loadData() {
    this._httpService.getJobsList()
      .subscribe(data => {
        // console.log(data);
        if (data.result !== null && data.result !== undefined && data.result.length > 0) {
          console.log(data.result)

          let resultArray: JobVO[] = data.result;

          this.tableData = [];
          resultArray.forEach(element => {
            const job: CustomData = new CustomData();;


            job.CompanyName = element.Company.CompanyName;
            job.CustomerCompanyName = element.Customer.CompanyName;
            job.StatusColour = element.Status.StatusColour;
            job.StatusName = element.Status.StatusName;
            job.Type = element.Type.TypeName;

            this.tableData.push(job);
          });



        }
      },
      error => console.log(error));
  }

  ngOnInit() {

    this.timer = Observable.timer(100, 1000*60*1);
    this.subscription = this.timer.subscribe(t => this.loadData());

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
