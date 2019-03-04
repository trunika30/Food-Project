import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DataService} from '..//data.service'

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
 restaurant=[];

constructor(private res:DataService, private router:Router) {  
  this.restaurant=this.res.getrestaurantDetail();
}
  public getDetail(){
    this.restaurant=this.res.getrestaurantDetail();
  }
   gotorestro(restro){
     this.router.navigate(['/restro',restro.id]);
   }
  ngOnInit() {
  }

}
