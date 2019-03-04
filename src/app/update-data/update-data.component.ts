import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-update-data',
  templateUrl: './update-data.component.html',
  styleUrls: ['./update-data.component.css']
})
export class UpdateDataComponent implements OnInit {
  id=[];

  constructor(private router:Router) {  }

  ngOnInit() {
    
   
  }

}
