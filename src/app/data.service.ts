import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  restaurant=[{"id":0,"name":"Restaurant 1","descrip":"Description1","rate":"4.2","image":"/assets/1.jpg","time":"41","cost":"700"},
  {"id":1,"name":"Restaurant 2","descrip":"Description2","rate":"2.2","image":"/assets/4.jpg","time":"60","cost":"800"},
  {"id":2,"name":"Restaurant 3","descrip":"Description3","rate":"3.5","image":"/assets/6.jpg","time":"35","cost":"600"},
  {"id":3,"name":"Restaurant 4","descrip":"Description4","rate":"4.2","image":"/assets/4.jpg","time":"40","cost":"500"},
  {"id":4,"name":"Restaurant 5","descrip":"Description5","rate":"4.0","image":"/assets/1.jpg","time":"45","cost":"900"},
  {"id":5,"name":"Restaurant 6","descrip":"Description6","rate":"4.2","image":"/assets/6.jpg","time":"30","cost":"1000"}]

 

  public getrestaurantDetail(){
    return this.restaurant;
  }
  public addres(newval){
    this.restaurant.push(newval);
    this.restaurant.forEach((item,index)=>{
      item.id=index;
    });
    return this.restaurant;
  }
  public delete(id){
    this.restaurant.splice(id,1);
    this.restaurant.forEach((item,index)=>{
      item.id=index;
    });
    return this.restaurant;
    
  }
  constructor() { 
   }
}
