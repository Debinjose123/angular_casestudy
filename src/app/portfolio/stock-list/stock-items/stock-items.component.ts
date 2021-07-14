import { Component, OnInit ,Input} from '@angular/core';
import {Stock} from 'src/app/models/stock'
import {MessengerService} from 'src/app/services/messenger.service'

@Component({
  selector: 'app-stock-items',
  templateUrl: './stock-items.component.html',
  styleUrls: ['./stock-items.component.css']
})
export class StockItemsComponent implements OnInit {

  @Input()
  stockItem!: Stock;

  constructor(private msg: MessengerService) { }
  

  ngOnInit(): void {
  }
  handleAddToCart(){
    this.msg.sendMsg(this.stockItem)
  }
  // handleRemove()
  // {
  //   this.msg.sendSms(this.stockItem)
  // }

}
