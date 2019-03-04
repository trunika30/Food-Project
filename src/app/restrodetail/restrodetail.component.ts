import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {DataService} from '..//data.service';

@Component({
  selector: 'app-restrodetail',
  templateUrl: './restrodetail.component.html',
  styleUrls: ['./restrodetail.component.css']
})
export class RestrodetailComponent implements OnInit {
  public i;
  restaurant=[];
  constructor(private arouter:ActivatedRoute,private router:Router, private ser:DataService) 
  {
    
   }

  ngOnInit() {
    this.restaurant=this.ser.getrestaurantDetail();
    let id=this.arouter.snapshot.paramMap.get('id');
    this.i=id;
   
  }

}
