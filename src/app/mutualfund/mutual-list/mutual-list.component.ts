import { Component, OnInit } from '@angular/core';
import { MutualService} from 'src/app/services/mutual.service'
import { Mutual} from 'src/app/models/mutual'
@Component({
  selector: 'app-mutual-list',
  templateUrl: './mutual-list.component.html',
  styleUrls: ['./mutual-list.component.css']
})
export class MutualListComponent implements OnInit {

  mutualList:Mutual[] =[]
  

  constructor(private mutualService:MutualService) { }

  ngOnInit(): void {
   this.mutualList= this.mutualService.getMutual()
  }

}