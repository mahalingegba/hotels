import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRestoComponent } from './add-resto/add-resto.component';
import { ListRestoComponent } from './list-resto/list-resto.component';
import { LoginComponent } from './login/login.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { UpdateRestoComponent } from './update-resto/update-resto.component';


const routes: Routes = [
  {path:"AddResto",component:AddRestoComponent},
 
  {path:"UpdateResto/:id",component:UpdateRestoComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterUserComponent},
  {path:"",component:ListRestoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
