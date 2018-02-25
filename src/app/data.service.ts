import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private test = new BehaviorSubject<any>(['The initial goal','Another silly life goal']);
  public goal = this.test.asObservable();

  constructor() { }
  
  changeGoal(data){
    console.log("data: ");
    console.log(data);
    this.test.next(data);
  }
}
