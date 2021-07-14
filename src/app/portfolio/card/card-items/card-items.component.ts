import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-items',
  templateUrl: './card-items.component.html',
  styleUrls: ['./card-items.component.css']
})
export class CardItemsComponent implements OnInit {

  @Input() cardItem:any

  

  constructor() { }

  ngOnInit(): void {
  }

}
