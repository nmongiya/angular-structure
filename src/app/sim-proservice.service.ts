import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http } from '@angular/http';
import { Router } from '@angular/router';
import { DataServiceService } from './data-service.service';
import 'rxjs/add/operator/map';

@Injectable()
export class SimPROServiceService {

  serverURL: string = 'https://itssuite.simprocloud.com/';

  // Consumer Key: narendramongiya

  // Consumer Secret: nPMMMm9l3mwZ9d4m2y0CbRjeWm52hgsoMP9H3q7pKpDDI6XcX8WKOFI3bmdicnqcCSH7_kv2sctfayUTBcJWBw


  requestURL = 'api/oauth/request_token.php';

  authorizationURL = 'api/oauth/authorize.php';

  accessTokenURL = 'api/oauth/access_token.php'

  constructor(private _http: Http,
    private router: Router,
    private dataService: DataServiceService) { }




  getJobsList() {

    const body = {};
    const username = 'narendra.mongiya';
    const password = 'L8s!5s*sfs';

    let headers = new Headers();
    headers.set('Authorization', "Basic " + btoa(username + ":" + password));

    return this._http.post(this.serverURL + 'api/?procedure=JobRetrieveAllocated&CompanyID=0', body, { headers: headers })
      .map((res) => res.json());
  }

}
