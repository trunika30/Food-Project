import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  restaurant=[];
  delete(id){
   
    this.res.delete(id);
   
  }

  constructor(private res:DataService) { }

  ngOnInit() {
    this.restaurant=this.res.getrestaurantDetail();
  }

}
