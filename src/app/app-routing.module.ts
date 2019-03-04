import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {UpdateDataComponent} from './update-data/update-data.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { RestrodetailComponent } from './restrodetail/restrodetail.component';
import { TableComponent } from './table/table.component';
import { AddresComponent } from './addres/addres.component';

const routes: Routes = [{path:'',component:LoginComponent, pathMatch: 'full'},
{path:'update-data',component:UpdateDataComponent,
children:[
  {path:'',redirectTo:'table',pathMatch:'full'},
  {path:'table', component:TableComponent},
  {path:'addres',component:AddresComponent}
]
},
{path:'restaurant',component:RestaurantComponent},
{path:'restro',component:RestaurantComponent},
{path:"restro/:id",component:RestrodetailComponent},
{path:'home',component:HomeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
