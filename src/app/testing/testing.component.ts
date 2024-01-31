import { Component, OnInit, effect, } from '@angular/core';
import { SharedSignalService } from '../signaltest';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss']
})
export class TestingComponent implements OnInit{
  showMe:boolean=false;

  constructor(
    private signals:SharedSignalService
  ){
    effect(() => {
      let newValue = this.signals.valueChanged();
      console.log('The shared value changed to:', newValue);
      this.showMe=newValue;
      let newobj= this.signals.obj();
      console.log('The shared value changed to:', newobj);      
    });
  }

  ngOnInit(): void {    
  }
}
