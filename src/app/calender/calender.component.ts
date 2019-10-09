import { Component, OnInit } from '@angular/core';
import { WebApiAdaptor, DataManager } from '@syncfusion/ej2-data';
import { View, EventSettingsModel } from '@syncfusion/ej2-schedule';
import { TOP_RESIZE_HANDLER } from '@syncfusion/ej2-schedule/src/schedule/base/css-constant';
import { EventsService } from '../events.service';


@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit {


  public setView:View = "Month";
  //  public setDate:Date = new Date(2019,7,30);
  // private eventData:DataManager= new DataManager({
  //   url:'https://js.syncfusion.com/demos/ejservices/api/Schedule/LoadData',
  //   adaptor: new WebApiAdaptor,
  //   crossDomain: true
  // });
  // dataSource:any;
  // subject: any;
  startTime: any[];
  endTime: any[];
  subjects: any[]; 
  public eventObject:EventSettingsModel
  constructor(private eventsService: EventsService) { }  
  
  ngOnInit() {
    this.eventsService.get().subscribe(
      (res) => {
        console.log("capturing",res.text);
        console.log("capturing", res);
        this.subjects=res.text;     
        this.startTime=res.start;
        this.endTime=res.end;
        console.log("capturing",this.subjects);
    },
    err => {
           console.log("error", err);
         },
       () => {
      this.eventObject = {
              dataSource:  
        // this.dataSource,//this.eventData
        // console.log(dataSource);
        
        [{
          EventTitle:this.subjects,
          EventStartTime: this.startTime,
          EventEndTime: this.endTime,
        //RecurrenceRule: "FREQ=DAILY;INTERVAL=1;COUNT=10",
        //   //IsReadonly:true,
        //   // IsAllDay: true,
        //   // IsBlock: true
        
        }
      ],
        fields:{
          subject:{name: 'EventTitle'},
          startTime:{name:'EventStartTime'},
          endTime:{name:'EventEndTime'}
        }
  }
    }) 
  }
}
