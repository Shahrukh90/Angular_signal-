import { Component, OnInit } from '@angular/core';
import { SharedSignalService } from './signaltest';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  title = 'signals';
  setval:boolean=false;
  obj={
    "notification_list": [
        {
            "id": 3127,
            "title": "Learn, Grow, Succeed!",
            "message": "Discover a wealth of educational resources on our website. Empower yourself with the knowledge to reach new heights.",
            "is_seen": 1,
            "seen_at": "2024-01-19T09:12:56.000Z",
            "target_type": "P",
            "target_name": "English Grammar Package",
            "target_id": 7,
            "created_at": "2024-01-19T09:12:25.000Z",
            "user_name": "champak"
        }
    ],
    "unreadCount": 0,
    "itemPerPage": 100,
    "currentPage": 1,
    "totalPageCount": 1
}
  constructor(
    private signals:SharedSignalService
  ){}

  ngOnInit(): void {
  }

  nowuseeme(){    
    this.setval=!this.setval
    console.log(!this.setval);
    this.signals.updateObj(this.obj)
    
    this.signals.updateValue(this.setval)
  }


}
