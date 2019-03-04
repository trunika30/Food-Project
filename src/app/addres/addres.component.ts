import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-addres',
  templateUrl: './addres.component.html',
  styleUrls: ['./addres.component.css']
})
export class AddresComponent implements OnInit {
  restaurant=[];
  onSubmit(val:any){
    this.data.addres(val);
     
  }
  constructor(private data:DataService) { }

  ngOnInit() {
   
  }

}
