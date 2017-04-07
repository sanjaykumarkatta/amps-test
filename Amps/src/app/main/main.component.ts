import { Component, OnInit } from '@angular/core';
import {AmpsService} from "../amps.service";
import {Response} from "@angular/http"


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public env = ["Prod", "Non-Prod"];
  public cluster: any[];
  public server;
  public topic;
  
  constructor(private ampsservice: AmpsService) { }
  ngOnInit() {
  }
  
  onEnvChange(val){
    this.cluster=[];
    this.ampsservice.getClusterData()
      .subscribe(
        (data: any) =>{
          const myArray=[];
          for(let val in data.data){
            myArray.push(data.data[val]);
          }
          this.cluster= myArray;
        }
      );
  }
  
  onClusterChange(val){
    this.ampsservice.getServerTopicData()
      .subscribe(
        (data: any) => {
          console.log(data);
        }
      )
  }

}
