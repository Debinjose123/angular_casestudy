import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/models/stock';
import { MessengerService} from 'src/app/services/messenger.service'
import { StockListComponent } from '../stock-list/stock-list.component';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
 
  cardItems:any=[];
  cardTotal=0;
 
  constructor(private msg:MessengerService) { }

  ngOnInit(){
  
    this.msg.getMsg().subscribe((stock:any= Stock)=> {
      this.addProductToCart(stock)
      
      
    })
    
  
      // this.msg.getSms().subscribe((stock:any= Stock)=> {
        
      //   this.removeProduct(stock)
        
      // })
  }


  addProductToCart(stock: Stock) {

    let productExists = false

    for (let i in this.cardItems) {
      if (this.cardItems[i].stockId === stock.id) {
        this.cardItems[i].qty++
        productExists = true
        break; 
      }
    }

    if (!productExists) {
      this.cardItems.push({
        stockId: stock.id,
        stockName: stock.name,
        qty: 1,
        price: stock.price
      })
    }
    this.cardTotal = 0
      this.cardItems.forEach((item: { qty: number; price: number; })=>
      {
                this.cardTotal+=(item.qty* item.price)
      })
      

    }

    // removeProduct(stock:Stock)
    // {
    //   let productExists = false

    // for (let i in this.cardItems) {
    //   if (this.cardItems[i].stockId === stock.id) {
    //     this.cardItems[i].qty++
    //     productExists = true
    //     break; 
    //   }
    // }

    // if (!productExists) {
    //   this.cardItems.push({
    //     stockId: stock.id,
    //     stockName: stock.name,
    //     qty: 1,
    //     price: stock.price
    //   })
    // }
   
    //   this.cardItems.forEach((item: { qty: number; price: number; })=>
    //   {
    //             this.cardTotal+=(item.qty* item.price)
    //   })
      

    // }

    

  }
  
   
  
