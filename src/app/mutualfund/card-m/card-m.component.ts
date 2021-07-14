import { Component, OnInit } from '@angular/core';
import { Mutual } from 'src/app/models/mutual';
import { FundService } from 'src/app/services/fund.service';


@Component({
  selector: 'app-card-m',
  templateUrl: './card-m.component.html',
  styleUrls: ['./card-m.component.css']
})
export class CardMComponent implements OnInit {
  
  cardItems:any=[];
  cardTotal=0;
  
  constructor(private msg:FundService) { }

  ngOnInit(){
  
    this.msg.getMsg().subscribe((mutual:any= Mutual)=> {
      this.addProductToCart(mutual)
      
      
    })
    
  
      // this.msg.getSms().subscribe((stock:any= Stock)=> {
        
      //   this.removeProduct(stock)
        
      // })
  }


  addProductToCart(mutual: Mutual) {

    let productExists = false

    for (let i in this.cardItems) {
      if (this.cardItems[i].mutualId === mutual.id) {
        this.cardItems[i].qty++
        productExists = true
        break; 
      }
    }

    if (!productExists) {
      this.cardItems.push({
        mutualId: mutual.id,
        mutualName: mutual.name,
        qty: 1,
        price: mutual.price
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
  
   
  

