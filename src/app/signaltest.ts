import { Injectable ,signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedSignalService {
  valueChanged = signal<any>(null); // Signal to emit changes

  obj = signal({})

  updateObj(obj:any){
    this.obj.set(obj)
  }

  updateValue(newValue: any) {
    this.valueChanged.set(newValue);    
  }
}
