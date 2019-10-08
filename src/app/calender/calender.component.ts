import { Component, OnInit } from '@angular/core';
import { WebApiAdaptor, DataManager } from '@syncfusion/ej2-data';
import { View, EventSettingsModel } from '@syncfusion/ej2-schedule';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit {


  public setView:View = "Month";
   public setDate:Date = new Date(2019,7,30);
  private eventData:DataManager= new DataManager({
    url:'http://localhost:8081/api/event',
    adaptor: new WebApiAdaptor,
    crossDomain: true
  });

  public eventObject:EventSettingsModel = {
    dataSource:
    //  this.eventData
    [{
      EventTitle:"TAblet -1",
      EventStartTime: new Date(2019,9,17,9,0),
      EventEndTime: new Date(2019,9,17,9,0.25),
      RecurrenceRule: "FREQ=DAILY;INTERVAL=1;COUNT=10",
      //IsReadonly:true,
      // IsAllDay: true,
      // IsBlock: true
    }],
    fields:{
      subject:{name: 'EventTitle',default:"Test", title:"Enter Title" },
      startTime:{name:'EventStartTime'},
      endTime:{name:'EventEndTime'}
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
