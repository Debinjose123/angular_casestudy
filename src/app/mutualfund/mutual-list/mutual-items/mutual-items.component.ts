import { Component, Input, OnInit } from '@angular/core';
import { Mutual } from 'src/app/models/mutual';
import { FundService } from 'src/app/services/fund.service';

@Component({
  selector: 'app-mutual-items',
  templateUrl: './mutual-items.component.html',
  styleUrls: ['./mutual-items.component.css']
})
export class MutualItemsComponent implements OnInit {

  @Input()
  
  mutualItem!: Mutual;

  constructor(private msg: FundService) { }

  ngOnInit(): void {

  }
  handleAddToCart(){
    this.msg.sendMsg(this.mutualItem)
  }

}
