import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router:Router) { }
  public navigate(){
    this.router.navigateByUrl('/restaurant');
  }

  ngOnInit() {
  }

}
