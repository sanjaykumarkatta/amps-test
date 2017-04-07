import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import 'rxjs/RX'

@Injectable()
export class AmpsService {

  constructor(private http: Http) {
  }
  
  getClusterData(){
   return this.http.get('http://demo6338737.mockable.io/env')
          .map((response: Response)=>response.json());
  }
  
  getServerTopicData(){
    return this.http.get('http://demo6338737.mockable.io/cluster')
      .map((response: Response) => response.json());
  }

}
