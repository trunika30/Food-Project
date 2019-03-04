import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import {MatCardModule} from '@angular/material/card';
import { RestrodetailComponent } from './restrodetail/restrodetail.component';
import { UpdateDataComponent } from './update-data/update-data.component';
import { TableComponent } from './table/table.component';
import { AddresComponent } from './addres/addres.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    RestaurantComponent,
    RestrodetailComponent,
    UpdateDataComponent,
    TableComponent,
    AddresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
