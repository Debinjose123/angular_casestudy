import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-m-items',
  templateUrl: './card-m-items.component.html',
  styleUrls: ['./card-m-items.component.css']
})
export class CardMItemsComponent implements OnInit {
  @Input() cardItem:any


  constructor() { }

  ngOnInit(): void {
  }

}
