import { Component, OnInit } from '@angular/core';
import { StockService} from 'src/app/services/stock.service'
import { Stock} from 'src/app/models/stock'
@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {

  stockList:Stock[] =[]

  constructor(private stockService:StockService) { }

  ngOnInit(): void {
   this.stockList= this.stockService.geStocks()
  }

}
