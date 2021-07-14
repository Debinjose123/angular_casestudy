import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FundService {

  subject=new Subject()



  constructor() { }
  sendMsg(mutual:any=[])
  {
    // console.log(stock)
    this.subject.next(mutual)
  }
  getMsg()
  {
    return this.subject.asObservable()

  }

}

