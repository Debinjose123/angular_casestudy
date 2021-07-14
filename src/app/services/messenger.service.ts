import { Injectable } from '@angular/core';
import {Subject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject=new Subject()



  constructor() { }
  sendMsg(stock:any=[])
  {
    // console.log(stock)
    this.subject.next(stock)
  }
  getMsg()
  {
    return this.subject.asObservable()

  }
  // sendSms(stock:any=[])
  // {
  //   this.subject.next(stock)
  // }
  // getSms()
  // {
  //   return this.subject.asObservable()
  // }
}
